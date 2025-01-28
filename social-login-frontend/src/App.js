import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container text-center mt-5">
      <h1>Social Media Login</h1>
      <a className="btn btn-danger m-2" href="http://localhost:3000/auth/google">Login with Google</a>
      <a className="btn btn-primary m-2" href="http://localhost:3000/auth/facebook">Login with Facebook</a>
    </div>
  );
}

export default App;
