import React from "react"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ShareIcon from "@mui/icons-material/Share"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import PlayCircleIcon from "@mui/icons-material/PlayCircle"
import "./Header.css"

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__icons-section">
        <button className="Header__button">
          <ArrowBackIcon />
        </button>
        <div className="Header__icons-right">
          <button className="Header__button">
            <ShareIcon />
          </button>
          <button className="Header__button">
            <FavoriteBorderIcon />
          </button>
        </div>
      </div>
      <div className="Header__preview-icon">
        <button className="Header__play-button">
          <PlayCircleIcon /> Workout Preview
        </button>
      </div>
      {/* <div className="Header__thumbs-list">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div> */}
    </div>
  )
}

export default Header
