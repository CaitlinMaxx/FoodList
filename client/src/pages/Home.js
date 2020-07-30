import React from 'react';
import { Link } from "react-router-dom";



function Home() {

  return (
    <div>
        <section className="card ">
            <div className="card-body" >
                <Link className="btn searchbtn btn-secondary active"  role="button" aria-pressed="true" to="Search">
                    Search For Food
                </Link>
                <Link className="btn addbtn btn-secondary active"  role="button" aria-pressed="true" to="Add">
                    Add A Food
                </Link>
            </div>
        </section>
    </div>
  );
}

export default Home;
