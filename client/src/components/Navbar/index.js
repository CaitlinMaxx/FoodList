import React from "react";
import { Link } from "react-router-dom";
import { GoogleLogout } from 'react-google-login';
import { useGoogleLogin } from 'react-google-login';



const logoutGoogle = (response) => {
  console.log(response);
  console.log("logged out")
}


// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar() {


  return (
    <nav className="navbar navbar-light">
      <Link className="navbar-brand title" to="/">
        Food List
      </Link>
      <div>
      <GoogleLogout 
        className="Logoutbtn"
        clientId="1051194441048-4vdhlle1jsqg6jcfes3jgof8uo1sa2rn.apps.googleusercontent.com"
        render={renderProps => (
          <button className="button btn Loginbtn" onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</button>
        )}
        buttonText="Logout"
        onlogoutSuccess={logoutGoogle}
      />
      {document.getElementById('googleButton')}
      </div>
    </nav>
  );
}

export default Navbar;