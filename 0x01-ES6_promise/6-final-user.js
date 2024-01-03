// 6-final-user.js
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const [userPromise, photoPromise] = await Promise.allSettled([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName),
    ]);

    // Create an array with the structure [status, value or error]
    const results = [
      {
        status: userPromise.status,
        value: userPromise.status === 'fulfilled' ? userPromise.value : userPromise.reason.message,
      },
      {
        status: photoPromise.status,
        value: photoPromise.status === 'fulfilled' ? photoPromise.value : photoPromise.reason.message,
      },
    ];

    return results;
  } catch (error) {
    console.error('Error in handleProfileSignup:', error.message);
    throw error;
  }
}

export default handleProfileSignup;
