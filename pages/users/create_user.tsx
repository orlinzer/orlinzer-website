
import type { NextApiRequest, NextApiResponse, NextPage } from 'next';
import { FormEvent, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { createUser } from '../../modules/users';

type CreateUserPageProps = {

};

// API endpoint where we send form data.
const endpoint = '/api/users/create_user';

// Form the request for sending data to the server.
const DefaultOptions = {
  // The method is POST because we are sending data.
  method: 'POST',
  // Tell the server we're sending JSON.
  headers: {
    'Content-Type': 'application/json',
  },
};

export const CreateUserPage: NextPage<CreateUserPageProps> = ({ }) => {

  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [data, setData] = useState({});
  const [error, setError] = useState('');

  // Handles the submit event on form submit.
  const handleSubmit = async (event: FormEvent) => {
    // SubmitEvent = { preventDefault: () => void; target: { first: { value: any }; last: { value: any } } }
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      first: first,
      last: last,
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
    <Layout>

      <p style={{ color: 'red' }}>{error}</p>
      {JSON.stringify(data)}

      <form onSubmit={handleSubmit}>

        <label htmlFor='first'>First name:</label>
        <input type="text" id='first' name="first" required value={first} onChange={e => setFirst(e.target.value)} />

        <label htmlFor='last'>Last name:</label>
        <input type="text" id='last' name="last" required value={last} onChange={e => setLast(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
    </Layout>
  )
};

export default CreateUserPage;
