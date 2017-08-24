// @flow

import Footer from '../footer';
import Head from 'next/head';
import Nav from '../nav';
import React from 'react';
import base from 'systema-base.css/base.css';
import grid from 'systema-grid.css/grid.css';
import page from 'systema-base.css/page.css';

type Props = {
  children?: Element<any>,
};

const Layout = ({ children }: Props) =>
  <div className="wrapper">
    <Head>
      <title>Systema</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    {/*
      Include global styles first so that components can override
      styles with same specificity
    */}
    <style jsx global>{`
      .wrapper {
        height: 100vh;
        position: relative;
        display: flex;
        flex-direction: column;
      }

      .content {
        flex: 1;
      }
    `}</style>
    <style jsx global>
      {base}
    </style>
    <style jsx global>
      {grid}
    </style>
    <style jsx global>
      {page}
    </style>

    <div className="content">
      <Nav />
      <div className="container">
        {children}
      </div>
    </div>
    <Footer />
  </div>;

Layout.displayName = 'Layout';

export default Layout;
