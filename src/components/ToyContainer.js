import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDonate, onLike}) {

  const toysToDisplay = toys.map(toy => <ToyCard key={toy.name} toy={toy} onDonate={onDonate} onLike={onLike}/>)

  return (
    <div id="toy-collection">{toysToDisplay}</div>
  );
}

export default ToyContainer;
