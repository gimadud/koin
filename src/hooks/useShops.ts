import { useQuery } from '@tanstack/react-query';
import { getShops } from '../api/shops';
import axios from 'axios';

useQuery({
  queryKey: ['shops'],
  queryFn: async () => {
    const res = await axios.get('https://api.stage.koreatech.in/v2/shops?sorter=NONE');
    return res.data.shops;
  },
});
