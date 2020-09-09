import React, {useCallback , useRef} from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from "@unform/web";
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import logoImg from '../../assets/logo.svg';
import {Container, Content, Background} from './styles';
import Button from "../../components/Button";
import Input from "../../components/Input";


const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try{
      formRef.current?.setErrors({});
      
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string().required('E-mail é obrigatório ').email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No minimo  6 digitos')
      });

      await schema.validate(data, {
        abortEarly: false,
      });
   
    } catch(err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, [])

  return(
  <Container>
    <Background/>
    <Content>
      <img src={logoImg} alt='Gobaber'/>

      <Form ref={formRef} onSubmit={handleSubmit}>
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