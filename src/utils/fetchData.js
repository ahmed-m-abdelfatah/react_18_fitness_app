import { getLocalStorage } from './getLocalStorage.js';

const cache = {};

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': undefined,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': undefined,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, options, keyNumber = 1, saveCacheToLocalStorage = false) => {
  let key;
  let urlKey = url.split('/').pop();
  // console.log('=================================================================');
  // console.log('~ fetchData', { keyNumber, url, urlKey, key, cacheLength: Object.keys(cache).length, cache });

  if (cache[urlKey]) {
    let data = cache[urlKey];
    return { data, ok: true, status: 200 };
  }

  let dataFromLocalStorage = getLocalStorage(urlKey);
  if (dataFromLocalStorage) {
    return { data: dataFromLocalStorage, ok: true, status: 200 };
  }

  switch (keyNumber) {
    case 1: {
      key = process.env.REACT_APP_RAPID_API_KEY_01;
      options = { ...options, headers: { ...options.headers, 'X-RapidAPI-Key': key } };
      break;
    }
    case 2: {
      key = process.env.REACT_APP_RAPID_API_KEY_02;
      options = { ...options, headers: { ...options.headers, 'X-RapidAPI-Key': key } };
      break;
    }
    default: {
    }
  }

  const response = await fetch(url, options);

  // use another account because of 500 req / month
  if (!response.ok && response.status === 429 && keyNumber === 1) {
    keyNumber = 2;
    return fetchData(url, options, keyNumber, saveCacheToLocalStorage);
  }

  const data = await response.json();

  if (response.ok && data) {
    cache[urlKey] = data;

    if (cache[urlKey] && saveCacheToLocalStorage) {
      localStorage.setItem(urlKey, JSON.stringify(cache[urlKey]));
    }
  }

  return { data, ok: response.ok, status: response.status };
};
