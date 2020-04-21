const sleep = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hi");
      resolve();
    }, 3000);
  });
};

const sleep2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hi2");
      resolve();
    }, 6000);
  });
};

const sleep3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hi3");
      resolve();
    }, 3000);
  });
};


// parallel
// [sleep, sleep2, sleep3].reduce((_, item) => {
//   item().then();
// }, '')


// sequential
[sleep, sleep2, sleep3].reduce((_, item) => {
  return _.then(() => item().then());
}, Promise.resolve());

