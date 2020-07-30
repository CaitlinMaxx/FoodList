import React, { useState } from "react";
import Button from "../components/Button";
import API from "../utils/API";
import { FoodList, FoodListItem } from "../components/FoodList";
import { Container, Row, Col } from "../components/Grid";



function SearchMealPage() {

  const [mealType, setmealType] = useState([]);
  const [mealTypeSearch, setmealTypeSearch] = useState("");

  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setmealTypeSearch(value);
  };

  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get foods update the foods state
    event.preventDefault();
    API.getMeal(mealTypeSearch)
      .then(res => setmealType(res.data))
      .catch(err => console.log(err));
  };

  
  

  return (
    <div>
      
      <Container>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <br />
                <Row>
                  <Col size="xs-9 sm-10">
                  <div className="form-group mealinput">
                    <select className="form-control" id="exampleFormControlSelect1" name="mealTypeSearch" value={mealTypeSearch} onChange={handleInputChange}>
                      <option>Main Meal</option>
                      <option>Small Meal</option>
                      <option>Snack</option>
                    </select>
                  </div>
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Button
                      onClick={handleFormSubmit}
                      type="success"
                      className="input-lg"
                    >
                        Search
                    </Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <div class="col-xs-12 resultscol">
            {!mealType.length ? (
              <div></div>
            ) : (
              <FoodList>
                {mealType.map(food => {
                  return (
                    <FoodListItem
                      key={food.name}
                      name={food.name}
                      mealType={food.mealType}
                      foodGroup={food.foodGroup}
                      ingredients={food.ingredients}
                    />
                  );
                })}
              </FoodList>
            )}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default SearchMealPage;
