// @flow

import Layout from '../components/layout';
import Button from 'systema-button';
import buttonCss from 'systema-button/styles.css';
import Link from 'next/link';
import React from 'react';

const Home = () =>
  <Layout>
    <h1>Welcome</h1>
    <p>
      <input></input>
      <Button type="success">Submit</Button>
      For more documentation please see the{' '}
      <Link href="/components/">components section</Link>
    </p>
  </Layout>;

Home.displayName = 'Home';

export default Home;
