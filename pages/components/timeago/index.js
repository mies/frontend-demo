// @flow

import React from 'react';
import TimeagoPage from 'systema-timeago/example.js';
import Layout from '../../../components/components-layout';
import componentStyles from 'systema-timeago/styles.css';
import exampleStyles from 'systema-timeago/example.css';

const Timeago = () =>
  <Layout>
    <TimeagoPage />
    <style jsx global>
      {componentStyles}
    </style>
    <style jsx global>
      {exampleStyles}
    </style>
  </Layout>;

Timeago.displayName = 'Timeago';

export default Timeago;
