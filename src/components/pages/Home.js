import '../../App.css';
import Swiper from '../Swiper';
import HeroSection from '../HeroSection';
import SwiperTitle from '../SwiperTitle';
import LabTabs from '../Tab2';
import MobileApp from '../mobileApp';
import Footer from '../Footer';



function Home() {
    return (
        <>
            <HeroSection />
            <LabTabs/>
            <SwiperTitle />
            <Swiper />  
            <MobileApp />
            <Footer />
        </>
    );
}

export default Home;