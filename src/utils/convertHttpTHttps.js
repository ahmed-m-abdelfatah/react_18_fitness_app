export const convertHttpTHttps = str => {
  // console.log(str.includes('http://'))
  // console.log(str.match('^http://').length > 0)
  // console.log('https://'+str.split('http://')[1]);
  // console.log(str.replace(/^http:\/\//i,'https://'));
  // console.log('https://'+str.slice(7));

  if (str.includes('http://')) {
    return str.replace('http://', 'https://');
  }

  return str;
};
