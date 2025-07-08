import { useState, useEffect } from 'react';
import './PhotoSlider.css';

const photos = [
  { src: '/images/photo1.jpg', position: 'center' },
  { src: '/images/photo2.jpg', position: 'top' },
  { src: '/images/photo3.jpg', position: 'top' },
  { src: '/images/photo4.jpg', position: 'center' },
  { src: '/images/photo5.jpg', position: 'center' },
  { src: '/images/photo6.jpg', position: 'center' },
  { src: '/images/photo7.jpg', position: 'center' }
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
          style={{ objectPosition: photos[index].position }}
        />
      </div>
    </div>
  );
};

export default PhotoSlider;
