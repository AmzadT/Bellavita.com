import { useEffect } from 'react';

const TitleImage = () => {
  useEffect(() => {
    const link =
      document.querySelector("link[rel='icon']") || document.createElement('link');
    link.rel = 'icon';
    link.href =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL5G-kSbaNOQMkZjiRVresILprZ9lK4su33g&s';
    if (!link.parentNode) {
      document.head.appendChild(link);
    }
  }, []);

  return null; 
};

export default TitleImage;
