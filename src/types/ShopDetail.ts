export type ShopDetail = {
  id: number;
  name: string;
  phone: string;
  address: string;
  delivery_fee: string;
  is_open: boolean;
  benefit_details: string[];
  open: {
    day: string;
    time_open: string;
    time_close: string;
  }[];
};