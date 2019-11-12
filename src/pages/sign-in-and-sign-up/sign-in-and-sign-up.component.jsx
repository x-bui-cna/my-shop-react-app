import React from 'react'
import './sign-in-and-sign-up.styles.scss'
import SignIn from './../../comnponents/sign-in/sign-in.component';
import SignUp from './../../comnponents/sign-up/sign-up.component';

const SignInAndSignUp = () => (
  <div className='sign-in-and-sign-up'>
      <SignIn/>
      <SignUp/>
  </div>
)

export default SignInAndSignUp;