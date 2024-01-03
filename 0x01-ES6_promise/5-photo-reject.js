export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    const isProcessingSuccessful = false;

    if (isProcessingSuccessful) {
      resolve(`Photo ${fileName} processed successfully`);
    } else {
      reject(new Error(`${fileName} cannot be processed`));
    }
  });
}
