import axios from 'axios';

export const getShops = async () => {
  const res = await axios.get('https://api.stage.koreatech.in/v2/shops');
  return res.data;
};
