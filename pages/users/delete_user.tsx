import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FormEvent, useEffect, useRef, useState } from 'react'
import Layout from '../../components/Layout/Layout';


// API endpoint where we send form data.
const endpoint = '/api/users/delete_user';

// Form the request for sending data to the server.
const DefaultOptions = {
  // The method is POST because we are sending data.
  method: 'DELETE',
  // Tell the server we're sending JSON.
  headers: {
    'Content-Type': 'application/json',
  },
};

const DeleteUserPage: NextPage = () => {

  const [id, setId] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  // Handles the submit event on form submit.
  const handleSubmit = async (event: FormEvent) => {
    // SubmitEvent = { preventDefault: () => void; target: { first: { value: any }; last: { value: any } } }
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      userId: id,
    };

    // Send the data to the server in JSON format.
    const JSONData = JSON.stringify(data);

    let options = {
      ...DefaultOptions,
      // Body of the request is the JSON data we created above.
      body: JSONData
    }

    // Send the form data to our forms API on Vercel and get a response.
    fetch(endpoint, options).
      then(res => res.json()).
      then(data => setData(data)).
      catch(error => setError(error))

  };

  return (
    <Layout
      subtitle='Delete User'
    >
      <p style={{ color: 'red' }}>{error}</p>
      {data && JSON.stringify(data)}

      <form onSubmit={handleSubmit}>
        <input type="number" value={id} onChange={e => setId(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </Layout>
  )
}

export default DeleteUserPage;
