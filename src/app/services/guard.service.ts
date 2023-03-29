export class GuardService {
  loggedIn = false;

  isAuthenticated() {
    return new Promise(
      (resolve, reject) => {
        resolve(this.loggedIn);
      }
    );
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
