import React, { useState, useEffect } from 'react';
import './Ai.css';

// Importuj wszystkie zdjęcia
const images = [];
for (let i = 1; i <= 50; i++) {
  images.push(require(`./photos/A1 (${i}).jpg`));
}

function Ai() {
  const [fullImage, setFullImage] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false); // Stan ładowania

  const handleClick = (fullImageSrc) => {
    setFullImage(fullImageSrc);
  };

  const handleClose = () => {
    setFullImage(null);
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
    console.log('Obrazek został w pełni załadowany.');
  };

  useEffect(() => {
    const allImages = images.map((image) => {
      const img = new Image();
      img.src = image;
      img.onload = handleImageLoad;
      return img;
    });
    return () => {
      allImages.forEach((img) => img.onload = null);
    };
  }, []);

  return (
    <div className="video-container">
      <div className="image-gallery-container">
        {!isImageLoaded && <p>Wczytywanie obrazka...</p>}
        <div className="image-gallery">
          {/* Wyświetlenie miniatur zdjęć */}
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              loading="lazy"
              alt={`Miniatura ${index}`}
              onClick={() => handleClick(image)}
              style={{ display: isImageLoaded ? 'block' : 'none' }}
              className={`imgwh ${loading ? 'loaded' : 'loading'}`}
              onLoad={() => setLoading(true)}
            />
          ))}
        </div>
      </div>
      {fullImage && (
        <div className="full-image-modal">
          <span className="close-btn" onClick={handleClose}>X</span>
          <img src={fullImage} alt="Pełny obraz" />
        </div>
      )}
    </div>
  );
}

export default Ai;
