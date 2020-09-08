import React from 'react';
import { FiLogIn } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';
import {Container, Content, Background} from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt='Gobaber'/>
      <form>
        <h1>Faça seu Logon</h1>
        <input placeholder="email"/>
        <input type="password" placeholder="senha" />
        <button type="submit">Entrar</button>

        <a href='forgot'>Esqueci minha senha</a>
        <a href='login'>
          <FiLogIn/>
          Criar conta
        </a>
      </form>
    </Content>
    <Background/>

  </Container>
  );
export default SignIn;