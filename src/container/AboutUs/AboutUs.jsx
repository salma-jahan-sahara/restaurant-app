import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    {/* --------Background Image start*------------*/}
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="" srcset="g letter" />
    </div>
    {/* ----------Background Image end---------- */}

    <div className='app__aboutus-content flex__center'>
      {/* ------Leftside content start-------- */}
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className='p__opensans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste nam enim possimus sequi provident aliquam dolores accusamus illum eveniet neque. </p>
        <button type="button" className='custom__button'>Know More</button>      
      </div>
      {/* -------- Leftside content  end -------*/}

      {/* ------Middle content start-------- */}

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="knife" />
      </div>
      {/* -------- Middle content  end -------*/}

      {/* ------Right side content start-------- */}
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className='p__opensans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste nam enim possimus sequi provident aliquam dolores accusamus illum eveniet neque. </p>
        <button type="button" className='custom__button'>Know More</button>      
      </div>

      {/* -------- Right side content  end -------*/}

    </div>
  </div>
);

export default AboutUs;
