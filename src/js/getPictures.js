const axios = require('axios').default;
export async function getPictures(searchInput, page, perPage) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=14908424-284179d16e2c0f18d066c248f=${searchInput}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
