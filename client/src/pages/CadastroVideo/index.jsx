import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import videosRepository from '../../repositories/videos';
import categoriasRepository from '../../repositories/categorias';

import useForm from '../../hooks/useForm';

const CadastroVideo = () => {
  const [categorias, setCategorias] = useState([]);
  const categoriesTitles = categorias.map(({ titulo }) => titulo);

  const { formValues, handleChangeInputs } = useForm({
    titulo: 'Como Converter Callbacks em Promises em Javascript',
    url: 'https://www.youtube.com/watch?v=_gmXKsVS40s',
    categoria: 'Front End',
  });

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    const selectedCategory = categorias.find(
      (categoria) => categoria.titulo === formValues.categoria
    );

    videosRepository
      .create({
        titulo: formValues.titulo,
        url: formValues.url,
        categoriaId: selectedCategory.id,
      })
      .then((res) => {
        history.push(`/?msg=${res.titulo}`);
      });
  }

  useEffect(() => {
    categoriasRepository.getAll().then((res) => {
      setCategorias(res);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video: {formValues.titulo}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Título do Vídeo"
          type="text"
          name="titulo"
          value={formValues.titulo}
          onChange={handleChangeInputs}
        />

        <FormField
          label="URL"
          type="text"
          name="url"
          value={formValues.url}
          onChange={handleChangeInputs}
        />

        <FormField
          label="categoria"
          type="text"
          name="categoria"
          value={formValues.categoria}
          onChange={handleChangeInputs}
          suggestions={categoriesTitles}
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
};

export default CadastroVideo;
