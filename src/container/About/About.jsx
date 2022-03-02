import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// MotionWrap
import { AppWrap,  MotionWrap} from '../../wrapper';
import './About.scss';
import { images } from '../../constants';
import { urlFor, client } from '../../client';


// const abouts = [
//   {title: "Frontend Development", description: "I am good at web development", image: images.about01},
//   {title: "Mobile Development", description: "I am good at web development", image: images.about02},
//   {title: "Backend Development", description: "I am good at web development", image: images.about03},
// ]

const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
    .then((data) =>setAbouts(data))
  }, [])
  
  return (
    <>
    <h2 className="head-text">Let's work with <span>Good Design</span> <br />and  <span>Good Apps</span></h2>
    
    <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    
    </>
  )
}

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
  )