import React, { useState } from 'react';
import * as S from './styled';

const Cadastro = (props) => {
    const [email, setEmail] = useState('');
    const [check, setCheck] = useState(false);

    function sendEmail() {
        if (email === '') {
            setCheck(false);
        } else {
            setCheck(true);
            localStorage.setItem('emailNewsletter', email);

            setInterval(() => {
                setCheck(false);
            }, 2000);
        }
    }

    return (
        <S.Cadastro>
          <S.Callout>Aproveite 35% de desconto!</S.Callout>
          <S.Headline>E receba brindes!</S.Headline>
        <S.Email
          type='email'
          required='required'
          placeholder='E-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id='email'
          name='email'
          inputmode='email'
          autocomplete='username'
        ></S.Email>
        <S.Button onClick={sendEmail}>
          {check ? (
            <S.CheckIcon className='bi bi-check-lg'></S.CheckIcon>
          ) : (
            <span>Quero receber promoções!</span>
          )}
        </S.Button>
    </S.Cadastro>
  );
};

export default Cadastro;
