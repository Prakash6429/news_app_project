import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title, description,imageUrl,newsUrl, author, date, source} = this.props;
    return (
    <div className='my-3 mx-1'>
        <div className="card">
          <div style ={{display:'flex', justifyContent:'flex-end', position:'absolute', right: 0}}>
        <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
            <img src={imageUrl?imageUrl:"https://cricketaddictor.com/wp-content/uploads/2022/06/Indian-Cricket-Team-1024x768.jpeg"} className="card-img-top" height="270px" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description?description:"Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com"}...</p>
            <p className="card-text"><small className="text-muted">By {author?author:"anonymous"} on {new Date(date).toGMTString()}</small></p>
            <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
    </div>
    )
  }
}

export default NewsItem