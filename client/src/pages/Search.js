import React from 'react';
import { Link } from "react-router-dom";


function Search() {

  return (
    <div>
        <section className="card ">
            <div className="card-body" >
                <Link className="btn searchbybtn btn-secondary active"  role="button" aria-pressed="true" to="SearchFoodPage">
                    Search by Food
                </Link>
                <Link className="btn searchbybtn btn-secondary active"  role="button" aria-pressed="true" to="SearchMealPage">
                    Search by Meal Type
                </Link>
            </div>
        </section>
    </div>
  );
}

export default Search;
