import React from "react";

function ToyCard({toy, onDonate, onLike}) {
  const {name, image, id} = toy
  let likes = toy.likes

  function handleOnDonateClick(){
    onDonate(id);
  }

  function handleAddLikeClick(){
    likes++;
    onLike(id, likes);
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleAddLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleOnDonateClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
