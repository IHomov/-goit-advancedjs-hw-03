// js/pixabay-api.js
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '52985657-6fa5448d905561c90358ed2ab';

export async function fetchImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const response = await fetch(`${BASE_URL}?${params}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}
