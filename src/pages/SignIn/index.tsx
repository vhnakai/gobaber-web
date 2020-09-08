import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';
import {Container, Content, Background} from './styles';

import Button from "../../components/Button";
import Input from "../../components/Input";

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt='Gobaber'/>

      <form>
        <h1>Faça seu Logon</h1>
        <Input name='email' icon={FiMail} placeholder="email"/>
        <Input name='password' icon={FiLock} type="password" placeholder="senha" />
        <Button type="submit">Entrar</Button>
        <a href='forgot'>Esqueci minha senha</a>
      </form>

      <a href='login'>
          <FiLogIn/>
           Criar conta
        </a>
    </Content>
    <Background/>
  </Container>
  );
export default SignIn;