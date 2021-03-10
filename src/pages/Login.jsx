import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase.config";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory()
  const signIn = e => {
    e.preventDefault();

    // Firebase login in
    auth.signInWithEmailAndPassword(email, password)
      .then(auth => {
        console.log(auth);
        if (auth) {
          history.push('/');
        }
      })
      .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();

    // Firebase register
    auth.createUserWithEmailAndPassword(email, password)
      .then(auth => {
        console.log(auth);
        if (auth) {
          history.push('/')
        }
      })
      .catch(error => alert(error.message));
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          
          <button type="submit" className="login__signInButton"
            onClick={signIn}
          >Sign In</button>
        </form>

        <p>
          By signing-in you agree to the Amazon's Fake Clone Conditions of Use & sale. Please see out Privacy Notice, out Cookies Notice and our Interest-Based Ads Notice 
        </p>

        <button className="login__registerButton" onClick={register}>Create Your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login;