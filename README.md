# aku

<p align="center">
  <br>
  <img src="logo.png" alt="aku">
  <br>
</p>

![Last version](https://img.shields.io/github/tag/Kikobeats/aku.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/aku/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/aku)
[![Dependency status](https://img.shields.io/david/Kikobeats/aku.svg?style=flat-square)](https://david-dm.org/Kikobeats/aku)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/aku.svg?style=flat-square)](https://david-dm.org/Kikobeats/aku#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/aku.svg?style=flat-square)](https://www.npmjs.org/package/aku)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Guardian Spirit. It Interceps a function and exec a handler based on the result.

Bind a handler to exec under error and bind another for non error. Simple!

Similar to [jif](https://github.com/contra/jif) but for functions.

## Install

```bash
$ npm install aku --save
```

## API

### aku(fn, handler, [errHandler])

#### fn

*Required*<br>
Type: `function`

Input function to be handled

#### handler

*Required*<br>
Type: `function`

Handle to launch under non error.

#### fn

Type: `function`<br>
Defaults: `noop`

Handle to launch under error.

## License

MIT © [Kiko Beats](http://kikobeats.com)
