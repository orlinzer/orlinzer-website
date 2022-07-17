import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import Layout from '../components/Layout/Layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <Layout
    >
      <Link href='/users/create_user'>Create User</Link><br />
      <Link href='/users/delete_user'>Delete User</Link><br />
      <Link href='/users/find_users'>Find Users</Link><br />
      <Link href='/users/get_all_users'>Get All Users</Link><br />
      <Link href='/users/get_user_by_id'>Get User By ID</Link><br />
      <Link href='/users/update_user'>Update User</Link><br />
    </Layout>
  );
};

export default Home;
