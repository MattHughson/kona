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
        <p className="py-6">{blok.info}</p>
        <label htmlFor="my-modal-4" className="btn btn-primary">{blok.calltoaction}</label>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
<label htmlFor="my-modal-4" className="modal cursor-pointer ">
<label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="modal-box w-11/12 max-w-5xl">


  <iframe title="bookme" src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1WmZVD4CB9u63Dhp51gcJFXdumzDDZeL4xsii-tlz6aFOPALry3Itp9V8CuAdvN29bYJ46Izfw?gv=true" width='100%' height="800"></iframe>
  
  </div>
</label>

   </div>
      </div>
    </div>

    
  );
};

export default Feature;