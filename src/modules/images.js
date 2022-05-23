/*
    This module is for importing all the images under the /src/assets/images directory
    and Storing their filename and url in as Object;
*/
export default (() => {
    const r = require.context('../assets/images', false, /\.(png|jpe?g|svg)$/)
    const images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  })();