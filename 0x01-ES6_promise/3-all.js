import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()])
    .then(([res1, res2]) => {
      console.log(`${res2.body} ${res1.firstName} ${res1.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
