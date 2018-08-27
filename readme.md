
This is a UI for collecting users' name and email from our squarespace site.

## Use
Large custom JS bundles must be made available to squarespace via a script tag in the config/pages/advanced menu under "Page header code injection".
```
<script defer src="[bundle.js]"></script>
<script defer src="[bundle.js.map]"></script>
```
This requires that this repo be publicly available (so that scripts may be delivered directly from github) or that the scripts be published with a CDN service.

The beta page on our site currently has a `<div id="root"><div/>` for the scripts here to reference.

## Development
`yarn` for package installation and management

`yarn dev` for local work, served to port 3000 by default, but setting process.env.PORT in a .env file will override the default.

`yarn build` to create a `dist` directory with production files. Run `node index.js` to test this build.

`yarn start` combines `yarn build` and `node index.js`

## ToDo
1. send user details to a server that will implement the [whitelisting process](https://docs.google.com/document/d/1e8oHEnMA8OZnzq7BaeiicW9UXcIlTfBD0Bld8x01kuI/edit?usp=sharing).
2. Consider [EIP 1077](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1077.md) or Austin Griffith's [bouncer proxy contract](https://github.com/austintgriffith/bouncer-proxy/blob/master/BouncerProxy/BouncerProxy.sol) for the whitelisting transaction.
    1. A user signs a transaction with their new metamask account that includes the access key.
    2. The dapp sends this transaction to a server which constructs a transaction itself and pays all gas.
