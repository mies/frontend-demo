// @flow

import AvatarPage from 'systema-avatar/example.js';
import Layout from '../../../components/components-layout';
import React from 'react';
import avatarStyles from 'systema-avatar/styles.css';
import exampleStyles from 'systema-avatar/example.css';

const Avatars = () =>
  <Layout>
    <AvatarPage />
    <style jsx global>
      {avatarStyles}
    </style>
    <style jsx global>
      {exampleStyles}
    </style>
  </Layout>;

Avatars.displayName = 'Avatars';

export default Avatars;
