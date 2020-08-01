import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

const create = (video) => {
    return fetch(`${URL_VIDEOS}?_embed=videos`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(video),
    }).then(async (res) => {
      if (res.ok) {
        const resposta = await res.json();
    
        return resposta;
      }

      throw new Error('Não foi possível cadastrar os dados.')
    });
}

export default {
    create,
};