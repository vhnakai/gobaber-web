import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock, FiUser, FiCamera, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';
import { Container, Content, AvatarInput } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';

interface ProfileFormData {
  nome: string;
  email: string;
  password: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const { user } = useAuth();
  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
          email: Yup.string()
            .required('E-mail é obrigatório ')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No minimo  6 digitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        history.push('/');
        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você ja pode fazer seu logon no GoBaber',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na validação',
          description:
            'Ocorreu um erro ao fazer o cadastro, cheque as credenciais.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <header>
        <div>
          <Link to="/dashboard">
            <FiArrowLeft />
          </Link>
        </div>
      </header>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <AvatarInput>
            <img src={user.avatar_url} alt={user.name} />
            <button type="button">
              <FiCamera />
            </button>
          </AvatarInput>

          <h1>Meu Perfil</h1>
          <Input name="name" icon={FiUser} placeholder="nome" />
          <Input name="email" icon={FiMail} placeholder="email" />
          <Input
            containerStyle={{ marginTop: 22 }}
            name="old_password"
            icon={FiLock}
            type="password"
            placeholder="senha atual"
          />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Nova senha"
          />

          <Input
            name="password_confirmation"
            icon={FiLock}
            type="password"
            placeholder="Confirmar senha"
          />
          <Button type="submit">Comfirmar mudanças</Button>
        </Form>
      </Content>
    </Container>
  );
};
export default Profile;
