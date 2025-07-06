import './ScrollableGallery.css';

const galleryImages = [
  { src: '/images/photo1.jpg', position: 'center' },
  { src: '/images/photo2.jpg', position: 'top' },
  { src: '/images/photo3.jpg', position: 'top' },
  { src: '/images/photo4.jpg', position: 'center' },
  { src: '/images/photo5.jpg', position: 'center' },
  { src: '/images/photo6.jpg', position: 'center' },
  { src: '/images/photo7.jpg', position: 'center' },
  { src: '/images/photo8.jpg', position: 'top' },
  { src: '/images/photo9.jpg', position: 'top' },
  { src: '/images/photo10.jpg', position: 'top' },
];

const ScrollableGallery = () => {
  return (
    <div className="scroll-gallery-wrapper">
      <div className="scroll-gallery-track">
        {galleryImages.map((image, idx) => (
          <div className="scroll-gallery-item" key={idx}>
            <img
              src={image.src}
              alt={`Gallery ${idx + 1}`}
              style={{ objectPosition: image.position }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableGallery;
