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

export const fetchData = async (url, options, keyNumber = 1) => {
  let key;
  // console.log('=================================================================');
  // console.log('~ fetchData', { keyNumber, url, key, cacheLength: Object.keys(cache).length, cache });

  if (cache[url]) {
    // console.log('~ fetchData returned from cache');
    return cache[url];
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
    return fetchData(url, options, keyNumber);
  }

  const data = await response.json();

  if (response.ok && data) {
    cache[url] = data;

    // save cache to localStorage because of 500 req / month
    if (cache['https://exercisedb.p.rapidapi.com/exercises']) {
      localStorage.setItem('exercises', JSON.stringify(cache['https://exercisedb.p.rapidapi.com/exercises']));
    }
  }

  // console.log('~ fetchData return', {
  //   data,
  //   ok: response.ok,
  //   status: response.status,
  //   keyNumber,
  //   url,
  // });

  // console.log('~ fetchData returned from API');
  return { data, ok: response.ok, status: response.status };
};
