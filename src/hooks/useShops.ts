export const useShops = (query: string) => {
  return useQuery({
    queryKey: ['shops', query],
    queryFn: () => getShops(query),
  });
};