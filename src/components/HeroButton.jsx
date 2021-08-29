import React, {Component} from 'react';

export default class HeroButton extends Component {

    constructor(props) {
        super(props);
        this.icon = (typeof(props.icon) === 'string') ? (props.icon + ' mr-2') : '';
        this.text = (typeof(props.text) === 'string') ? props.text : '';
        this.href = (typeof(props.href) === 'string') ? props.href : '#';
    }

    render() {
        return (
            <a className="btn-lg btn-primary btn-circle btn-inverted btn-noshadow mr-4 my-2" target="_blank" href={this.href}>
                <span className={this.icon}></span> {this.text}
            </a>
        );
    }

}

