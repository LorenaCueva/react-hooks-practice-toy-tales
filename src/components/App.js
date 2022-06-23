import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(r => r.json())
    .then(toys => setToyList(toys))
    .catch(error => console.log(error));
  },[])

  function handleToyDonate(id){
    fetch(`http://localhost:3001/toys/${id}`,{
      method: "DELETE"
    })
    .then(r => r.json())
    .then(()=> {
      const newToyList = toyList.filter(toy => toy.id !== id);
      setToyList(newToyList);
    })
  }

  function handleAddToy(toy){
    fetch("http://localhost:3001/toys",{
      method: "POST",
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(toy)})
      .then(r => r.json())
      .then(newToy => setToyList([...toyList, newToy]))
  }

  function handleAddLikes(id, likes){
    fetch(`http://localhost:3001/toys/${id}`,{
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({likes: likes})
    })
    .then(r => r.json())
    .then(updatedToy => {
      const updatedToyList = toyList.map(toy => toy.id === id ? updatedToy : toy);
      setToyList(updatedToyList);
    })
    .catch(error => console.log(error));
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toyList} onDonate={handleToyDonate} onLike={handleAddLikes}/>
    </>
  );
}

export default App;
