class AppState {
  constructor() {
    this.userInfo = {};
    this.state = {
      loggedIn: false,
    };
  }

  getUserInfo() {
    return this.userInfo;
  }

  isLoggedIn() {
    return this.state.loggedIn;
  }

  onLogIn(info) {
    this.userInfo.username = info.username;
    this.state.loggedIn = true;
  }

  onLogOut() {
    this.userInfo = {};
    this.state.loggedIn = false;
  }
}

/* eslint-disable */
export let appState = new AppState();
