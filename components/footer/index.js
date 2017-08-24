import { Footer, Subnav } from 'systema-footer';

// @flow
import React from 'react';
import footerStyles from 'systema-footer/styles.css';

const SharedFooter = () =>
  <Footer contentClassName="container">
    <Subnav>
      <a href="https://oracle.com/">Oracle</a>
      <a href="https://www.wercker.com/">Wercker.com</a>
      <a href="https://www.npmjs.com/~werckerbot">npm</a>
    </Subnav>
    <style jsx global>
      {footerStyles}
    </style>
  </Footer>;

SharedFooter.displayName = 'SharedFooter';

export default SharedFooter;
