import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react'
import Layout from '../components/Layout/Layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <Layout
    >
      <a href='/users/create_user'>Create User</a><br />
      <a href='/users/delete_user'>Delete User</a><br />
      <a href='/users/find_users'>Find Users</a><br />
      <a href='/users/get_all_users'>Get All Users</a><br />
      <a href='/users/get_user_by_id'>Get User By ID</a><br />
      <a href='/users/update_user'>Update User</a><br />
    </Layout>
  );
};

export default Home;
