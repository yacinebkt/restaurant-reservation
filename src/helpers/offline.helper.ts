export const fetcherHandler = async () => {
  const response = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('123456789'); // Simulated response data
    }, 1500);
  });
  return response;
};
