// @flow

import ButtonsPage from 'systema-button/example.js';
import Layout from '../../../components/components-layout';
import React from 'react';
import buttonStyles from 'systema-button/styles.css';
import exampleStyles from 'systema-button/example.css';

const Button = () =>
  <Layout>
    <ButtonsPage />
    <style jsx global>
      {exampleStyles}
    </style>
    <style jsx global>
      {buttonStyles}
    </style>
  </Layout>;

Button.displayName = 'Button';

export default Button;
