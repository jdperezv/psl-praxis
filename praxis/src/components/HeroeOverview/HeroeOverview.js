import React, { Component } from 'react';
import './HeroeOverview.css';

class HeroeOverview extends Component {
    render() {
        return (<div className='heroe-overview-container'>
            <img src={this.props.image} alt={this.props.name} />
            <a href={this.props.link}><h1>{this.props.name}</h1></a>
            <p className='heroe-overview-text'>{this.props.overview} </p>
        </div>);
    }
}

export default HeroeOverview;