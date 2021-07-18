import React from 'react';
import * as S from './styled';

const Purple = () => {
  return (
    <S.Purple>
      <S.Login href="#">Seja bem-vindx! <br/>Entre ou Cadastre-se</S.Login>  
        <S.Link href='#Produtos'>
          <i className='bi bi-bag'></i>
        </S.Link>
        <S.Link href='#Rodape'>
          <i className='bi bi-question-circle'></i>
        </S.Link>
    </S.Purple>
  );
};

export default Purple;