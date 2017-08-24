// @flow

import ColorsPage from 'systema-constants-colors/example.js';
import Layout from '../../../components/components-layout';
import React from 'react';
import colorsStyles from 'systema-constants-colors/example.css';

const ConstantsColors = () =>
  <Layout>
    <ColorsPage />
    <style jsx global>
      {colorsStyles}
    </style>
  </Layout>;

ConstantsColors.displayName = 'ConstantsColors';

export default ConstantsColors;
