import React, { Component } from 'react';
import { Redirect } from 'react-router';
import store from '../../store';


class Login extends Component {  

   state = {}    

   componentDidMount() {
      store.subscribe(() => this.forceUpdate());
   }

   emailChange = (event) => {
      store.dispatch({ type: 'EMAIL_CHANGE', value: event.target.value });
   }
   passwordChange = (event) => {
      store.dispatch({ type: 'PASSWORD_CHANGE', value: event.target.value });
   }

   handleClick = (event) => {
      if (store.getState().email === 'admin@admin.com' && store.getState().password === 'admin') {
         store.dispatch({ type: 'AUTH' });
      } else {
         alert('Bad credentials');
      }
   }

   render() {

      if (store.getState().auth) {
         return <Redirect to='/app' />;
      }

      return (
         <div>
            <div className='center-container'>
               <h3>Welcome!</h3>
               <h5>Login to get started!</h5>
            </div>
            <input className='login-input' type='email' name='email' placeholder='Email' required onChange={this.emailChange}></input>
            <input className='login-input' type='password' name='password' placeholder='Password' required onChange={this.passwordChange}></input><br />
            <div className='login-container'>
               <input className='login-submit' type='button' value='Login' onClick={this.handleClick} /></div>
         </div>
      );
   }
}
export default Login;