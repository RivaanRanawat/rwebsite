import React,{Component} from 'react';
import './App.css';
class Contact extends Component{
	render() {
		return (
    <div className="Contact">
    <div class="card front">
    <div class="logo"></div>
    <div class="company-text">RIVAAN RANAWAT</div>
  </div>
  <div class="card back">
    <div class="company-text">
    <a href="https://www.instagram.com/optimumsetups/">IG</a></div>
    <div class="company-text">
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=namanrivaan@gmail.com&su=SUBJECT&body=BODY&bcc=someone.else@example.com" >Gmail</a></div>
    <div class="company-text">
    <a href="https://github.com/rivaanranawat">Github</a></div>
  </div>
    </div>
  );
	}
}

export default Contact;
