// @flow

import Layout from '../../../components/components-layout';
import React from 'react';
import SidenavPage from 'systema-sidenav/example.js';
import buttonStyles from 'systema-button/styles.css';
import sidenavStyles from 'systema-sidenav/styles.css';

const Sidenav = () =>
  <Layout>
    <SidenavPage />
    <style jsx global>
      {sidenavStyles}
    </style>
    <style jsx global>
      {buttonStyles}
    </style>
  </Layout>;

Sidenav.displayName = 'Sidenav';

export default Sidenav;
