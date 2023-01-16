import React from "react";
import { Link } from "gatsby";
import { storyblokEditable } from "gatsby-source-storyblok";

const Feature = ({ blok }) => {



  return (
    <div className="hero min-h-screen bg-base-200" {...storyblokEditable(blok)}>
      <div className="hero-content flex-col lg:flex-row">
        {
             blok?.image[0]?.filename !== "" ? <img 
             className="max-w-sm rounded-lg shadow-2xl" src={blok?.image[0]?.filename} alt="feature" /> : <></>
        }
   <div>

        <h1 className="text-5xl font-bold">{blok.name}</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
   </div>
      </div>
    </div>
  );
};

export default Feature;