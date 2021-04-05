import React from "react";
import "./posted_in.css";
function Posted_In() {
  return (
    <div className="posted_card mt-3 mb-3">
      <h3 className="mb-3">Posted in</h3>
      <p className="mb-3">Emporium Mall , Lahore,Punjab</p>
      <iframe
        className="posted_map container-fluid"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=400&amp;height=200&amp;hl=en&amp;q=Emporium%20mall%20jophar%20town%20lahore+(Emporium%20Mall)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        width="400"
        height="200"
        frameborder="0"
      ></iframe>
    </div>
  );
}

export default Posted_In;
