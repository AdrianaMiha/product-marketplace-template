import { Selector } from 'testcafe';

export default class profileEditPage {
  constructor() {
    this.usernameField = Selector('#name')
    this.firstnameField = Selector('#first-name')
    this.lastnameField = Selector('#last-name')
    this.saveButton = Selector('button').withText('Save')
  }
}