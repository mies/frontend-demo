// @flow

import GridPage from 'systema-grid.css/example.js';
import Layout from '../../../components/components-layout';
import React from 'react';
import exampleStyles from 'systema-grid.css/example.css';

const GridCSS = () =>
  <Layout>
    <GridPage />
    <style jsx global>
      {exampleStyles}
    </style>
  </Layout>;

GridCSS.displayName = 'GridCSS';

export default GridCSS;
