const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

export default function createArrayExpression({ length }) {
  const firstArray = Array.from({ length }, (_, i) => i + 1);
  const secondArray = [...firstArray];
  const result = [...firstArray, ...secondArray];

  return shuffleArray(shuffleArray(shuffleArray(result)));
}
