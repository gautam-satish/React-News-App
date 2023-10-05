import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

export default function News() {

  const data = [{
    title: "My Title",
    description: "My Description",
    urlToImage: "https://fastly.picsum.photos/id/216/200/300.jpg?hmac=c3OXbiUxWPMgwnaFpX8ZAfBL5TZzWjnof6mb4OwuSPs",
    url: ""
  },{
    title: "My Title2",
    description: "My Description",
    urlToImage: "https://fastly.picsum.photos/id/216/200/300.jpg?hmac=c3OXbiUxWPMgwnaFpX8ZAfBL5TZzWjnof6mb4OwuSPs",
    url: "https://youtube.com"
  },{
    title: "My Title3",
    description: "My Description",
    urlToImage: "https://fastly.picsum.photos/id/216/200/300.jpg?hmac=c3OXbiUxWPMgwnaFpX8ZAfBL5TZzWjnof6mb4OwuSPs",
    url: "https://google.com"
  }];

  const [sampleData, setSampleData] = useState([]);

  useEffect(() => {
    setSampleData(data);
    // fetch()
  }, []);


  return (
    <>
    <div className="container my-3 mx-3">
      <div className='row'>
        {sampleData.map((element)=> {
         return <div className='col md-4' key={element.url}>
              <NewsItem imageUrl={element.urlToImage} title={element.title} description={element.description} url={element.url}/>
          </div>  
        })} 
      </div>
    </div>
    </>
  )
}
