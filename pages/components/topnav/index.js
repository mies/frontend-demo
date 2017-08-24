// @flow

import Layout from '../../../components/components-layout';
import React from 'react';
import TopnavPage from 'systema-topnav/example.js';
import topnavStyles from 'systema-topnav/styles.css';

const Topnav = () =>
  <Layout>
    <TopnavPage />
    <style jsx global>
      {topnavStyles}
    </style>
  </Layout>;

Topnav.displayName = 'Topnav';

export default Topnav;
