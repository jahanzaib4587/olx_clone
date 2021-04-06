import React from "react";

function Category_Component(props) {
  var c = ["program", "play", "study"];
  const loop = c.map((val) => (
    <a href="category">
      {val}
      <br></br>
    </a>
  ));
  return (
    <div className="col-lg-3 mb-3">
      <h6>{props.title}</h6>
      {loop}
    </div>
  );
}
// {props.sub0}
export default Category_Component;
