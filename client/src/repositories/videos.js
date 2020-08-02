import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(videoObject) {
  return fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoObject),
  }).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      return response;
    }

    throw new Error('Não foi possível cadastrar o video!');
  });
}

function index() {
  return fetch(URL_VIDEOS).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      return response;
    }

    throw new Error('Não foi possível retornar os dados!');
  });
}

function remove(videoId) {
  return fetch(`${URL_VIDEOS}/${videoId}`, {
    method: 'DELETE',
  }).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      return response;
    }

    throw new Error('Não foi possível remover o video!');
  });
}

export default {
  create,
  index,
  remove,
};
