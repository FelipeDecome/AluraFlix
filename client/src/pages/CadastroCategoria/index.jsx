import React from "react";
import PageDefault from "../../components/PageDefault";
import { Link } from "react-router-dom";

const CadastroCategoria = () => {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form>
        <label htmlFor="">
          Nome da Categoria:
          <input type="text" />
        </label>

        <button>cadastrar</button>
      </form>
      <Link to="/">Ir pra Home</Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
