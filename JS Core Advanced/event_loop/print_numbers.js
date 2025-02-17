function printNumber(number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(number);
        resolve();
      }, 1000);
    });
  }
  
  async function print() {
    for (let i = 1; i <= 10; i++) {
      await printNumber(i);
    }
  }
  
  print();
  