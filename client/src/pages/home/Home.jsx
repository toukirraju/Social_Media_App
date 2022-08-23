import React from "react";
import ProfileSide from "../../components/profileSide/ProfileSide";
import "./Home.css";
import PostSide from "../../components/postSide/PostSide";
import RightSide from "../../components/rightSide/RightSide";

const Home = () => {
  return (
    <div className="Home">
      <div className="profileSide">
        <ProfileSide />
      </div>
      <div className="postSide">
        <PostSide />
      </div>
      <div className="rightSide">
        <RightSide />
      </div>
    </div>
  );
};

export default Home;
