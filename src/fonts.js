import { useEffect } from "react";
import CurlyFont from "/src/fonts/curly.ttf";
import LongFont from "/src/fonts/long.otf";

const Fonts = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @font-face {
        font-family: 'CurlyFont';
        src: url(${CurlyFont}) format('truetype');
        font-weight: normal;
        font-style: normal;
      }
      
      @font-face {
        font-family: 'LongFont';
        src: url(${LongFont}) format('opentype');
        font-weight: normal;
        font-style: normal;
      }

      
    `;
    document.head.appendChild(style);
  }, []);

  return null;
};

export default Fonts;
