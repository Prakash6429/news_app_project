import React from 'react'

const NewsItem =(props)=> {
  
  
    let {title, description,imageUrl,newsUrl, author, date, source} = props;
    return (
    <div className='my-3 mx-1'>
        <div className="card"  style={{backgroundColor:''}}>
          <div style ={{display:'flex', justifyContent:'flex-start', position:'absolute'}}>
        <span className="badge rounded-pill">{source}</span>
        </div>
            <img src={imageUrl?imageUrl:"https://cricketaddictor.com/wp-content/uploads/2022/06/Indian-Cricket-Team-1024x768.jpeg"} className="card-img-top" height="270px" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description?description:"Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com"}...</p>
            <a rel='noreferrer' href={newsUrl} target="_blank" type="button" className="btn">Read More</a>
            <div style ={{display:'flex', justifyContent:'flex-end', right:'0'}}>
            <p className="card-text"><small className="text-muted">By {author?author:"anonymous"} on {new Date(date).toGMTString()}</small></p>
            </div>
            </div>
        </div>
    </div>
    )
  
}

export default NewsItem