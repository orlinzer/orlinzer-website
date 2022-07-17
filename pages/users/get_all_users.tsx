import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Layout from '../../components/Layout/Layout';
import UsersList from '../../components/UsersList/UsersList';


// API endpoint where we send form data.
const endpoint = '/api/users/get_all_users';

// Form the request for sending data to the server.
const options = {
  // The method is POST because we are sending data.
  method: 'GET',
  // Tell the server we're sending JSON.
  headers: {
    'Content-Type': 'application/json',
  },
};

const GetAllUsersPage: NextPage = () => {

  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const loadUsers = () => {
    fetch(endpoint, options).
      then(async (response) => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson ? await response.json() : null;

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = data?.error?.message || response.status;
          return Promise.reject(error);
        }

        if (data.result) {
          setUsers(data.result);
        }
      }).
      catch(reason => {
        setError(reason);
      });
  }

  useEffect(() => loadUsers());

  return (
    <Layout
      subtitle='Get All Users'
    >
      <p style={{ color: 'red' }}>{error}</p>
      {/* {users && JSON.stringify(users)} */}
      <UsersList users={users} />
    </Layout>
  )
}

export default GetAllUsersPage;
