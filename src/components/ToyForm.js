import React, {useState} from "react";

function ToyForm({onAddToy}) {

  const [formData, setFormData] = useState({name: "", image: "", likes: 0});

  function handleFormChange(e){
    const name = e.target.name;
    const value = e.target.value;

    setFormData({...formData, [name]:value})
  }
  
  function handleFormSubmit(e){
    e.preventDefault();
    onAddToy(formData);
    setFormData({name: "", image: "", likes: 0})

  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleFormSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={handleFormChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleFormChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
