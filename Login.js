
import {Link } from "react-router-dom";

function Login() {
    return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <Link to="/Signup">Signup</Link>
        </nav>
      </>
    );
  }

  export default Login;