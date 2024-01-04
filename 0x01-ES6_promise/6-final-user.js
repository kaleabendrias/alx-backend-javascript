// 6-final-user.js
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    return Promise.allSettled([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName),
    ])
      .then((ress) => ress.map((res) => (
        {
          status: res.status,
          value: res.status === 'fulfilled' ? res.value : String(res.reason),
        }
      )));
  } catch (error) {
    console.error('Error in handleProfileSignup:', error.message);
    throw error;
  }
}

export default handleProfileSignup;
