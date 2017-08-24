// @flow

import FooterPage from 'systema-footer/example.js';
import Layout from '../../../components/components-layout';
import React from 'react';
import footerStyles from 'systema-footer/styles.css';

const Footer = () =>
  <Layout>
    <FooterPage />
    <style jsx global>
      {footerStyles}
    </style>
  </Layout>;

Footer.displayName = 'Footer';

export default Footer;
