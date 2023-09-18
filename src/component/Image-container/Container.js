import "./Container.css";
import myImage1 from "../asset/2.jpg";
import myImage2 from "../asset/3.jpg";
import myImage3 from "../asset/4.jpg";
const ImagesContainer = () => {
  return (
    <div className="container">
      <img className="image-section" src={myImage1} alt="pic2" />
      <img className="image-section" src={myImage2} alt="pic3" />
      <img className="image-section" src={myImage3} alt="pic4" />
    </div>
  );
};

export default ImagesContainer;
