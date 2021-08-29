import React, {Component} from 'react';
import Hero from './Hero.jsx';
import Introduction from './Introduction.jsx';
import Projects from './Projects.jsx';
import Skilltech from './Skilltech.jsx';
import Background from './Background.jsx';
import Footer from './Footer.jsx';
import '../styles/App.css';

export default class App extends Component {

    render() {
        return (
            <div>
                <Hero />
                <div className="container mx-auto px-2 my-8"><Introduction /></div>
                <div className="container mx-auto px-2 my-8"><Projects /></div>
                <div className="container mx-auto px-2 my-8"><Skilltech /></div>
                <div className="container mx-auto px-2 my-8"><Background /></div>
                <Footer />
            </div>
        );
    }

}

