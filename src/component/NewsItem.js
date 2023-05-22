import React from 'react'
import image from './download.jpeg'

const NewsItem = (props) => {

    return (
        <>


            <div class= " skew-y-6 my-24 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl drop-shadow-2xl" >
                <div class="md:flex">
                    <div class="md:shrink-0">
                        <img class="h-48 w-full object-cover md:h-full md:w-48" src={props.imgUrl ? props.imgUrl : { image }} alt="Modern building architecture" />
                    </div>
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{props.title}...</div>
                        <a href={props.newsUrl} class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible News</a>
                        <p class="mt-2 text-slate-500">{props.description}...</p>
                        
                    </div>
                </div>
            </div>

            {/*             
            <div className={`card bg-${props.backgroundColorCard} `} style={{ border: '2px solid white' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0 }}>
                    <span className={`badge rounded-pill bg-danger text-light `} > {props.source} </span>
                </div>
                <img src={props.imgUrl ? props.imgUrl : { image }} className="card-img-top" alt="..." />
                <div className={`card-body text-${props.constructor2} `}>
                    <h5 className={`card-title`}>
                        <strong> {props.title}...
                        </strong>
                    </h5>
                    <h6><span class="badge badge-secondary">New</span></h6>
                    <p className="card-text"> {props.description}... </p>
                    <p className="card-text"><small class="text-muted">By {props.author ? props.author : "Unknown"} on {new Date(props.date).toGMTString()}</small></p>
                    <a href={props.newsUrl} target='blank' className={`btn btn-sm btn-${props.constructor}`} >About More</a>
                </div>
            </div> */}
        </>
    )

}
export default NewsItem

// btn-sm  =>> Used for small th  button