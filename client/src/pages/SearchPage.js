import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "../utils/API";
import { foodList, foodListItem } from "../components/FoodList";
import { Container, Row, Col } from "../components/Grid";

function SearchPage() {

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

  return (
    <div>
      <Container>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <Input
                      name="foodSearch"
                      value={foodSearch}
                      onChange={handleInputChange}
                      placeholder="Search For a food"
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
          <Col size="xs-12">
            {!foods.length ? (
              <div></div>
            ) : (
              <foodList>
                {foods.map(food => {
                  return (
                    <foodListItem
                      key={food.name}
                      name={food.name}
                      mealType={food.mealType}
                      foodGroup={food.foodGroup}
                      cooked={food.cooked}
                      ingredients={food.ingredients}
                    />
                  );
                })}
              </foodList>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SearchPage;
