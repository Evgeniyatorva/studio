import React, { Component } from 'react';
import { TimelineMax } from 'gsap';
import './style.css';

class Logo extends Component {
  constructor() {
    super();
    this.A1 = null;
    this.T = null;
    this.O = null;
    this.R = null;
    this.V = null;
    this.A2 = null;

    this.svgLogo = null;
  }

  componentDidMount() {
    let t1 = new TimelineMax();

    t1
      .from(this.T, 1.5, { y: 80})
      .from(this.O, 1.5, {rotation: -45}, '-=1.3')
      .from(this.R, 1.5, {y: -60}, '-=1.4')
      .from(this.V, 1.5, {rotation: 45}, '-=2')
      .from(this.A2, 1.5, {opacity:0}, '-=1.4')
      .from(this.svgLogo, 2, { marginLeft: '39%', marginTop: '23%',width: '353px' })
  }

  render() {
    return (
        <div className="svg-wrapper">
          <svg ref={svgLogo => this.svgLogo = svgLogo} className='svg-logo' version="1.1"x="0px" y="0px"  viewBox="0 0 353 62">
          <defs>
            <clipPath id='O'>
            <path d="M173.3,31c0,4.1-0.8,7.9-2.3,11.6c-1.5,3.6-3.8,6.8-6.7,9.6c-3,2.8-6.3,5-10.2,6.5c-3.8,1.5-7.8,2.3-11.9,2.3
                c-4.1,0-8.1-0.8-11.9-2.3c-3.8-1.5-7.2-3.7-10.1-6.5c-3-2.8-5.2-6.1-6.8-9.7C111.7,38.9,111,35,111,31c0-4.1,0.8-7.9,2.3-11.6
                s3.8-6.9,6.8-9.7c2.9-2.8,6.3-4.9,10.1-6.4C134.1,1.7,138,1,142.1,1c4.1,0,8.1,0.8,12,2.3c3.8,1.5,7.2,3.7,10.1,6.4
                c2.9,2.8,5.2,6,6.7,9.7S173.3,26.9,173.3,31z M142.1,54.6c3.2,0,6.2-0.6,9.1-1.8c2.9-1.2,5.5-2.9,7.8-5.2c2.3-2.2,4-4.8,5.2-7.6
                c1.2-2.8,1.8-5.8,1.8-9c0-3.2-0.6-6.3-1.8-9.1c-1.2-2.9-2.9-5.4-5.2-7.7c-2.3-2.2-4.9-3.9-7.8-5.1c-2.9-1.2-5.9-1.8-9.2-1.8
                c-3.2,0-6.3,0.6-9.2,1.8s-5.5,2.9-7.7,5.1c-2.3,2.3-4,4.8-5.2,7.7c-1.2,2.9-1.8,5.9-1.8,9.1c0,3.2,0.6,6.2,1.8,9
                c1.2,2.8,2.9,5.4,5.2,7.7c2.3,2.3,4.9,4,7.8,5.2C135.9,54,138.9,54.6,142.1,54.6z"/>
            </clipPath>
            <clipPath id="V"> 
               <path d="M267.2,61.7L242.5,2.3h7.5L267.2,46l17.1-43.8h7.5L267.2,61.7z"/>
            </clipPath>
          </defs>
            
            <g>
              <path ref={A1 => this.A1 = A1} d="M26.5,0L53,59.5h-7.5l-7.6-17.5H15.1L7.5,59.5H0L26.5,0z M26.5,15l-9.3,21.1h18.6L26.5,15z"/>
              <path ref={T => this.T = T} d="M75.8,59.5V8.8H59.3V2.3h39.9v6.5H82.9v50.7H75.8z"/>
              
              <g clipPath="url(#O)">
                <rect ref={O => this.O = O} x="0" y="0" width='100%' height='100%' ></rect>
              </g>
              <path ref={R => this.R = R} d="M195.7,59.5V2.3h13.7c3.9,0,6.8,0.2,8.6,0.6c1.8,0.4,3.4,1.2,4.8,2.2c1.7,1.3,3.1,3.1,4,5.3c1,2.2,1.4,4.7,1.4,7.4
                c0,4.7-1.3,8.2-4,10.7c-2.7,2.4-6.6,3.7-11.7,3.7h-1.2l22.3,27.3h-8.8l-21.3-27.3h-1v27.3H195.7z M202.5,8v19.1h5.3
                c5.4,0,9-0.7,10.9-2.1c1.8-1.4,2.7-3.8,2.7-7.2c0-3.7-0.9-6.2-2.8-7.7c-1.9-1.5-5.5-2.2-10.8-2.2H202.5z"/>
              <g clipPath="url(#V)">
                <rect ref={V => this.V = V} x="0" y="0" width='100%' height='100%'></rect>
              </g>
              <path ref={A2 => this.A2 = A2} d="M325.9,0l26.5,59.5H345l-7.6-17.5h-22.8L307,59.5h-7.5L325.9,0z M325.9,15l-9.3,21.1h18.6L325.9,15z"/>
            </g>
          </svg>
        </div>
              
    );
  }
}

export default Logo;