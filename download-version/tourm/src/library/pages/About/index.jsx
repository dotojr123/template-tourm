import React from 'react';
import HeaderOne from '../../../Components/Header/HeaderOne';
import AboutFour from '../../../Components/About/AboutFour';
import OfferTwo from '../../../Components/Offer/OfferTwo';
import ElementSection from '../../../Components/Elements/ElementSection';
import TourGuideTwo from '../../../Components/Guide/TourGuideTwo';
import TestimonialOne from '../../../Components/Testimonials/TestimonialOne';
import BrandOne from '../../../Components/Brand/BrandOne';
import GalleryFive from '../../../Components/Gallery/GalleryFive';
import FooterFour from '../../../Components/Footer/FooterFour';
import ScrollToTop from '../../../Components/ScrollToTop';
import Banner from '../../components/Banner/Banner'; // Importando o novo Banner

/**
 * Um layout de página "Sobre" reutilizável.
 *
 * @param {object} props - As propriedades do componente.
 * @param {string} props.bannerTitle - O título a ser exibido no banner da página.
 * @param {string} props.bannerSubtitle - O subtítulo a ser exibido no banner da página.
 * @param {string} props.bannerImageUrl - A URL da imagem de fundo para o banner.
 */
function About({ bannerTitle, bannerSubtitle, bannerImageUrl }) {
    const bannerSlides = [
        {
            imageUrl: bannerImageUrl,
            subtitle: bannerSubtitle,
            title: bannerTitle,
            buttons: [], // Sem botões para este banner simples
        },
    ];

    return (
        <>
            <HeaderOne />
            <Banner slides={bannerSlides} />
            <AboutFour />
            <OfferTwo />
            <ElementSection />
            <TourGuideTwo />
            <TestimonialOne />
            <BrandOne />
            <GalleryFive />
            <FooterFour />
            <ScrollToTop />
        </>
    );
}

export default About;