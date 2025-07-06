import { useState, useEffect } from 'react';
import './PhotoSlider.css';

const photos = [
  { src: '/images/photo1.jpg', caption: 'First Trip Together', position: 'center' },
  { src: '/images/photo2.jpg', caption: 'Birthday Surprise', position: 'top' },
  { src: '/images/photo3.jpg', caption: 'Anniversary Evening', position: 'top' },
  { src: '/images/photo4.jpg', caption: 'A Laugh We Shared', position: 'center' },
  { src: '/images/photo5.jpg', caption: 'Our Secret Spot', position: 'center' },
  { src: '/images/photo6.jpg', caption: 'That Beautiful Sunset', position: 'center' },
  { src: '/images/photo7.jpg', caption: 'Goofy Moments 💫', position: 'center' }
];

const PhotoSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % photos.length);
    }, 3000); // change image every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-wrapper">
      <div className="slider-image">
        <img
          src={photos[index].src}
          alt={photos[index].caption}
          style={{ objectPosition: photos[index].position }}
        />
      </div>
      <p className="slider-caption">{photos[index].caption}</p>
    </div>
  );
};

export default PhotoSlider;
