import React from 'react'
import { storyblokEditable } from 'gatsby-source-storyblok'
import { Link } from "gatsby"

const Article = ({blok}) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl" {...storyblokEditable(blok)}>
    <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
    <div className="card-body">
      <h2 className="card-title">{blok.headline}</h2>
      <p>{blok.info}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">{blok.calltoaction}</button>
      </div>
    </div>
  </div>
  )
}

export default Article