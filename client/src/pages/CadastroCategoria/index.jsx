import React, { useState } from "react";
import PageDefault from "../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../components/FormField";

const CadastroCategoria = () => {
  const valorInicial = {
    nome: "",
    descricao: "",
    cor: "#000",
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

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {formValues.nome}</h1>

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
          type="text"
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

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return <li key={index}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to="/">Ir pra Home</Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
