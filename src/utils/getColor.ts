import color from '../styles/color';

export const getColor = (residualRatio: string | undefined) => {
  if (!residualRatio) return color.PRIMARY;

  const residualRatioValue = parseFloat(residualRatio);

  if (residualRatioValue > 20) {
    return color.PRIMARY;
  } else {
    return color.RED;
  }
};
