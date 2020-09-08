import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from "@unform/web";
import logoImg from '../../assets/logo.svg';
import {Container, Content, Background} from './styles';

import Button from "../../components/Button";
import Input from "../../components/Input";

const SignUp: React.FC = () => {

  function handleSubmit(data: object): void{
    console.log(data);
  }

  return(
  <Container>
    <Background/>
    <Content>
      <img src={logoImg} alt='Gobaber'/>

      <Form onSubmit={handleSubmit}>
        <h1>Faça seu Cadastro</h1>
        <Input name='name' icon={FiUser} placeholder='nome'/>
        <Input name='email' icon={FiMail} placeholder="email"/>
        <Input name='password' icon={FiLock} type="password" placeholder="senha" />
        <Button type="submit">Cadastrar</Button>
      </Form>

      <a href='login'>
          <FiArrowLeft/>
           Voltar para Logon
        </a>
    </Content>
    
  </Container>
  );
}
export default SignUp;