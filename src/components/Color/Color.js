import React from 'react';
import StarRating from '../StarRating/StarRating2.js';
import './Color.css';

const Color = ({ title='default', color, rating=0, onRemove=f=>f, onRate=f=>f })=>{
    return (
        <section className="color">
            <h1>{ title }</h1>
            <button onClick={ onRemove } className="closeX">x</button>
            <div className="color" style={{ backgroundColor: color }}></div>
            <div>
                <StarRating starSelected={rating} onRate={ onRate }/>
            </div>
        </section>
    );
};

export default Color;
