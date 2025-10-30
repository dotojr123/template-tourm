import React from 'react';
import HeaderOne from '../Components/Header/HeaderOne';
import Banner from '../library/components/Banner/Banner'; // Importando o novo Banner
import Booking from '../Components/Booking/Booking';
import CategoryOne from '../Components/Category/CategoryOne';
import DestinationOne from '../Components/Destination/DestinationOne';
import AboutOne from '../Components/About/AboutOne';
import TourOne from '../Components/Tour/TourOne';
import GalleryOne from '../Components/Gallery/GalleryOne';
import Counter from '../library/components/Counter';
import TourGuide from '../Components/Guide/TourGuide';
import TestimonialOne from '../Components/Testimonials/TestimonialOne';
import BrandOne from '../Components/Brand/BrandOne';
import BlogOne from '../Components/Blog/BlogOne';
import FooterOne from '../Components/Footer/FooterOne';
import ScrollToTop from '../Components/ScrollToTop';

function HomeOne() {
    // Dados para os slides do banner, que antes estavam fixos no código
    const bannerSlides = [
        {
            imageUrl: "/assets/img/hero/hero_bg_1_1.jpg",
            subtitle: "Get unforgetable pleasure with us",
            title: "Natural Wonder of the world",
            buttons: [
                { link: "/tour", text: "Explore Tours" },
                { link: "/service", text: "Our Services", style: "2" }
            ]
        },
        {
            imageUrl: "/assets/img/hero/hero_bg_1_2.jpg",
            subtitle: "Get unforgetable pleasure with us",
            title: "Let’s make your best trip with us",
            buttons: [
                { link: "/tour", text: "Explore Tours" },
                { link: "/service", text: "Our Services", style: "2" }
            ]
        },
        {
            imageUrl: "/assets/img/hero/hero_bg_1_3.jpg",
            subtitle: "Get unforgetable pleasure with us",
            title: "Explore beauty of the whole world",
            buttons: [
                { link: "/tour", text: "Explore Tours" },
                { link: "/service", text: "Our Services", style: "2" }
            ]
        }
    ];

    return (
        <div>
            <HeaderOne />
            <Banner slides={bannerSlides} /> {/* Usando o novo Banner com props */}
            <Booking />
            <CategoryOne />
            <DestinationOne />
            <AboutOne />
            <TourOne />
            <GalleryOne />
            <Counter
                counters={[
                    { value: 12, suffix: "", title: "Years Experience" },
                    { value: 97, suffix: "%", title: "Retention Rate" },
                    { value: 8, suffix: "k", title: "Tour Completed" },
                    { value: 19, suffix: "k", title: "Happy Travellers" }
                ]}
                showShapes={true}
            />
            <TourGuide />
            <TestimonialOne />
            <BrandOne className="space-bottom" />
            <BlogOne />
            <FooterOne />
            <ScrollToTop />
        </div>
    );
}

export default HomeOne;