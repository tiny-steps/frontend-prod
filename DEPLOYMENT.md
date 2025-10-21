# Tiny Steps CDC - Kubernetes Deployment Guide

This repository contains the production frontend for Tiny Steps Child Development Center, deployed to [tinystepscdc.com](https://tinystepscdc.com) using Kubernetes.

## 🚀 Deployment Methods

### 1. GitHub Actions with Kubernetes (Recommended)

The repository is configured with GitHub Actions for automatic deployment to Kubernetes:

- **Production Trigger**: Push to `main` branch → tinystepscdc.com
- **Development Trigger**: Push to `master` branch → dev.tinystepscdc.com
- **Platform**: Kubernetes with Docker containers
- **Registry**: Docker Hub (tinystepsd3v/ts-react-client)

#### Required GitHub Secrets:

- `DOCKERHUB_USERNAME`: tinystepsd3v
- `DOCKERHUB_TOKEN`: Docker Hub access token
- `KUBECONFIG`: Base64 encoded Kubernetes configuration

#### Setup Steps:

1. Configure the required GitHub secrets
2. Push changes to the `main` branch for production deployment
3. GitHub Actions will automatically:
   - Build Docker image
   - Push to Docker Hub
   - Deploy to Kubernetes cluster
   - Configure SSL certificates

### 2. Manual Kubernetes Deployment

For manual deployment using kubectl:

```bash
# Build and push Docker image
docker build -t tinystepsd3v/ts-react-client:latest .
docker push tinystepsd3v/ts-react-client:latest

# Deploy to production
./deploy.sh --prod

# Deploy to development
./deploy.sh --dev
```

### 3. Docker Compose (Local Testing)

For local testing with Docker Compose:

```bash
# Build and run locally
docker-compose up --build

# Access at http://localhost
```

## 🏗️ Kubernetes Configuration

### Components

| Component         | Purpose                        | File                     |
| ----------------- | ------------------------------ | ------------------------ |
| **Deployment**    | Manages application pods       | `k8s/deployment.yml`     |
| **Service**       | Exposes application internally | `k8s/service.yml`        |
| **Ingress**       | Routes external traffic        | `k8s/ingress-prod.yml`   |
| **HPA**           | Auto-scaling based on metrics  | `k8s/hpa.yml`            |
| **ClusterIssuer** | SSL certificate management     | `k8s/cluster-issuer.yml` |

### Production vs Development

| Aspect       | Production               | Development           |
| ------------ | ------------------------ | --------------------- |
| **Domain**   | tinystepscdc.com         | dev.tinystepscdc.com  |
| **Branch**   | main                     | master                |
| **SSL**      | Let's Encrypt Production | Let's Encrypt Staging |
| **Replicas** | 3 (min) - 10 (max)       | 2 (min) - 5 (max)     |

## 🐳 Docker Configuration

### Multi-stage Build

- **Builder Stage**: Node.js 18 Alpine for building
- **Production Stage**: Nginx Alpine for serving
- **Health Checks**: Built-in health monitoring
- **Optimization**: Minimal image size with security headers

### Image Tags

- **Latest**: `tinystepsd3v/ts-react-client:latest`
- **Versioned**: `tinystepsd3v/ts-react-client:sha-timestamp`

## 🌐 Domain & SSL Configuration

### DNS Setup

Ensure the following DNS records point to your Kubernetes cluster:

- **A Record**: `tinystepscdc.com` → Kubernetes Load Balancer IP
- **CNAME**: `www.tinystepscdc.com` → `tinystepscdc.com`
- **A Record**: `dev.tinystepscdc.com` → Kubernetes Load Balancer IP

### SSL Certificates

- **Production**: Let's Encrypt production certificates
- **Development**: Let's Encrypt staging certificates
- **Auto-renewal**: Managed by cert-manager

## 📁 Project Structure

```
├── .github/workflows/     # GitHub Actions
├── k8s/                   # Kubernetes configurations
│   ├── deployment.yml    # Application deployment
│   ├── service.yml       # Internal service
│   ├── ingress-prod.yml  # Production routing
│   ├── ingress-dev.yml   # Development routing
│   ├── hpa.yml          # Auto-scaling
│   └── cluster-issuer.yml # SSL certificates
├── public/               # Static assets
├── src/                  # React components
├── Dockerfile           # Container configuration
├── nginx.conf           # Nginx configuration
├── docker-compose.yml   # Local development
└── deploy.sh            # Deployment script
```

## 🔧 Environment Configuration

### Production Environment Variables

- `NODE_ENV=production`
- `VITE_APP_DOMAIN=tinystepscdc.com`
- `VITE_APP_API_URL=https://api.tinystepscdc.com`

### Development Environment Variables

- `NODE_ENV=production`
- `VITE_APP_DOMAIN=dev.tinystepscdc.com`
- `VITE_APP_API_URL=https://dev-api.tinystepscdc.com`

## 🚨 Troubleshooting

### Common Issues:

1. **Build Failures**

   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Docker Build Issues**

   ```bash
   # Check Docker daemon
   docker info

   # Clean up Docker cache
   docker system prune -a
   ```

3. **Kubernetes Deployment Issues**

   ```bash
   # Check pod status
   kubectl get pods -l app=ts-react-client

   # Check logs
   kubectl logs -l app=ts-react-client

   # Check ingress
   kubectl get ingress
   ```

4. **SSL Certificate Issues**

   ```bash
   # Check certificate status
   kubectl get certificates

   # Check cert-manager logs
   kubectl logs -n cert-manager -l app=cert-manager
   ```

## 📊 Monitoring & Scaling

### Health Checks

- **Liveness Probe**: `/health` endpoint every 30s
- **Readiness Probe**: `/health` endpoint every 5s
- **Startup Probe**: Initial 5s delay

### Auto-scaling

- **CPU Target**: 70% utilization
- **Memory Target**: 80% utilization
- **Min Replicas**: 2 (production), 1 (development)
- **Max Replicas**: 10 (production), 5 (development)

## 🔄 Deployment Workflow

1. **Development** → Local development with `npm run dev`
2. **Testing** → Build and test with `npm run build:prod`
3. **Container Build** → Docker image creation and push
4. **Kubernetes Deploy** → Automatic deployment via GitHub Actions
5. **SSL Setup** → Automatic certificate provisioning
6. **Verification** → Check https://tinystepscdc.com

## 📞 Support

For deployment issues, contact:

- **Email**: tinystepscdc@gmail.com
- **Phone**: +91 9886062430

---

**Last Updated**: $(date)
**Version**: 2.0.0 (Kubernetes)
