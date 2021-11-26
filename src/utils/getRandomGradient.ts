// Create random light stacked gradient

const getRandomGradient = (): string => {
  const randomAngle = (): number => Math.round(Math.random() * 360);
  const randomColor = (): string => `hsl(${Math.random() * 360}, 100%, 75%)`;

  return `linear-gradient(${randomAngle()}deg, ${randomColor()}, ${randomColor()}),
  linear-gradient(${randomAngle()}deg, ${randomColor()}, ${randomColor()})`;
};

export { getRandomGradient };
