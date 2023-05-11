import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'images/Macintosh.png',
    'images/Alex-Turing.png',
    'images/Enigma.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Cambiar la imagen cada 3 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  return (
    <div>
      <img className='pannel-img' src={images[currentImage]} alt="Imagen" />
    </div>
  );
};

export default ImageSlider;