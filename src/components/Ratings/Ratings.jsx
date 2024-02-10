import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import "./Ratings.css"

const Ratings = ({ averageRating, numberOfRatings}) => {
  return (
    <div className="Ratings">
      <StarIcon style={{color: "#fcbb44", fontSize: "1.4em"}} />
      <div className="Ratings__average">{averageRating}</div>
      <div className="Ratings__number">({numberOfRatings} reviews)</div>
    </div>
  )
}

export default Ratings