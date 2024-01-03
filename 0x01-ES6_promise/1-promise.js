const getFullResponseFromAPI = (success) => new Promise((resolve, reject) => {
  if (success) {
    resolve({ body: 'success', status: 200 });
  } else {
    reject(new Error('The fake API is not working currently'));
  }
});

export default getFullResponseFromAPI;
