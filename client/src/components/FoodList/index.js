import React from "react";
import { Container, Row, Col } from "../Grid";


export function FoodList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function FoodListItem({
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
          <Col size="xs-4 sm-6">
            <h3>{name}</h3>
            {cooked}
            <p>Meal Type: {mealType}</p>
          </Col>
          <Col size="xs-8 sm-6">
            <p>Food Group:</p>
            {foodGroup.map(group => {
              return(
                <p> - {group}</p>
              )
            })}
            <p>Ingredients:</p>
            {ingredients.map(ingredient => {
              return(
                <p> - {ingredient}</p>
              )
            })}
          </Col>
        </Row>
      </Container>
    </li>
  );
}
