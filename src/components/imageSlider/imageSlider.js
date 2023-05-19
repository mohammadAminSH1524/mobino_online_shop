import { useEffect, useState } from "react";
import styles from "./imageSlider.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
 

  const slidesStyle = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.ImageSliderContainer}>
      <div className={styles.slideStyles} style={slidesStyle}></div>
      <div className={styles.logosContainer}>
        <button onClick={goToPrevious}>
          <IoIosArrowForward />
        </button>
        <button onClick={goToNext}>
          <IoIosArrowBack />
        </button>
      </div>

      <div className={styles.sliderDotsContainer}>
        {slides.map((slide, index) => (
          <div onClick={() => goToSlide(index)} key={index}>
            {index === currentIndex ? (
              <span className={styles.selectedDot}></span>
            ) : (
              <span className={styles.unSelectedDot}></span>
            )}
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default ImageSlider;
