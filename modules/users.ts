
import fs, { existsSync, lstatSync, readFileSync, writeFileSync } from 'fs';

let users: User[] = [];

try {
  users = JSON.parse(readFileSync('data/users.json', {
    encoding: 'utf-8',
  }));
} catch (e) {
  console.error(e);
}
// Old version
// import usersJSON from '../data/users.json';
// let users: User[] = Array.isArray(usersJSON) ? usersJSON : [];

export const usersRepo = {
  getAllUsers,
  getUserById,
  findUsers,
  createUser,
  updateUser,
  deleteUser
};

// private helper functions
function saveData() {
  fs.writeFileSync('data/users.json', JSON.stringify(users, null, 2));
}

export function getAllUsers() {
  return users;
}

export function getUserById(id: number) {
  return users.find((x: User) => x.id?.toString() === id.toString())
}

export function findUsers(x: string) {
  return users.filter(user => Object.values(user).find(k => k.toString().toLowerCase().includes(x)))
}

export function createUser(user: User) {
  // generate new user id
  user.id = users.length ? Math.max(...users.map((x: User) => (x.id ?? 0))) + 1 : 1;

  // set date created and updated
  user.dateCreated = new Date().toISOString();
  user.dateUpdated = new Date().toISOString();

  // add and save user
  // users.push(JSON.stringify(user));
  users.push(user);
  saveData();

  return user;
};

export function updateUser(id: number, params: UserInputData) {
  const user = users.find(x => x.id?.toString() === id.toString());
  if (!user) { return; }

  // set date updated
  user.dateUpdated = new Date().toISOString();

  // update and save
  Object.assign(user, params);
  saveData();
};

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
export function deleteUser(id: number) {
  // filter out deleted user and save
  users = users.filter(x => x.id?.toString() !== id.toString());
  saveData();
};

export default usersRepo;
