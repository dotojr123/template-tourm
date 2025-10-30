import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Pagination, EffectFade, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import styles from './Banner.module.css';

/**
 * Um componente de banner reutilizável que exibe um carrossel de slides.
 *
 * @param {object} props - As propriedades do componente.
 * @param {Array<object>} props.slides - Uma lista de objetos de slide para exibir no carrossel.
 * @param {string} props.slides[].imageUrl - A URL da imagem de fundo para o slide.
 * @param {string} props.slides[].subtitle - O subtítulo a ser exibido no slide.
 * @param {string} props.slides[].title - O título principal a ser exibido no slide.
 * @param {Array<object>} props.slides[].buttons - Uma lista de botões para o slide.
 * @param {string} props.slides[].buttons[].link - O URL do link para o botão.
 * @param {string} props.slides[].buttons[].text - O texto a ser exibido no botão.
 * @param {string} props.slides[].buttons[].style - O estilo do botão (opcional).
 */
function Banner({ slides }) {
    const swiperRef = useRef(null);

    useEffect(() => {
        // Function to add animation classes
        const animationProperties = () => {
            document.querySelectorAll('[data-ani]').forEach((element) => {
                const animationName = element.getAttribute('data-ani');
                element.classList.add(animationName);
            });

            document.querySelectorAll('[data-ani-delay]').forEach((element) => {
                const delayTime = element.getAttribute('data-ani-delay');
                element.style.animationDelay = delayTime;
            });
        };

        animationProperties();
    }, []);

    // Event handler for custom navigation arrows
    const handleSliderNavigation = (direction) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiper = swiperRef.current.swiper;
            if (direction === "prev") {
                swiper.slidePrev();
            } else {
                swiper.slideNext();
            }
        }
    };

    return (
        <div className={`${styles.thHeroWrapper} ${styles.hero1}`} id="hero">

            <Swiper
                modules={[Navigation, Pagination, EffectFade]} // Initialize necessary modules
                effect="fade" // Use fade effect
                loop={true} // Enable loop
                speed={1000}
                pagination={{
                    el: ".swiper-pagination", // Custom pagination container
                    clickable: true, // Enable clickable pagination
                }}
                navigation={{
                    nextEl: ".slider-next", // Custom next button
                    prevEl: ".slider-prev", // Custom prev button
                }}
                className={`${styles.thSlider} ${styles.heroSlider1}`}
                id="heroSlide1"
            >
                <div className="swiper-wrapper">
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.heroInner}>
                                <div
                                    className={styles.thHeroBg}
                                    style={{
                                        backgroundImage: `url(${slide.imageUrl})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                    }}
                                >
                                </div>
                                <div className="container">
                                    <div className={styles.heroStyle1}>
                                        <span
                                            className={`${styles.subTitle} ${styles.style1}`}
                                            data-ani="slideinup"
                                            data-ani-delay="0.2s"
                                        >
                                            {slide.subtitle}
                                        </span>
                                        <h1
                                            className={styles.heroTitle}
                                            data-ani="slideinup"
                                            data-ani-delay="0.4s"
                                        >
                                            {slide.title}
                                        </h1>
                                        <div
                                            className={styles.btnGroup}
                                            data-ani="slideinup"
                                            data-ani-delay="0.6s"
                                        >
                                            {slide.buttons.map((button, btnIndex) => (
                                                <Link to={button.link} key={btnIndex} className={`th-btn ${button.style ? `style${button.style}` : ''} th-icon`}>
                                                    {button.text}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
                <div className={styles.thSwiperCustom}>
                    <button
                        className={`${styles.sliderArrow} ${styles.sliderPrev}`}
                        onClick={() => handleSliderNavigation("prev")}
                    >
                        <img src="/assets/img/icon/right-arrow.svg" alt="Prev" />
                    </button>
                    <div className="swiper-pagination" /> {/* Pagination container */}
                    <button
                        className={`${styles.sliderArrow} ${styles.sliderNext}`}
                        onClick={() => handleSliderNavigation("next")}
                    >
                        <img src="/assets/img/icon/left-arrow.svg" alt="Next" />
                    </button>
                </div>
            </Swiper>
        </div>

    )
}

export default Banner;