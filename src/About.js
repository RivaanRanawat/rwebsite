import React,{Component} from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const photos= [
{
	name: 'Photo 1',
	url: 'abouts.png'
},
{
	name: 'Photo 2',
	url: 'aboutss.png'
},
{
	name: 'Photo 3',
	url: 'aboutsss.png'
},
{
	name: 'Photo 4',
	url: 'aboutssss.png'
}
]

class About extends Component{
	render() {
		const settings = {
			dots:true,
			fade:true,
			infinite:true,
			speed: 500,
			slidesToShow: 1,
			arrows:true,
			slidesToScroll:1,
			className:"slides"
		}
		return (
    <div className="About" style={{padding:34}}>
    <div>
    <Slider {...settings}>
    {photos.map((photo) => {
    	return(
    		<div>
    		<img src={photo.url} width="100%"/>
            </div>
    	)
    })}
    </Slider>
    </div>
    </div>
  );
	}
}

export default About;
