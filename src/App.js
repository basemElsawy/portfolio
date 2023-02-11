import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/sideBar';
import Home from './components/Home/home';
import Resume from './components/resume/resume';
import Services from './components/services/services';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Blog from './components/blog/blog';
import Testmonials from './components/testmonials/test';
import Pricing from './components/pricing/pricing';
import Contact from './components/contact/contact';




const App = () => {
    return (
        <>
            <Sidebar />
            <main className='main'>
                <Home />
                <About />
                <Services />
                <Resume />
                <Portfolio />
                <Pricing />
                <Testmonials />
                <Blog />
                <Contact />

            </main>

        </>
    )
}

export default App;