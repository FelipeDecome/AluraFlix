import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import Form from '../../components/Form';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import categoriaRepository from '../../repositories/categorias';

import useForm from '../../hooks/useForm';

const CadastroCategoria = () => {
  const valorInicial = {
    titulo: '',
    descricao: '',
    cor: '#6340ff',
  };
  const { handleChangeInputs, formValues, clearForm } = useForm(valorInicial);

  const [categorias, setCategorias] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    categoriaRepository.create(formValues);

    setCategorias([...categorias, formValues]);
    clearForm(valorInicial);
  }

  useEffect(() => {
    categoriaRepository.getAll().then((res) => {
      setCategorias(res);
    });
  }, []);

  return (
    <PageDefault>
      <Form onSubmit={handleSubmit}>
        <Form.Title>Cadastro de Categoria: {formValues.titulo}</Form.Title>
        <FormField
          label="Titulo da Categoria"
          type="text"
          name="titulo"
          value={formValues.titulo}
          onChange={handleChangeInputs}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={formValues.descricao}
          onChange={handleChangeInputs}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={formValues.cor}
          onChange={handleChangeInputs}
        />

        <Button.Wrapper>
          <Button type="submit">Cadastrar</Button>

          <Button as={Link} to="/">
            Ir pra Home
          </Button>
        </Button.Wrapper>
      </Form>

      {categorias.length === 0 && <div> Loading... </div>}

      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.id}>{categoria.titulo}</li>
        ))}
      </ul>
    </PageDefault>
  );
};

export default CadastroCategoria;
