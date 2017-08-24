// @flow

import CardPage from 'systema-card/example.js';
import Layout from '../../../components/components-layout';
import React from 'react';
import cardExampleStyles from 'systema-card/example.css';
import cardStyles from 'systema-card/styles.css';

const Card = () =>
  <Layout>
    <CardPage />
    <style jsx global>
      {cardStyles}
    </style>
    <style jsx global>
      {cardExampleStyles}
    </style>
  </Layout>;

Card.displayName = 'Card';

export default Card;
