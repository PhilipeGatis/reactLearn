export class Config {
  constructor() {
    this.sort = '+date';
    this.emailAddress = undefined;
    this.restDelay = '100';
    this.load();
  }

  save() {
    sessionStorage.setItem('appConfig', JSON.stringify({
      ...this,
    }));
  }

  load() {
    try {
      Config(...JSON.parse(sessionStorage.getItem('appConfig')));
    } catch (error) {
      console.log(error);
    }
  }
}
