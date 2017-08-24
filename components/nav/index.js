// @flow

import { Brand, Menubar, OffCanvas, Topnav } from 'systema-topnav';

import Link from 'next/link';
import React from 'react';
import styles from 'systema-topnav/styles.css';

const Nav = () => {
  return (
    <div className="layout">
      <Topnav contentClassName="container">
        <Brand>
          <Link href="/">
            <a>
              <img src="/static/logo.png" alt="logo" height="24" />
            </a>
          </Link>
        </Brand>
        <OffCanvas>
          <Menubar>
            <Link href="/components">
              <a>Components</a>
            </Link>
          </Menubar>
        </OffCanvas>
      </Topnav>
      <style global jsx>
        {styles}
      </style>
      <style jsx>{`
        .layout {
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
};

Nav.displayName = 'nav';

export default Nav;
