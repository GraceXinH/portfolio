import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';
import Resume from '../components/myresume/Resume';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT" text="Hi, my name is Xin Hui." 
      text1="I am a full-stack Java developer, 
      but my back end skill is better than front end." 
      text2="Now, I am still learning the new technology and practice it." 
      text3="I'm creative, collaborative and trustworthy! "
      text4="I hope that I will have a chance to work with you."
      withId="yes"/>
      <AboutContent/>
      <Resume/>
      <Footer/>
    </div>
  )
}

export default About