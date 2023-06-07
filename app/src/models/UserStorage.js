"use strict";

class UserStorage {
  static #users = {
    id: ["ysh", "rrs", "roof"],
    pw: ["123", "1234", "12345"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
