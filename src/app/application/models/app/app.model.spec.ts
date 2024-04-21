import { App } from './app.model';
import {AppsLibraryService} from "../../services/appsLibrary/apps-library.service";
import {UtilityService} from "../../services/utility/utility.service";

describe('App', () => {
  it('should create an instance', () => {
    expect(new App({
      key: 'poc',
      name: 'Proof of Concept',
      active: 1,
    })).toBeTruthy();
  });
});
