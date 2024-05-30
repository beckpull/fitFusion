import decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthService {
  // get user data
  getProfile() {
    return decode(this.getToken());
  }

  // check if user's logged in
  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  // check if token is expired
  isTokenExpired(token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      AsyncStorage.removeItem('id_token');
      return true;
    }
    return false;
  }

  getToken() {
    // Retrieves the user token from localStorage
    return AsyncStorage.getItem('id_token');
  }

  login(idToken) {
    console.log(idToken);
    // Saves user token to localStorage
    AsyncStorage.setItem('id_token', idToken);
    // window.location.assign('/');
  }

  logout() {
    // Clear user token and profile data from localStorage
    AsyncStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.reload();
  }
}

export default new AuthService();

// export const removeWorkoutId = (workoutId) => {
//   const savedBookIds = localStorage.getItem('saved_books')
//     ? JSON.parse(localStorage.getItem('saved_books'))
//     : null;

//   if (!savedBookIds) {
//     return false;
//   }

//   const updatedSavedIds = savedBookIds?.filter((savedBookId) => savedBookId !== bookId);
//   localStorage.setItem('saved_books', JSON.stringify(updatedSavedBookIds));

//   return true;
// };
