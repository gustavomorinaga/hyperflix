import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageDefault, { handleScroll } from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import Loading from '../../../components/Loading';

const Trash = styled.svg`
  margin-left: auto;
  display: flex;
  width: 1.5rem;
  fill: gray;
  transition: all .3s;

  &:hover {
    fill: white;
  }
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 48% 50%;
  column-gap: 2%;

  @media (max-width: 800px) {
    display: block;
    
    & ul {
      margin-top: 16px;
      padding: 0px;
    }

    & ul li p {
      max-width: 250px;
    }
  }
`

const CategoryList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column wrap;
  overflow-x: hidden;
  overflow-y: auto;

  & li {
    display: flex;
    margin-bottom: 10px;
  }

  & li span {
    padding: 18.5px;
    border-radius: 4px;
    text-align: center;
    margin: auto 0;
  }

  & li p {
    margin-left: 0.5rem;
  }
`

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
    document.addEventListener('scroll', handleScroll)
  }, []);

  document.body.style.paddingTop = "var(--bodyPaddingTop)";

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        <CategoriaCor>{values.nome}</CategoriaCor>
      </h1>
      <FormGrid>
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
        <Loading/>
        )}
        <CategoryList>
          {categorias.map((categoria) => (
            <li key={`${categoria.nome}`}>
              <span style={{ backgroundColor: categoria.cor }}>
                {categoria.nome}
              </span>
              <p>
                {categoria.descricao}
              </p>
              <Trash className="svg-icon" viewBox="0 0 20 20">
							  <path d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
						  </Trash>
            </li>
          ))}
        </CategoryList>
      </FormGrid>
    </PageDefault>
  );
};

export default CadastroCategoria;
