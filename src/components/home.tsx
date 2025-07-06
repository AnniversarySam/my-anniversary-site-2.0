// src/pages/Home.tsx
import "./Home.css";
import ProgressHeart from "../components/ProgressHeart";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-overlay">
            <div className="heart heart1">❤️</div>
            <div className="heart heart2">❤️</div>
            <div className="heart heart3">❤️</div>
            <h1>A Celebration of Love</h1>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="journey-section">
        <div className="journey-inner">
          <h2>Our Journey</h2>
          <p>
            From the first glance to forever — every moment has been magical.
          </p>
          <p>
            Here's a glimpse into the love story we've been writing together.
          </p>

          <div className="journey-gallery">
            <div className="gallery-item">
              <img src="/images/first-date.jpg" alt="First Date" />
              <p>First Date</p>
            </div>
            <div className="gallery-item">
              <img src="/images/special-day.jpg" alt="A Special Day" />
              <p>A Special Day</p>
            </div>
            <div className="gallery-item">
              <img src="/images/night-remember.jpg" alt="A Night to Remember" />
              <p>A Night to Remember</p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Slider Section */}
      <section className="love-slider">
        <div className="love-inner">
          <ProgressHeart />
        </div>
      </section>
    </div>
  );
};

export default Home;
