import React from 'react'

export default function NewsItem(props) {
  return (
   <>
    <div className="card mb-3 text-bg-dark" style={{"max-width": "540px"}}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src={props.imageUrl} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text" style={{"color": "rgb(165, 165, 165)"}}>{props.description}</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 2 mins ago</small></p>
            </div>
            </div>
        </div>
    </div>
   </>
  )
}
