import React from 'react';
import Star from '../Star/Star.js';
import './StarRating.css';
import PropTypes from 'prop-types';

const StarRating = ({ starsSelected = 0, totalStars = 5, onRate = f=>f }) =>
    <div className="star-rating">
        {[...Array(totalStars)].map( (n, i) => {
            return <Star key={i} selected={ i<starsSelected } onClick={ ()=>onRate(i+1) }/>;
        })}
        <p>{starsSelected} of {totalStars} stars</p>
    </div>;


StarRating.propTypes = {
    totalStars: PropTypes.number
};
StarRating.defaultProps = {
    totalStars: 5
};

export default StarRating;