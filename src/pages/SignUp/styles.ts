import style from 'styled-components';
import signUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = style.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = style.div`

  place-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #F4EDE8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
    }
  }
  > a {
    color: #FF9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-left: 16px;
    }
  }
`;
export const Background = style.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
