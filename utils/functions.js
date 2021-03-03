export const pickRandomCard = (list) => {
  const randNumber = Math.floor(Math.random() * list.length - 1);
  return list[randNumber];
};
