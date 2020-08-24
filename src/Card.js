import React from 'react';
import 'tachyons';
import './Card.css';
const Card=(props)=>{ 
    return(
        <div className='tc bg-dark-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='rocky1' src={props.ig} />
            <div>
                <h1 className="f2">{props.name}</h1>
                <p id='we'>{props.username}</p>
                <div class='button1'>
                    <p><a className="yes" href={props.email} ><p id="io">Watch</p></a></p>
                </div>
            </div>
        </div>
    )
}
export default Card;