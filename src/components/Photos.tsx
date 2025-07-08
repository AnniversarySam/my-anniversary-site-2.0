import './Photos.css';
import PhotoSlider from '../components/PhotoSlider';
import ScrollableGallery from '../components/ScrollableGallery';

const Photos = () => {
  return (
    <div className="photos-container">
      <div className="photos-inner">
        <h2>Captured Memories 📸</h2>

        <div className="flip-gallery">

          {/* Heart Flip Card 1 */}
          <div className="heart-flip-card">
            <div className="heart-flip-inner">
              <div className="heart-flip-front">
                <span className="heart-reveal-emoji">😍</span>
                <div className="heart-overlay">
                  <span className="heart">❤️</span>
                  <span className="heart">❤️</span>
                  <span className="heart">❤️</span>
                </div>
              </div>
              <div className="heart-flip-back">
                <img src="/images/photo1.jpg" alt="Back when we were young" />
                <p className="photo-caption">Back when we were young</p>
              </div>
            </div>
          </div>

          {/* Heart Flip Card 2 */}
          <div className="heart-flip-card">
            <div className="heart-flip-inner">
              <div className="heart-flip-front">
                <span className="heart-reveal-emoji">🥳</span>
                <div className="heart-overlay">
                  <span className="heart">❤️</span>
                  <span className="heart">❤️</span>
                  <span className="heart">❤️</span>
                </div>
              </div>
              <div className="heart-flip-back">
                <img src="/images/photo2.jpg" alt="TABULA RASAAA" />
                <p className="photo-caption">TABULA RASAAA</p>
              </div>
            </div>
          </div>

          {/* Heart Flip Card 3 */}
          <div className="heart-flip-card">
            <div className="heart-flip-inner">
              <div className="heart-flip-front">
                <span className="heart-reveal-emoji">😂</span>
                <div className="heart-overlay">
                  <span className="heart">❤️</span>
                  <span className="heart">❤️</span>
                  <span className="heart">❤️</span>
                </div>
              </div>
              <div className="heart-flip-back">
                <img src="/images/photo3.jpg" alt="Goofy Moments" />
                <p className="photo-caption">Me wearing sweatshirts everywhere</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Slider Section */}
      <div className="slider-section">
        <PhotoSlider />
      </div>

      {/* Gallery Section */}
      <div className="gallery-section">
        <ScrollableGallery />
      </div>
    </div>
  );
};

export default Photos;
