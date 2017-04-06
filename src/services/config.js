class Config {
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
      Object.assign(this, {
        ...JSON.parse(sessionStorage.getItem('appConfig')),
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export const config = new Config();
