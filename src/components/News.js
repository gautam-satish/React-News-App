import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

export default function News() {

  const data = [
        {
          "source": {
              "id": null,
              "name": "Nbcsportsphiladelphia.com"
          },
          "author": "Corey Seidman",
          "title": "‘I got chills' — Wheeler thinks crazy Philly crowd helped him reach a higher level in Game 1 - NBC Sports Philadelphia",
          "description": "Zack Wheeler knew the crowd Tuesday night was going to be crazy, but even he was taken aback by the reception and thinks it helped him hit a different gear.",
          "url": "https://www.nbcsportsphiladelphia.com/mlb/philadelphia-phillies/phillies-news/zack-wheeler-playoffs-phillies-marlins-wild-card/539093/",
          "urlToImage": "https://media.nbcsportsphiladelphia.com/2023/10/GettyImages-1716034765.jpg?quality=85&strip=all&resize=1200%2C675",
          "publishedAt": "2023-10-04T07:38:13Z",
          "content": "After four years in Philly, Zack Wheeler knows the crowd will be loud, the beverages will flow and Citizens Bank Park will be jumping for a big game.\r\n\"I knew it was going to be crazy,\" he said after… [+5451 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "CNET"
          },
          "author": null,
          "title": "The Pixel 8 Launch Is Today. Here's How to Watch the Made by Google Event - CNET",
          "description": "Today's Google event should bring big news about the Pixel 8 phones and the Pixel Watch 2.",
          "url": "https://www.cnet.com/tech/mobile/the-pixel-8-launch-is-today-heres-how-to-watch-the-made-by-google-event/",
          "urlToImage": "https://www.cnet.com/a/img/resize/07c75657f999975463b4f7c4c996a5c39e160c61/hub/2023/09/29/c17b9606-7816-4a27-8139-d508461e9676/pixel-8-and-watch-2-1.jpg?auto=webp&fit=crop&height=675&width=1200",
          "publishedAt": "2023-10-04T07:30:00Z",
          "content": "Today is the Made by Google event where we expect the Pixel 8, 8 Pro and Pixel Watch 2 to be launched. That's no surprise to Pixel aficionados -- Google hasn't exactly been keeping the new phones and… [+4844 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "YouTube"
          },
          "author": null,
          "title": "13 Minutes of 4K Forza Motorsport PC Gameplay - Max Settings - IGN",
          "description": "Forza Motorsport 2023 gameplay from two of our favorite career races running on the PC with maxed-out settings. We are running the game with an RTX 4090 on a...",
          "url": "https://www.youtube.com/watch?v=RqYtoRX5Y44",
          "urlToImage": "https://i.ytimg.com/vi/RqYtoRX5Y44/maxresdefault.jpg",
          "publishedAt": "2023-10-04T07:10:10Z",
          "content": null
      },
      {
          "source": {
              "id": null,
              "name": "CNBC"
          },
          "author": "Alex Harring",
          "title": "Stock futures dip slightly after Dow turns negative for 2023: Live updates - CNBC",
          "description": "Tuesday was a tough day for stocks, with the three major indexes ending lower by more than 1%.",
          "url": "https://www.cnbc.com/2023/10/03/stock-market-today-live-updates.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/107308332-1695915125037-nyse3.jpg?v=1696370523&w=1920&h=1080",
          "publishedAt": "2023-10-04T07:08:00Z",
          "content": "Stock futures dipped slightly Wednesday following a tough session that dragged the Dow Jones Industrial Average into negative territory for 2023.\r\nFutures tied to the 30-stock index slipped 3 points.… [+2006 chars]"
      },
      {
          "source": {
              "id": "reuters",
              "name": "Reuters"
          },
          "author": "Panu Wongcha-Um, Panarat Thepgumpanat",
          "title": "Suspected Thai mall shooter suffered breakdown, used modified pistol, police say - Reuters",
          "description": "A Thai teenager suspected of killing two foreigners in a Bangkok mall shooting had suffered a psychological breakdown and had modified a handgun designed to fire blanks, police said on Wednesday.",
          "url": "https://www.reuters.com/world/asia-pacific/suspected-gunman-mall-shooting-modified-handgun-designed-fire-blanks-police-2023-10-04/",
          "urlToImage": "https://www.reuters.com/resizer/nEBCntx2vhqQbrSttnK4_6n5jHA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/I2J66MMJ2VMLZPEHC7RM3C37ZA.jpg",
          "publishedAt": "2023-10-04T06:31:17Z",
          "content": "BANGKOK, Oct 4 (Reuters) - A Thai teenager suspected of killing two foreigners in a Bangkok mall shooting had suffered a psychological breakdown and had modified a handgun designed to fire blanks, po… [+3073 chars]"
      },
      {
          "source": {
              "id": "cnn",
              "name": "CNN"
          },
          "author": "Rhea Mogul",
          "title": "Homes of journalists at India news site critical of government raided, fueling press freedom fears - CNN",
          "description": "Police in New Delhi have raided the homes of prominent journalists linked to a left-leaning news organization known for its scrutiny of the Indian government, part of an investigation using a sweeping anti-terror law, in a move media groups called an attack o…",
          "url": "https://www.cnn.com/2023/10/03/media/india-newsclick-journalist-arrests-intl-hnk/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231003192843-01-india-journalist-raids-1003.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2023-10-04T05:32:00Z",
          "content": "Police in New Delhi have raided the homes of prominent journalists linked to a left-leaning news organization known for its scrutiny of the Indian government, part of an investigation using a sweepin… [+5088 chars]"
      },
      {
          "source": {
              "id": "abc-news",
              "name": "ABC News"
          },
          "author": "Kiara Alfonseca, Phoebe Natanson",
          "title": "Pope Francis opens possibility for blessing same-sex unions - ABC News",
          "description": "He restated that marriage in the Catholic church is between a man and a woman.",
          "url": "https://abcnews.go.com/International/pope-francis-opens-possibility-blessing-same-sex-unions/story?id=103671693",
          "urlToImage": "https://i.abcnewsfe.com/a/2386e1b0-6ba5-4a5e-85e5-2deb04b4bbca/pope-1-gty-er-231002_1696283581333_hpMain_16x9.jpg?w=992",
          "publishedAt": "2023-10-04T04:41:15Z",
          "content": "Pope Francis suggested it may be possible to bless same-sex unions in a newly public response to cardinals who questioned the pope's affirmation of the LGBTQ community in the Catholic Church.\r\nIn the… [+3007 chars]"
      },
      {
          "source": {
              "id": "usa-today",
              "name": "USA Today"
          },
          "author": "USA TODAY",
          "title": "Emergency alert: Wednesday's test and domestic violence victims - USA TODAY",
          "description": null,
          "url": "https://www.usatoday.com/story/news/nation/2023/10/03/emergency-alert-wednesday-domestic-violence-victims-danger/71046701007/",
          "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202310/thalapathy-vijay--leo-trailer--leo-055254958-16x9.jpg?VersionId=8Y6xxeBSNMlnSQCO8L9HnOh17oz9xre1&size=690:388",
          "publishedAt": "2023-10-04T04:09:55Z",
          "content": null
      },
      {
          "source": {
              "id": "associated-press",
              "name": "Associated Press"
          },
          "author": "LISA MASCARO, FARNOUSH AMIRI",
          "title": "Kevin McCarthy voted out: first House Speaker to be ousted - The Associated Press",
          "description": "House Speaker Kevin McCarthy has been voted out of the job in an extraordinary showdown, a first in U.S. history. The 216-210 vote was forced by a contingent of hard-right conservatives and throws the House and its Republican leadership into chaos. It’s the e…",
          "url": "https://apnews.com/article/mccarthy-gaetz-speaker-motion-to-vacate-congress-327e294a39f8de079ef5e4abfb1fa555",
          "urlToImage": "https://dims.apnews.com/dims4/default/d811dd2/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fec%2F9f%2F96a453551d8e116210b6cc926e9e%2F8015162e5d6f40c4bbf393d2cf878a7d",
          "publishedAt": "2023-10-04T03:35:00Z",
          "content": "WASHINGTON (AP) Speaker Kevin McCarthy was voted out of the job Tuesday in an extraordinary showdown a first in U.S. history, forced by a contingent of hard-right conservatives and throwing the House… [+7872 chars]"
      },
      {
          "source": {
              "id": "reuters",
              "name": "Reuters"
          },
          "author": "Tom Westbrook",
          "title": "Asia stocks slump as bond sell-off spooks markets - Reuters",
          "description": "Asian stocks sank to 11-month lows on Wednesday as an ongoing rout in global bond markets saw U.S. yields reach 16-year highs, challenging equity valuations and souring appetite for risk assets in general.",
          "url": "https://www.reuters.com/markets/global-markets-wrapup-1-2023-10-04/",
          "urlToImage": "https://www.reuters.com/resizer/C4-z-OsdeDYQkKCamsIzS1BU6AQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JC42N3MY55M7PATEQ5YW5RFGZM.jpg",
          "publishedAt": "2023-10-04T03:11:15Z",
          "content": "SINGAPORE, Oct 4 (Reuters) - Asian stocks sank to 11-month lows on Wednesday as an ongoing rout in global bond markets saw U.S. yields reach 16-year highs, challenging equity valuations and souring a… [+3375 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Variety"
          },
          "author": "Jordan Moreau",
          "title": "‘Ahsoka’ Finale: Surprise Force Powers, One More ‘Rebels’ Reunion and What Happens to Thrawn? - Variety",
          "description": "Here's what happened in the 'Ahsoka' season finale.",
          "url": "https://variety.com/2023/tv/news/ahsoka-finale-sabine-force-thrawn-1235744205/",
          "urlToImage": "https://variety.com/wp-content/uploads/2023/10/STC-FF-003102.jpg?w=1000&h=563&crop=1",
          "publishedAt": "2023-10-04T02:36:00Z",
          "content": "SPOILER ALERT: This article contains spoilers for the season finale of “Ahsoka,” titled “The Jedi, the Witch and the Warlord,” now streaming on Disney+.\r\nWith the finale of “Ahsoka,” the latest chapt… [+3359 chars]"
      },
      {
          "source": {
              "id": "cnn",
              "name": "CNN"
          },
          "author": "Sara Smart",
          "title": "Baltimore police confirm multiple victims in an active shooter situation at Morgan State University - CNN",
          "description": "Baltimore police are responding to an active shooter situation involving multiple victims at Morgan State University Tuesday night, the department confirmed to CNN.",
          "url": "https://www.cnn.com/2023/10/03/us/baltimore-morgan-state-university-campus-shooting/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231003194006-01-baltimore-active-shooter-1003.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2023-10-04T02:29:00Z",
          "content": "Baltimore police are responding to an active shooter situation involving multiple victims at Morgan State University Tuesday night, the department confirmed to CNN.\r\nThere is a preliminary report of … [+953 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "CNBC"
          },
          "author": "Sheila Chiang",
          "title": "TikTok halts e-commerce service in Indonesia following ban - CNBC",
          "description": "This comes after Indonesia imposed a one-week deadline for TikTok to become a standalone app.",
          "url": "https://www.cnbc.com/2023/10/04/tiktok-halts-e-commerce-service-in-indonesia-following-ban.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/107245095-1684828740753-gettyimages-1245350337-TIKTOK_Live_Broadcast_Popular_In_China.jpeg?v=1696386433&w=1920&h=1080",
          "publishedAt": "2023-10-04T02:27:00Z",
          "content": "TikTok Indonesia said it will end transactions on its e-commerce marketplace by Thursday, in order to comply with new local regulations.\r\nThe announcement comes after the Indonesian ministry of trade… [+1495 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "VentureBeat"
          },
          "author": "Sharon Goldman",
          "title": "Meta's AI stickers are here and already causing controversy - VentureBeat",
          "description": "Meta's new AI Stickers raise concerns as content filters miss objectionable mashups, including copyrighted characters in controversial scenarios with guns and more.",
          "url": "https://venturebeat.com/ai/metas-ai-stickers-are-here-and-already-causing-controversy/",
          "urlToImage": "https://venturebeat.com/wp-content/uploads/2023/10/crop-2.jpg?w=1200&strip=all",
          "publishedAt": "2023-10-04T02:23:00Z",
          "content": "VentureBeat presents: AI Unleashed - An exclusive executive event for enterprise data leaders. Network and learn with industry peers.Learn More\r\nWell, that didnt take long: Just a week after Meta ann… [+1081 chars]"
      },
      {
          "source": {
              "id": "nbc-news",
              "name": "NBC News"
          },
          "author": "Dennis Romero, Gemma DiCasimirro",
          "title": "Philadelphia police say they have a person of interest in journalist's fatal shooting - NBC News",
          "description": "Philadelphia police said Tuesday they had a person of interest in the fatal shooting of a local journalist.",
          "url": "https://www.nbcnews.com/news/us-news/philadelphia-police-say-person-interest-journalists-fatal-shooting-rcna118717",
          "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-10/231002-Josh-Kruger-al-1322-58822a.jpg",
          "publishedAt": "2023-10-04T01:23:00Z",
          "content": "Philadelphia police said Tuesday they had a person of interest in the fatal shooting of a local journalist.\r\nOfficials did not name the person or provide further details in the investigation into the… [+1944 chars]"
      },
      {
          "source": {
              "id": "reuters",
              "name": "Reuters"
          },
          "author": "Ahmed Aboulenein",
          "title": "Kaiser Permanente and healthcare workers head for labor clash as strike deadline looms - Reuters",
          "description": "Kaiser Permanente appeared headed for a labor clash with 75,000 of its healthcare workers as union leaders said contract talks had stalled on Tuesday, leaving the two sides hours away from a threatened three-day strike in several states.",
          "url": "https://www.reuters.com/world/us/kaiser-permanente-healthcare-workers-head-labor-clash-strike-deadline-looms-2023-10-04/",
          "urlToImage": "https://www.reuters.com/resizer/b6uAeKAfuLCmH8RHBIHBw3iSS4g=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CS2QMKRGT5MUNC3ACGTLMALMFY.jpg",
          "publishedAt": "2023-10-04T01:18:00Z",
          "content": "WASHINGTON, Oct 3 (Reuters) - Kaiser Permanente appeared headed for a labor clash with 75,000 of its healthcare workers as union leaders said contract talks had stalled on Tuesday, leaving the two si… [+3949 chars]"
      },
      {
          "source": {
              "id": "ars-technica",
              "name": "Ars Technica"
          },
          "author": "Stephen Clark",
          "title": "It’s crunch time for companies building NASA’s commercial lunar landers - Ars Technica",
          "description": "Big tests loom in the months ahead for NASA's lander fleet.",
          "url": "https://arstechnica.com/space/2023/10/its-crunch-time-for-companies-building-nasas-commercial-lunar-landers/",
          "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2023/10/peregrine1-factory-760x380.jpg",
          "publishedAt": "2023-10-04T00:21:51Z",
          "content": "Enlarge/ Astrobotic's first lunar lander, named Peregrine, is complete and ready for shipment to the launch site at Cape Canaveral, Florida.\r\n16 with \r\nWithin a few months, NASA may celebrate the fir… [+3733 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "KTRK-TV"
          },
          "author": null,
          "title": "How to watch solar eclipse in Houston: ABC13 prepares you for upcoming Oct. 14 event as moon is set to pass between sun and Earth - KTRK-TV",
          "description": "Mark your calendars! ABC13 has tips on how to help you make plans to view this possibly once-in-a-lifetime event coming up this month.",
          "url": "https://abc13.com/how-to-watch-solar-eclipse-in-houston-when-is-the-next-october-14-earth/13859887/",
          "urlToImage": "https://cdn.abcotvs.com/dip/images/13860214_eclipse-img.png?w=1600",
          "publishedAt": "2023-10-04T00:01:42Z",
          "content": "HOUSTON, Texas (KTRK) -- Mark your calendars because on Saturday, Oct. 14, Houstonians will be able to view a solar eclipse.\r\nNot only that, but Texas will be within the path of totality for the firs… [+1932 chars]"
      },
      {
          "source": {
              "id": "cbs-news",
              "name": "CBS News"
          },
          "author": null,
          "title": "\"Apocalyptic\" bus crash near Venice kills at least 21, Italian authorities say - CBS News",
          "description": "The bus crashed in the Mestre suburb of Venice on Tuesday after falling several meters from an elevated street. Two children were among the dead.",
          "url": "https://www.cbsnews.com/news/bus-crash-venice-italy-suburb-elevated-street-railway-tracks/",
          "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/10/03/8df691e4-5728-4abe-9d7f-5368b4c8d864/thumbnail/1200x630/66044eba1ef23e5d1107b067a04c8cd7/gettyimages-1704944605.jpg?v=42bbcea0e3eaab3fb7d470f54c86b0bd",
          "publishedAt": "2023-10-04T00:01:00Z",
          "content": "A bus crashed near the Italian city of Venice after falling from an elevated street, killing at least 21 people and injuring 18 others on Tuesday, authorities said.\r\nThe bus was carrying foreign tour… [+2117 chars]"
      },
      {
          "source": {
              "id": "nbc-news",
              "name": "NBC News"
          },
          "author": "Adam Reiss, Lisa Rubin, Dareh Gregorian",
          "title": "N.Y. judge orders Trump to delete 'disparaging' post about his law clerk and threatens sanctions - NBC News",
          "description": "The judge presiding over Donald Trump's $250 million civil fraud trial in New York issued a partial gag order Tuesday after the former president trashed his law clerk on social media.",
          "url": "https://www.nbcnews.com/politics/donald-trump/judge-orders-trump-delete-disparaging-post-law-clerk-threatens-sanctio-rcna118667",
          "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-10/231003-donald-trump-trial-jm-1513-81df74.jpg",
          "publishedAt": "2023-10-03T23:22:48Z",
          "content": "The judge presiding over Donald Trump's $250 million civil fraud trial in New York issued a partial gag order Tuesday after the former president trashed his law clerk on social media.\r\n\"Personal atta… [+3324 chars]"
      }
  ];

  const [sampleData, setSampleData] = useState([]);

  const handleNextClick = (()=>{
    console.log('Next')
  })

  const handlePreviousClick = (()=>{
    console.log('Previous')
  })

  useEffect(() => {
    setSampleData(data);
    // let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=b5dc418e903a4c109b766fabcc3eab31";
    // fetch(url)
    //   .then(response => response.json())
    //   .then(data => {
    //     setSampleData(data.articles);
    //   })
    //   .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
    <div className="container my-3">
      <h1>Top Headlines</h1>
      <div className='row'>
        {sampleData.map((element)=> {
         return <div className='col md-4' key={element.url}>
              <NewsItem imageUrl={element.urlToImage} title={element.title} description={element.description} url={element.url}/>
          </div>  
        })} 
      </div>
      <div className='container d-flex justify-content-between'>
        <button className='btn btn-light' onClick={handlePreviousClick} >&larr; Previous</button>
        <button className='btn btn-light' onClick={handleNextClick} >Next &rarr;</button>
        
      </div>
    </div>
    </>
  )
}

