// @flow

import IconPage from 'systema-icon/example.js';
import Layout from '../../../components/components-layout';
import React from 'react';
import exampleStyles from 'systema-icon/example.css';

const Icons = () =>
  <Layout>
    <IconPage />
    <style jsx global>
      {exampleStyles}
    </style>
  </Layout>;

Icons.displayName = 'Icons';

export default Icons;
