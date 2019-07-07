import React from "react";
import "./style.css";

// The Thumbnail component renders a div that uses some CSS to render a background image
// It will always keep square proportions at any size without the image warping
// The "role" and "aria label" are there to identify the element's purpose as an image for accessibility purposes
function Thumbnail({ 
  src,
  thumbnail = "http://wantaghwoodschiropractic.com/index/wp-content/uploads/2016/07/Playground.jpg" })
{
  return (
    <div
      className="col-xs-4 sm-2 thumbnail"
      role="img"
      aria-label="Park Image"
      style={{
        backgroundImage: `url(${thumbnail})`
      }}
    />
  )};
  export default Thumbnail;