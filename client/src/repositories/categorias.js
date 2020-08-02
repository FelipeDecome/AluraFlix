import config from '../config';

const URL_CATEGORIAS = `${config.URL_BACKEND}/categorias`;

function getAll() {
  return fetch(URL_CATEGORIAS).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      return response;
    }

    throw new Error('Não foi possível pegar os dados!');
  });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIAS}?_embed=videos`).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      return response;
    }

    throw new Error('Não foi possível pegar os dados!');
  });
}

function create(categoryObject) {
  return fetch(URL_CATEGORIAS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(categoryObject),
  }).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      return response;
    }

    throw new Error('Não foi possível criar a nova categoria!');
  });
}

function remove(categoryId) {
  return fetch(`${URL_CATEGORIAS}/${categoryId}`, {
    method: 'DELETE',
  }).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      return response;
    }

    throw new Error('Não foi possível remover a nova categoria!');
  });
}

export default {
  getAll,
  getAllWithVideos,
  create,
  remove,
};
