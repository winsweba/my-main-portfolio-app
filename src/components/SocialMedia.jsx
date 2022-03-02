import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
     <a href="https://twitter.com/Winsweb" target="_blank" > <BsTwitter /></a>
    </div>
    <div>
    <a href="https://web.facebook.com/amankwaa.ernest.39" target="_blank"><FaFacebookF /></a>  
    </div>
    <div>
    <a href="https://www.instagram.com/winsweb/" target="_blank"><BsInstagram /></a>
    </div>
    <div>
    <a href="https://github.com/winsweba" target="_blank" ><AiFillGithub /></a>
    </div>
  </div>
);

export default SocialMedia;
