const getFullResponseFromAPI = (success) => {
  return new Promise((resolve, reject) => {
    if (success === true) {
      resolve({ body: 'success', status: 200 });
    }
    else {
      reject('The fake API is not working currently');
    }
  });
};

export default getFullResponseFromAPI;
