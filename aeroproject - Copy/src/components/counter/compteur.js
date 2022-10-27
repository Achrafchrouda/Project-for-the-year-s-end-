
/*export const counting = () => {
  const year = new Date().getFullYear();
  const difference = +new Date(`${year}-5-7`) - +new Date();
  let obj = {};

  if (difference > 0) {
    obj = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }
  return obj;
}

export default counting */