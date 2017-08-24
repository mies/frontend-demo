// @flow

import Layout from '../layout';
import Link from 'next/link';
import React from 'react';
import Sidenav from 'systema-sidenav';
import buttonStyles from 'systema-button/styles.css';
import sidenavStyles from 'systema-sidenav/styles.css';

type PropsType = { children: any };

const ComponentsLayout = (props: PropsType) =>
  <Layout>
    <div className="row">
      <div className="columns medium-4 large-3">
        <Sidenav title="Components">
          <Link href="/components/constants-colors">
            <a>constants-colors</a>
          </Link>
          <Link href="/components/constants-layout">
            <a>constants-layout</a>
          </Link>
          <Link href="/components/constants-motion">
            <a>constants-motion</a>
          </Link>
          <Link href="/components/base-css">
            <a>base.css</a>
          </Link>
          <Link href="/components/grid-css">
            <a>grid.css</a>
          </Link>
          <Link href="/components/avatar">
            <a>Avatar</a>
          </Link>
          <Link href="/components/button">
            <a>Button</a>
          </Link>
          <Link href="/components/card">
            <a>Card</a>
          </Link>
          <Link href="/components/footer">
            <a>Footer</a>
          </Link>
          <Link href="/components/icon">
            <a>Icon</a>
          </Link>
          <Link href="/components/sidenav">
            <a>Side navigation</a>
          </Link>
          <Link href="/components/spinner">
            <a>Spinner</a>
          </Link>
          <Link href="/components/tabbar">
            <a>Tab bar</a>
          </Link>
          <Link href="/components/topnav">
            <a>Top navigation</a>
          </Link>
          <Link href="/components/timeago">
            <a>Time-ago</a>
          </Link>
        </Sidenav>
      </div>
      <div className="columns medium-8 large-9">
        {props.children}
      </div>
    </div>
    <style jsx global>
      {buttonStyles}
    </style>
    <style jsx global>
      {sidenavStyles}
    </style>
  </Layout>;

ComponentsLayout.displayName = 'ComponentsLayout';

export default ComponentsLayout;
