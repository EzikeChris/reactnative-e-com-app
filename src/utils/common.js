export const customDelay = (time = 1000) =>
  new Promise(resolve => setTimeout(resolve, time));


// just, tried to add some delay for auth screen