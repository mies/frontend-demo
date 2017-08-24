![Systema](./logo.png)

## Installation

Make sure you have [yarn] installed, then:

```
git clone git@github.com:wercker/systema.git
cd systema
yarn
```

## Development

Run `yarn dev` then open [localhost:3000](http://localhost:3000)

## Build

Run `yarn build`. The built files are in the `build` directory but the entire
source dir should be deployed as the source files are still used for server
render.

With the files built the server can be started with `yarn start`.

## Format

Run `yarn run format` to run prettier and format the css/js in a standard way.

## License check

Run `yarn license-check` to see if there are any packages installed that are
not permitted (i.e. license is missing or is not of the correct type)

## Linting

Run `yarn run lint`. To check if the js and css files are conform the coding standars.

[yarn]: https://yarnpkg.com
