import { Button } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Logo
          src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png"
          alt="logo"
        />
        <Button onClick={signIn} variant="outlined">
          Sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 50px;
`;
