import { NextPage } from "next";

import styles from './UsersList.module.css';

export type UsersListProps = {
  users: User[],
};

export const UsersList: NextPage<UsersListProps> = ({ users }) => {
  return (
    <div className={styles.UsersList}>
      {users.map(user => (
        <div className={styles.UsersListItem}>
          <p>ID: {user.id}</p>
          <p>First: {user.first}</p>
          <p>Last: {user.last}</p>
          <p>Created: {user.dateCreated}</p>
          <p>Updated: {user.dateUpdated}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
