import React from 'react';
import Menu from '../../components/Menu';
import dadosJogos from '../../data/dados_jogos.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
// import Button from './components/Button';

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu/>
      <BannerMain
        videoTitle={dadosJogos.categorias[0].videos[0].titulo}
        url={dadosJogos.categorias[0].videos[0].url}
        videoDescription={"Assassin's Creed Odyssey é um jogo eletrônico de RPG de ação desenvolvido pela Ubisoft Quebec e publicado pela Ubisoft. É o décimo primeiro título principal da série Assassin's Creed e foi lançado em 5 de outubro de 2018, para Microsoft Windows, PlayStation 4, Xbox One e Nintendo Switch."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosJogos.categorias[0]}
      />

      <Carousel
        category={dadosJogos.categorias[1]}
      />

      <Carousel
        category={dadosJogos.categorias[2]}
      />      

      <Carousel
        category={dadosJogos.categorias[3]}
      />      

      <Carousel
        category={dadosJogos.categorias[4]}
      />      

      <Footer/>  
    </div>
  );
}

export default Home;