import './Home.css';

import React from 'react';
import Image from '../assets/images/home_image.png';

const Home = () =>{
  return (
    <div class='welcome'>
      <div>
        <img src={Image} class='welcome-image' alt='Landmannalaugar in Iceland'/>
      </div>
      <div class='message'>
        <p>👋🏻 Hello! My name is <span>Nicholas Moody</span>.</p>
        <p>📍 I am a Data Engineer and Computer Science graduate student from <span>Jacksonville, Florida</span>, currently residing in <span>Seattle, Washington</span>.</p>
        <p>🏥 I currently develop data pipelines and business intelligence solutions for <span>Johns Hopkins Medicine</span> and study at the <span>Georgia Institue of Technology</span>.</p>
      </div>

    </div>
  );
}
export default Home;