import { config } from './config';
/**
 * This service emulates an Authentication Service.
 */
class AuthService {
  constructor() {
    this.usernames = ['admin', 'administrator'];
  }

  isAuthenticated() {
    return !!config.emailAddress;
  }

  login(username, password) {
    // checks if the username is one of the known usernames, and the password is 'password'
    const checkCredentials = () => new Promise((resolve, reject) => {
      const validUsername = this.usernames.indexOf(username) !== -1;
      const validPassword = password === 'password';

      setTimeout(() => {
        if (validUsername && validPassword) {
          resolve(username);
        } else {
          reject('Invalid username or password');
        }
      }, 800);
    });

    return checkCredentials()
      .then((authenticatedUser) => {
        config.emailAddress = authenticatedUser;
        config.save();
      });
  }

  logout() {
    config.emailAddress = undefined;
    config.save();
  }
}

export const authService = new AuthService();

