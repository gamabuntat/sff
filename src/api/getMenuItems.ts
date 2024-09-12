export const getMenuItems = () => {
  console.count('call: getMenuItems');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: String(Number(new Date())).slice(-4),
          name: 'Бургер с говной',
          price: '123',
        },
      ]);
    }, 4);
  });
};
