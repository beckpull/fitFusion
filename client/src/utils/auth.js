import decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthService {
  // get user data
  async getProfile() {
    return decode(await this.getToken());
  }

  // check if user's logged in
  async loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = await this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  // check if token is expired
  async isTokenExpired(token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      await AsyncStorage.removeItem('id_token');
      return true;
    }
    return false;
  }

  async getToken() {
    // Retrieves the user token from localStorage
    return await AsyncStorage.getItem('id_token');
  }

  async login(idToken) {
    // console.log(idToken);
    // Saves user token to AsyncStorage
    await AsyncStorage.setItem('id_token', idToken);
    // window.location.assign('/');
  }

  async logout() {
    // Clear user token and profile data from localStorage
    await AsyncStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.reload();
  }
}

export default new AuthService();

