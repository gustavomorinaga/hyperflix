import React, { useEffect, useState } from 'react';
import PageDefault, { handleScroll } from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

const CadastroVideo = () => {
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoryTitles = categorias.map(({ nome }) => nome);
    const { handleChange, values } = useForm({
        nome: '',
        url: '',
        categoria: ''
    });

    useEffect(() => {
        categoriasRepository.getAll().then((categoriasFromServer) => {
            setCategorias(categoriasFromServer);
        })

        document.body.style.paddingTop = "var(--bodyPaddingTop)";

        document.addEventListener('scroll', handleScroll)
    }, []);

    return (
        <PageDefault>
            <h1>Cadastro de Vídeos</h1>
            <form onSubmit={(e) => {
                e.preventDefault();

                const categoriaEscolhida = categorias.find((categoria) => {
                    return categoria.nome === values.categoria;
                });

                videosRepository.create({
                    nome: values.nome,
                    url: values.url,
                    categoriaId: categoriaEscolhida.id,
                }).then(() => {
                    history.push('/');
                });
            }}>
                <FormField tag="input" label="Título do Vídeo" type="text" name="nome" value={values.nome} onChange={handleChange}/>
                <FormField tag="input" label="URL do Vídeo" type="text" name="url" value={values.url} onChange={handleChange}/>
                <FormField tag="input" label="Categoria" type="text" name="categoria" value={values.categoria} onChange={handleChange}
                    suggestions={categoryTitles}
                />
                <Button>
                    Cadastrar
                </Button>
            </form>
        </PageDefault>
    )
}

export default CadastroVideo;