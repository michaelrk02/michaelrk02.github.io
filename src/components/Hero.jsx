import React, {Component} from 'react';
import HeroButton from './HeroButton.jsx';

export default class Hero extends Component {

    render() {
        return (
            <div className="hero">
                <div className="hero-container">
                    <div className="hero-title">Hello, World!</div>
                    <div className="hero-subtitle">
                        I am <b>Michael Raditya Krisnadhi</b>, a software engineer and computer science enthusiast. My
                        coding journey started when I was 12 and attending middle school, in which time I studied C programming
                        language. And now here I am, a confident individual who is passionate at software development
                        and always willing to learn many things to contribute to society.
                    </div>
                    <div className="hero-contents">
                        <HeroButton icon="fab fa-github" text="GitHub" href="https://github.com/michaelrk02/"/>
                        <HeroButton icon="fab fa-linkedin" text="LinkedIn" href="https://linkedin.com/in/michaelrk02/"/>
                        <HeroButton icon="fab fa-soundcloud" text="SoundCloud" href="https://soundcloud.com/michael-krisnadhi/"/>
                    </div>
                </div>
            </div>
        );
    }

}

