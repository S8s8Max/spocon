import React from 'react';
import TextData from '../../data.json';

const onClickLoginButton = () => {
  console.log('You clicked onClickLogingButton.');
};

const LoginButton: React.FC = () => (
  <button type="button" onClick={() => onClickLoginButton()}>
    {TextData.data.header['log-in']}
  </button>
);

export { LoginButton };
