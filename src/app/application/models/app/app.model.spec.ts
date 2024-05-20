import { App } from './app.model';

describe('App', () => {

  it('should create an instance', () => {
    expect(new App({
      key: 'poc',
      name: 'Proof of Concept',
      active: 1,
    })).toBeTruthy();
  });

});
  
