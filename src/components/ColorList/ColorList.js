import React from 'react';
import Color from '../Color/Color.js';

const ColorList = ({ colors=[], onRemove=f=>f, onRate=f=>f })=>{
    return (
        <div className="color-list">
            { (colors.length === 0) ? 
            <p>No color Listed. (Add a Color)</p> : 
            colors.map( color=><Color key={color.id} 
            {...color} 
            onRate={ (rating) => onRate(color.id, rating) }
            onRemove={ () => onRemove(color.id) }
            /> ) }
        </div>
    );
};

export default ColorList;
