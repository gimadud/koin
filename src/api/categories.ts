import axios from 'axios';

export const getCategories = async () => {
  const response = await axios.get('https://api.stage.koreatech.in/shops/categories');
  return response.data; 
};
