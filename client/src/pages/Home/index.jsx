import React, { useState, useEffect } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';

import categoriasRepository from '../../repositories/categorias';

const Home = () => {
  const [dados, setDados] = useState([]);

  // const { search } = window.location;
  // const params = new URLSearchParams(search);
  // const message = params.get('msg');

  useEffect(() => {
    categoriasRepository
      .getAllWithVideos()
      .then((res) => {
        setDados(res);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {/* {message && <div>{message}</div>} */}
      {dados.length === 0 && <div>Loading...</div>}

      {dados.map((categoria, index) => {
        if (categoria.videos.length === 0) {
          return null;
        }

        if (index === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={categoria.videos[0].titulo}
                url={categoria.videos[0].url}
                videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
              />

              <Carousel ignoreFirstVideo category={categoria} />
            </div>
          );
        }

        return <Carousel key={categoria.id} category={categoria} />;
      })}
    </PageDefault>
  );
};

export default Home;
