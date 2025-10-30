import React from 'react';
import AboutLayout from '../library/pages/About';

function AboutPage() {
    // Dados para a página "Sobre", que serão passados como props para o layout
    const pageData = {
        bannerTitle: "About Tourm",
        bannerSubtitle: "Sua Aventura Começa Aqui",
        bannerImageUrl: "/assets/img/bg/breadcumb-bg1-1.jpg"
    };

    return (
        <AboutLayout
            bannerTitle={pageData.bannerTitle}
            bannerSubtitle={pageData.bannerSubtitle}
            bannerImageUrl={pageData.bannerImageUrl}
        />
    );
}

export default AboutPage;