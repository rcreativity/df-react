import React from "react";
import Slider from "react-slick";
import SingleFollower from './singleFollower'

export default function GithubFollowers({followers, userName}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className="github-followers mt-5">
      <h2 className="mb-4"> {userName} Followers List</h2>
      <Slider {...settings}>
        { followers.map((follower, index) => {
          return <SingleFollower key={follower.id} follower={follower} />
        }) }
      </Slider>
    </div>
  );
}
