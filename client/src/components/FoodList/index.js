import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function foodList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function foodListItem({
  name,
  mealType,
  ingredients,
  foodGroup,
  cooked
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <h3>{name}</h3>
            <p>Is It Cooked: {cooked}</p>
          </Col>
          <Col size="xs-8 sm-9">
            <p>Meal Type: {mealType}</p>
            <p>Food Group: {foodGroup}</p>
            <p>Ingredients: {ingredients}</p>
           
          </Col>
        </Row>
      </Container>
    </li>
  );
}
