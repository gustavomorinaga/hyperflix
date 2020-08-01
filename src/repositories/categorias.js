import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

const getAllWithVideos = () => {
    return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (res) => {
      if (res.ok) {
        const resposta = await res.json();
    
        return resposta;
      }

      throw new Error('Não foi possível carregar os dados.')
    });
}

export default {
    getAllWithVideos,
};