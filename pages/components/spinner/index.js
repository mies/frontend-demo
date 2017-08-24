// @flow

import SpinnerPage from 'systema-spinner/example.js';
import Layout from '../../../components/components-layout';
import React from 'react';
import spinnerExampleStyles from 'systema-spinner/example.css';
import spinnerStyles from 'systema-spinner/styles.css';

const Spinner = () =>
  <Layout>
    <SpinnerPage />
    <style jsx global>
      {spinnerStyles}
    </style>
    <style jsx global>
      {spinnerExampleStyles}
    </style>
  </Layout>;

Spinner.displayName = 'Spinner';

export default Spinner;
