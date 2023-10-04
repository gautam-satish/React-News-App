import React, { useState } from 'react'
import NewsItem from './NewsItem'

export default function News() {

  const [sampleData, setSampleData] = useState([{
    title: "My Title",
    description: "My Description",
    imageUrl: "https://fastly.picsum.photos/id/216/200/300.jpg?hmac=c3OXbiUxWPMgwnaFpX8ZAfBL5TZzWjnof6mb4OwuSPs"
  },{
    title: "My Title2",
    description: "My Description",
    imageUrl: "https://fastly.picsum.photos/id/216/200/300.jpg?hmac=c3OXbiUxWPMgwnaFpX8ZAfBL5TZzWjnof6mb4OwuSPs"
  },{
    title: "My Title3",
    description: "My Description",
    imageUrl: "https://fastly.picsum.photos/id/216/200/300.jpg?hmac=c3OXbiUxWPMgwnaFpX8ZAfBL5TZzWjnof6mb4OwuSPs"
  }]);

  // const setData = ({
  //   setSampleData
  // })


  // let sampleJson = [{
  //   title: "My Title",
  //   description: "My Description",
  //   imageUrl: "https://fastly.picsum.photos/id/216/200/300.jpg?hmac=c3OXbiUxWPMgwnaFpX8ZAfBL5TZzWjnof6mb4OwuSPs"
  // },{
  //   title: "My Title2",
  //   description: "My Description",
  //   imageUrl: "https://fastly.picsum.photos/id/216/200/300.jpg?hmac=c3OXbiUxWPMgwnaFpX8ZAfBL5TZzWjnof6mb4OwuSPs"
  // },{
  //   title: "My Title3",
  //   description: "My Description",
  //   imageUrl: "https://fastly.picsum.photos/id/216/200/300.jpg?hmac=c3OXbiUxWPMgwnaFpX8ZAfBL5TZzWjnof6mb4OwuSPs"
  // }]

  return (
    <>
    <div className="container my-3 mx-3">
      <div className='row'>
        {sampleData.map((element)=> {
         return <div className='col md-4'>
              <NewsItem imageUrl={element.imageUrl} title={element.title} description={element.description}/>
          </div>  
        })} 
      </div>
    </div>
    </>
  )
}
