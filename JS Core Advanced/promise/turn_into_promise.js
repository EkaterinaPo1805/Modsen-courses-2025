function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    fetchData((error, data) => {
      error ? reject(error) : resolve(data);
    });
  });
}

fetchDataPromise()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));