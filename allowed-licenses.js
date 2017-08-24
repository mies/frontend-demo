// https://github.com/behance/license-to-fail
module.exports = {
  allowedLicenses: [
    'MIT',
    'APACHE',
    'BSD',
    'ISC',
    'Public Domain',
    'WTFPL',
    'CC0-1.0',
    'UNLICENSE',
  ],
  allowedPackages: [
    {
      name: 'stackframe',
      date: '2017-06-15',
      license: 'MIT and eariler versions UNLICENSE',
      reason: 'used by react-hot-loader',
    },
    {
      name: 'buffers',
      date: '2017-07-20',
      license: 'MIT',
      reason: 'flow-typed#unzip#binary',
    },
    {
      name: 'caniuse-lite',
      date: '2017-05-09',
      license: 'CC-BY-4.0',
      reason: 'part of autoprefixer',
    },
    {
      name: 'jschardet',
      date: '2017-07-21',
      license: 'LGPL-2.1',
      reason: 'part of eslint, so not used to build the software',
    },
    {
      name: 'string-hash',
      date: '2017-07-20',
      license: 'custom',
      reason: 'next#styled-jsx',
    },
  ],
};
