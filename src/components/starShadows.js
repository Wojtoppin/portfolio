// This file generates random box-shadow values for stars
// and exports them as JS constants for use in React inline styles.

function randomBoxShadow(n, maxW, maxH) {
  let value = `${Math.floor(Math.random()*maxW)}px ${Math.floor(Math.random()*maxH)}px #FFF`;
  for (let i = 1; i < n; i++) {
    value += `, ${Math.floor(Math.random()*maxW)}px ${Math.floor(Math.random()*maxH)}px #FFF`;
  }
  return value;
}

export const shadowsSmall = randomBoxShadow(700, 2000, 2000);
export const shadowsMedium = randomBoxShadow(200, 2000, 2000);
export const shadowsBig = randomBoxShadow(100, 2000, 2000);
