import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';


import Footer from './components/footer/Footer';

import Routes from './config/Routes';

function Movies() {
    return (
        <BrowserRouter>
            <Route render={props => (
                <>
                   
                    <Routes/>
                    <Footer/>
                </>
            )}/>
        </BrowserRouter>
    );
}

export default Movies;
