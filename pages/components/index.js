// @flow

import Layout from '../../components/components-layout';
import React from 'react';

const Components = () =>
  <Layout>
    <h1>Components</h1>
    <p>Systema consists of 3 different types of packages:</p>
    <ol>
      <li>
        constants - they provide constants that are used by components and
        stylesheets
      </li>
      <li>
        <code>.css</code> packages (like the <code>base.css</code>). These are
        stylesheets that contain global styles
      </li>
      <li>components. Individual components like for instance the button</li>
    </ol>
  </Layout>;

Components.displayName = 'Components';

export default Components;
