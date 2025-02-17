export function delay(seconds) { //used to be miliseconds
  return new Promise((resolve) => {
    setTimeout(resolve, seconds);
  });
}
