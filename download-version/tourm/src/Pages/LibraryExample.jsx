import React from 'react';
import Banner from '../library/components/Banner/Banner';
import About from '../library/pages/About'; // Importando o layout de página "About"
import data from './LibraryExample.data.json';
import HeaderOne from '../Components/Header/HeaderOne';
import FooterFour from '../Components/Footer/FooterFour';
import ScrollToTop from '../Components/ScrollToTop';

/**
 * Uma página de exemplo que demonstra o uso avançado
 * dos componentes da biblioteca com dados de um arquivo JSON.
 */
function LibraryExample() {
    return (
        <>
            {/* O layout "About" agora age como um template para a página */}
            <About
                bannerTitle={data.about.bannerTitle}
                bannerSubtitle={data.about.bannerSubtitle}
                bannerImageUrl={data.about.bannerImageUrl}
            />

            {/* Exemplo de uso do Banner com múltiplos slides e botões */}
            <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Exemplo de Banner Avançado</h2>
                <Banner slides={data.banner.slides} />
            </div>

        </>
    );
}

export default LibraryExample;