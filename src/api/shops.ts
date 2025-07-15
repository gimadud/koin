import axios from "axios";

export const getShops = async (query: string) => {
  const res = await axios.get(`https://api.stage.koreatech.in/v2/shops?sorter=NONE&query=${query}`);
  return res.data;
};
