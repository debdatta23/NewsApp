import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source }=this.props;
    return (
      <div className="my-3">
        <div className="card" >
          <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0'
          }
        }>





        <span className=" badge rounded-pill bg-danger" >{source}</span>
        </div>
        <img src={!imageUrl?"https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227724992-stock-illustration-image-available-icon-flat-vector.jpg":imageUrl} className="card-img-top" alt=""/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className='card-text'>{description}</p>
                <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>    
                   <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {date}</small></p>  
                   
            </div>
        </div>

       
      </div>
    )
  }
}
