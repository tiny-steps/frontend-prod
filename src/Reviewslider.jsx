import React from "react";
import "./Reviewslider.css";

const reviews = [
  {
    text: "Harapriya mam is a good therapist.I have been taking my daughter since 9 month my kid improved a lot after coming to her.after taking Physical therapy,swing therapy & aqua now she is able to stand independently and with posterior Walker started walking with in six month. Ok really doubt where we will find place than this in Bangalore. ",

    name: "Shashi Shashikala",
    photo: "src/assets/par2.jpeg",
  },
  {
    text: "Dr. Priya played a crucial role in my son's development. We started his therapy when he was just 1 year old and Priya provided exceptional therapies which was needed at that time. Back then, he couldn't even hold his neck, but with Dr. Priya's expertise, he's now a thriving 3-year-old who can walk and run. I wholeheartedly recommend her for pediatric physical therapies. The child-friendly environment and well-equipped center make it an excellent choice for parents seeking the best for their children. Highly recommended.",
    name: "Komal Kedia",
    photo: "src/assets/par7.webp",
  },
  {
    text: "Dr harpriya mam will always in my memories ., One place which helped me uplift my life..in vydehi hospital . They really helped me and my little boy build a strong relationship. She was so contented, systematic and cooperative. and friendly touch throughout the 6 months... I would recommend others to get benefitted by thier service.. thank you so much , it meant a lot to me....",
    name: "Shrishail Biradar",
    photo: "src/assets/par3.jpeg",
  },
];

function Reviewslider() {
  return (
    <section className="reviews-section">
      <h2> Real Stories from Real Families</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <p className="review-text">{review.text}</p>
            <img
              src={review.photo}
              alt={review.name}
              className="review-photo"
            />
            <h4 className="reviewer-name">{review.name}</h4>
            <span className="stars">★★★★★</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviewslider;
