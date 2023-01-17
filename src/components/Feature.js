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

        <h1 className="text-5xl ç">{blok.name}</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <label htmlFor="my-modal-6" className="btn btn-primary">{blok.calltoaction}</label>

<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">

<iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1WmZVD4CB9u63Dhp51gcJFXdumzDDZeL4xsii-tlz6aFOPALry3Itp9V8CuAdvN29bYJ46Izfw?gv=true" style="border: 0" width="100%" height="600" frameborder="0"></iframe>

    </div>
  </div>
</div>
   </div>
      </div>
    </div>

    
  );
};

export default Feature;