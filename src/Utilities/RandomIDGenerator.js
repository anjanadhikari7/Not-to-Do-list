export const randomIDGenerator = () => {
  const idstring =
    "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890";

  let id = "";

  for (let i = 0; i <= 6; i++) {
    const randomPosition = Math.floor(Math.random() * idstring.length);
    id += idstring[randomPosition];
  }

  return id;
};
