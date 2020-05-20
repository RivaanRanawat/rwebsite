import React,{Component} from 'react';
import './App.css';
import Typical from 'react-typical';
import { Wave } from 'react-animated-text';
import { Link, animateScroll as scroll } from "react-scroll";

class Header extends Component{
	render() {
		return (
    <div className="Header flex flex-column">
    <div className='logoo mb5 center'>
      <img src='logo.jpg'/>
    </div>
    <div className='name rainbow tc mb3'>
      <Wave iterations='1' effect='verticalFadeIn' text="Rivaan Ranawat"/>
    </div>
    <div className='dynamicText rainbow mb3'>
    <Typical
        steps={['Hello!', 1000, "I'm Rivaan Ranawat!", 500, "I'm a passionate coder!", 500, "I'm a 15 year old android and web developer from India!", 1000, "Discover More About Me!", 500]}
        loop={Infinity}
        wrapper="p"
      />
    </div>
    <div className="flex items-center justify-center pa4">
    <Link activeClass="active"
      to="About"
      spy={true}
      smooth={true}
      offset={80}
      duration={500}>
  <a className="f5 btn no-underline neon bg-animate hover-bg-white hover-black inline-flex items-center pa3 ba border-box mr4">
    Know More!
    </a>
</Link>
<Link activeClass="active"
      to="Contact"
      spy={true}
      smooth={true}
      offset={80}
      duration={500}>
<a className="f5 btn no-underline neon bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4">
    Contact Me!
    </a>
</Link>
    </div>
    </div>
  );
	}
}

export default Header;
