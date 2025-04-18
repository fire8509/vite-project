import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Trending from '../components/Trending';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="layout">
            <Header />
            <Carousel />
            <Trending />
            <Footer />
        </div>
    );
  }
  
export default Home;