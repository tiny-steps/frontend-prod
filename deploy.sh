#!/bin/bash

# Kubernetes deployment script for tinystepscdc.com
set -e

echo "🚀 Starting Kubernetes deployment for Tiny Steps CDC..."

# Check if kubectl is available
if ! command -v kubectl &> /dev/null; then
    echo "❌ kubectl is not installed. Please install kubectl first."
    exit 1
fi

# Check if kubeconfig is set
if [ -z "$KUBECONFIG" ] && [ ! -f "$HOME/.kube/config" ]; then
    echo "❌ Kubernetes config not found. Please set up kubeconfig."
    exit 1
fi

# Build Docker image
echo "🐳 Building Docker image..."
docker build -t tinystepsd3v/ts-frontend-prod:latest .

# Push to Docker Hub (if logged in)
if docker info | grep -q "Username: tinystepsd3v"; then
    echo "📤 Pushing to Docker Hub..."
    docker push tinystepsd3v/ts-frontend-prod:latest
else
    echo "⚠️  Not logged into Docker Hub. Please run 'docker login' first."
fi

# Deploy to Kubernetes
echo "☸️  Deploying to Kubernetes..."

# Apply configurations
kubectl apply -f k8s/cluster-issuer.yml
kubectl apply -f k8s/deployment.yml
kubectl apply -f k8s/service.yml
kubectl apply -f k8s/hpa.yml

# Deploy to production or development
if [ "$1" = "--prod" ]; then
    echo "🌐 Deploying to production (tinystepscdc.com)..."
    kubectl apply -f k8s/ingress-prod.yml
    kubectl set image deployment/ts-frontend-prod ts-frontend-prod=tinystepsd3v/ts-frontend-prod:latest
    kubectl rollout status deployment/ts-frontend-prod
    echo "✅ Production deployment completed!"
    echo "🔗 Application will be available at: https://tinystepscdc.com"
elif [ "$1" = "--dev" ]; then
    echo "🧪 Deploying to development (dev.tinystepscdc.com)..."
    kubectl apply -f k8s/ingress-dev.yml
    kubectl set image deployment/ts-frontend-prod ts-frontend-prod=tinystepsd3v/ts-frontend-prod:latest
    kubectl rollout status deployment/ts-frontend-prod
    echo "✅ Development deployment completed!"
    echo "🔗 Application will be available at: https://dev.tinystepscdc.com"
elif [ "$1" = "--logs" ]; then
    echo "📋 Checking deployment logs and status..."
    echo "=== Pod Status ==="
    kubectl get pods -l app=ts-frontend-prod
    echo "=== Service Status ==="
    kubectl get svc ts-frontend-prod-service
    echo "=== Ingress Status ==="
    kubectl get ingress
    echo "=== Pod Logs ==="
    kubectl logs -l app=ts-frontend-prod --tail=50
    echo "=== Describe Pod ==="
    kubectl describe pods -l app=ts-frontend-prod
    echo "=== Events ==="
    kubectl get events --sort-by='.lastTimestamp'
else
    echo "📋 Kubernetes configurations applied!"
    echo "💡 Use --prod for production, --dev for development, or --logs for troubleshooting"
    echo "🔗 Production: https://tinystepscdc.com"
    echo "🔗 Development: https://dev.tinystepscdc.com"
fi

echo "✅ Deployment script completed!"
