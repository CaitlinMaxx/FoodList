import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "../utils/API";
import { FoodList, FoodListItem } from "../components/FoodList";
import { Container, Row, Col } from "../components/Grid";



function SearchFoodPage() {

  const [foods, setfoods] = useState([]);
  const [foodSearch, setfoodSearch] = useState("");

  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setfoodSearch(value);
  };

  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get foods update the foods state
    event.preventDefault();
    API.getFoods(foodSearch)
      .then(res => setfoods(res.data))
      .catch(err => console.log(err));
  };

  function isCooked() {
        if (foods.cooked === "yes") {
          return(
            <p>Is this food Cooked: Yes</p>
          )
        }
        else{
            return(
            <p>Is this food Cooked: No</p>
            )
        }
      

  }
  

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
                    <Input
                      name="foodSearch"
                      value={foodSearch}
                      onChange={handleInputChange}
                      placeholder="Search For a Food"
                    />
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
            {!foods.length ? (
              <div></div>
            ) : (
              <FoodList>
                {foods.map(food => {
                  return (
                    <FoodListItem
                      key={food.name}
                      name={food.name}
                      mealType={food.mealType}
                      foodGroup={food.foodGroup}
                      cooked={isCooked()}
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

export default SearchFoodPage;
