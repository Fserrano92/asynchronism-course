const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve(" Una respuesta bien chingona");
        }, 3000)
      : reject(new Error(" Test Error"));
  });
};

const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
};

console.log("Antes");
doSomething();
console.log("Despues");

const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch (error) {
    console.error(error);
  }
};

console.log("Antes 2");
anotherFunction();
console.log("Despues 2");
