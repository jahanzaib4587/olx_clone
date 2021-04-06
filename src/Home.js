import React from "react";
import Header from "./Header/Header";
import Second_header from "./Header/Second_header";
import Parent_Holder from "./Recommendations/Parent_Holder";
import Parent_Card from "./Search_Cards/Parent_Card";
import Banner_image from "./Header/Banner_image";
function Home() {
  return (
    <div>
      <Header></Header>
      <Second_header></Second_header>
      <Banner_image></Banner_image>
      <Parent_Card></Parent_Card>
      <Parent_Holder></Parent_Holder>
    </div>
  );
}

export default Home;
