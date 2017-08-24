// @flow

import TabbarsPage from 'systema-tabbar/example.js';
import Layout from '../../../components/components-layout';
import React from 'react';
import tabbarStyles from 'systema-tabbar/styles.css';
import exampleStyles from 'systema-tabbar/example.css';

const Tabbar = () =>
  <Layout>
    <TabbarsPage />
    <style jsx global>
      {exampleStyles}
    </style>
    <style jsx global>
      {tabbarStyles}
    </style>
  </Layout>;

Tabbar.displayName = 'Tabbar';

export default Tabbar;
