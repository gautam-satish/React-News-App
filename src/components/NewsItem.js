import React from 'react'

export default function NewsItem(props) {
  return (
   <>
   <div className='my-3'>
        <div className="card bg-dark text-white" style={{"width": "18rem"}}>
            <img src={props.imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.url} target="_blank" className="btn btn-primary">Read more</a>
            </div>
        </div>
    </div>
   </>
  )
}
