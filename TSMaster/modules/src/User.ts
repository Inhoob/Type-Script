import type { Person } from "./types.js"; //import {type Person} 으로 사용해도 됨
export default class User implements Person {
  constructor(public username: string, public email: string) {}
  logout() {
    console.log(`${this.username} logs out!!`);
  }
}

export function userHelper() {
  console.log("USER HELPER!");
}
