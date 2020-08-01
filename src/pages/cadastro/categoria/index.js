import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm'

const CadastroCategoria = () => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#ffffff',
  };

  const { handleChange, clearForm, values } = useForm(valoresIniciais)

  const [categorias, setCategorias] = useState([]);

  const CategoriaCor = styled.code`
        color: ${values.cor};
        margin: 0;
        margin-left: 1rem;
        display: inline;
        overflow-wrap: break-word;
        word-wrap: break-word;
        hyphens: auto;
        transition: color .3s ease;
    `;

  useEffect(() => {
    const url = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias' : 'https://hyperflix.herokuapp.com/categorias';
    fetch(url).then(async (res) => {
      const resposta = await res.json();
      setCategorias([
        ...resposta,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        <CategoriaCor>{values.nome}</CategoriaCor>
      </h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        setCategorias([...categorias, values]);

        clearForm(valoresIniciais);
      }}
      >
        <FormField tag="input" label="Nome da Categoria" type="text" name="nome" value={values.nome} onChange={handleChange}/>
        <FormField tag="textarea" label="Descrição" type="text" name="descricao" value={values.descricao} onChange={handleChange}/>
        <FormField tag="input" label="Cor" type="color" name="cor" value={values.cor} onChange={handleChange} />
        <Button>
          Cadastrar
        </Button>
      </form>
      {categorias.length === 0 && (
      <div>
        Carregando...
      </div>
      )}
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>
      <Link to="/">
        Voltar para a Home
      </Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
