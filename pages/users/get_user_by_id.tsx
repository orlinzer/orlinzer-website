import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Layout from '../../components/Layout/Layout';


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

const GetUserByIdPage: NextPage = () => {

  const [data, setData] = useState([]);
  const [error, setError] = useState<APIError | null>(null);

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
          setData(data.result);
        }
      }).
      catch(reason => {
        setError(reason);
      });
  }

  useEffect(() => loadUsers());

  return (
    <Layout
      subtitle='Get User By ID'
    >
      {error && <p style={{ color: 'red' }}>{`${error?.code} ${error?.message}`}</p>}
      {JSON.stringify(data)}
    </Layout>
  )
}

export default GetUserByIdPage;
