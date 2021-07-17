import React from 'react';
import * as S from './styled';
import batedeira from '../../images/batedeira.jpg';
import faqueiro from '../../images/faqueiro.jpg';
import panelas from '../../images/panelas.jpg';
import torradeira from '../../images/torradeira.jpg';
import conjcolheres from '../../images/conjcolheres.jpg';

const Produtos = () => {
  return (
    <S.Container>
      <S.Headline>Todos os produtos roxos com mais de 30% off!</S.Headline>
      <S.Products>
        <S.Product src={batedeira} alt='Batedeira'></S.Product>
        <S.Product src={faqueiro} alt='Faqueiro'></S.Product>
        <S.Product src={panelas} alt='Panelas'></S.Product>
        <S.Product src={torradeira} alt='Torradeira'></S.Product>
        <S.Product src={conjcolheres} alt='Conjunto de Colheres'></S.Product>
      </S.Products>
    </S.Container>
  );
};

export default Produtos;