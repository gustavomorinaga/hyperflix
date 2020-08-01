import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

const CadastroVideo = () => {
    const history = useHistory();
    const { handleChange, values } = useForm({
        nome: 'Vazou TUDO do NOVO evento do PS5',
        url: 'https://www.youtube.com/watch?v=Jwgm9hOo8zI',
        categoria: '1'
    });
    return (
        <PageDefault>
            <h1>Cadastro de Vídeos</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                videosRepository.create({
                    nome: values.nome,
                    url: values.url,
                    categoriaId: 1,
                }).then(() => {
                    history.push('/');
                });
            }}>
                <FormField tag="input" label="Título do Vídeo" type="text" name="nome" value={values.nome} onChange={handleChange}/>
                <FormField tag="input" label="URL do Vídeo" type="text" name="url" value={values.url} onChange={handleChange}/>
                <FormField tag="input" label="URL do Vídeo" type="text" name="categoria" value={values.categoria} onChange={handleChange}/>
                <Button>
                    Cadastrar
                </Button>
            </form>
            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo