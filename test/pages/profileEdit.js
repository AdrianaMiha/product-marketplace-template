import { Selector } from 'testcafe';

export default class ProfileView {
  constructor() {
    this.inputs = {
      name: Selector('input[name="profile[name]"]'),
      firstName: Selector('input[name="profile[first_name]"]'),
      lastName: Selector('input[name="profile[last_name]"]'),
      dateOfBirth: Selector('input[name="profile[date_of_birth]"]'),
      favoriteFood: Selector('select[name="profile[favorite_food]"]'),
      bio: Selector('textarea[name="profile[bio]"]')
    }
    this.buttons = {
      save: Selector('button').withText('Save')
    }
  }
}

