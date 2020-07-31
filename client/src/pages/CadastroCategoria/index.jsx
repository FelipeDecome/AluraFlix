import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

const CadastroCategoria = () => {
  const valorInicial = {
    nome: '',
    descricao: '',
    cor: '#000',
  };
  const [categorias, setCategorias] = useState([]);

  const [formValues, setFormValues] = useState(valorInicial);

  function setValue(key, value) {
    setFormValues({
      ...formValues,
      [key]: value,
    });
  }

  function handleChangeInputs(e) {
    const { name, value } = e.target;

    setValue(name, value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const parsedCategorias = [...categorias, formValues];

    setCategorias(parsedCategorias);
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL).then(async (res) => {
      const parsed = await res.json();
      setCategorias([...parsed]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {formValues.nome}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={formValues.nome}
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

        <Button type="submit">Cadastrar</Button>
      </form>

      {categorias.length === 0 && <div> Loading... </div>}

      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.nome}>{categoria.nome}</li>
        ))}
      </ul>

      <Link to="/">Ir pra Home</Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
