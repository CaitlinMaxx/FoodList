import React , { useState } from 'react';



function Add() {
  
  const [food, setfood] = useState([]);
  const [foodName, setFoodName] = useState("");
  const [foodGroup, setFoodGroup] = useState("");
  const [mealType, setMealType] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [ingredientslist, setIngredientslist] = useState([]);
  const [foodGrouplist, setfoodGrouplist] = useState([]);


  const handleFoodNameChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setFoodName(value);
  };
  const handleMealTypeChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setMealType(value);
  };
  const handleIngredientChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setIngredient(value);
  };
  const handleFoodGroupChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setFoodGroup(value);
  };

  return (
    <div className="card-body addCard">
      <form>
        <div className="form-group">
          <label for="exampleFormControlInput1">Food Name</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" name="foodName" value={foodName} onChange={handleFoodNameChange}/>
        </div>
        <div className="form-group">
          <label for="exampleFormControlSelect1">Meal Type</label>
          <select className="form-control" id="exampleFormControlSelect1" name="mealType" value={mealType} onChange={handleMealTypeChange}>
            <option>Main Meal</option>
            <option>Small Meal</option>
            <option>Snack</option>
          </select>
        </div>
        <div className="form-group">
          <label for="exampleFormControlSelect1">Food Group</label>
          <select className="form-control" id="exampleFormControlSelect2" name="foodGroup" value={foodGroup} onChange={handleFoodGroupChange}>
            <option>Grains/Carbs</option>
            <option>Vegetables</option>
            <option>Fruit</option>
            <option>Calcium</option>
            <option>Protein</option>
          </select>
          <div className="input-group-append foodgroup">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
          </div>
          {!foodGrouplist.length ? (
              <div></div>
            ) : (
              <div>
                {foodGrouplist.map(foodGroup => {
                  return (
                    <p>- {foodGroup}</p>
                  );
                })}
              </div>
            )}
        </div>
        <p>Ingredients</p>
        <div className="input-group mb-3">
          <input type="text" className="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" name="ingredient" value={ingredient} onChange={handleIngredientChange}/>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
          </div>
          {!ingredientslist.length ? (
              <div></div>
            ) : (
              <div>
                {ingredientslist.map(ingredient => {
                  return (
                    <p>- {ingredient}</p>
                  );
                })}
              </div>
            )}
        </div>
      </form>
    </div>
  );
}

export default Add;
