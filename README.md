<h1 align="center">
    Date
   <b>
        <a href="https://aftab.netlify.app"><img src="https://pluspng.com/img-png/clock-hd-png-clock-png-image-1399.png" /></a><br>
    </b>
</h1>
<p align="center">This module is used to generate date with specific format like 04/07/1995 from js build in function of Date.now(),The aim of this package is to simplify the date-format to readily usable syntax with no further alteration.</p>

## Installing

Using npm:

```bash
$ npm install @aftabmk/date
```

Using bower:

```bash
$ bower install @aftabmk/date
```

Using yarn:

```bash
$ yarn add @aftabmk/date
```

Using pnpm:

```bash
$ pnpm add @aftabmk/date
```

## Example

### note: CommonJS usage
In order to gain the TypeScript typings (for intellisense / autocomplete) while using CommonJS imports with `require()` use the following approach:

## Inputs
The date function has four inputs

1)The day input, default 0
## Day(week ago)
```js
const dateNow = date(7,0,0,true,'forwardSlash')
// current 10/05/2022
// result 03/05/2022
// logic day = 10-8 = 2
```
2)The month input, default 0
## Month(Quarter ago)
```js
const dateNow = date(0,3,0,true,'forwardSlash')
// current 02/12/22
// result 02/9/22
// logic day = 12-3 = 9
```
3)The year input , default 0
## Year(decade ago)
```js
const dateNow = date(0,0,10,true,'forwardSlash')
// current 02/12/22
// result 02/9/12
// logic day = 22-5 = 12
```
4)The boolean input
## True
```js
const dateNow = date(0,0,0,true,'forwardSlash')
// result 01/01/22
```
## False
```js
const dateNow = date(0,0,0,false,'forwardSlash')
// result 01/01/2022
```
5)Symbol input
## Examples of input symbols
## Ampersand(&)
```js
const dateNow = date(0,0,0,false,'ampersand')
// result 01&01&2022
```
## Apostrophe(')
```js
const dateNow = date(0,0,0,false,'apostrophe')
// result 01'01'2022
```
## Asterisk(*)
```js
const dateNow = date(0,0,0,false,'asterisk')
// result 01*01*2022
```
## AatSign(@)
```js
const dateNow = date(0,0,0,false,'atSign')
// result 01@01@2022
```
## Dot(.)
```js
const dateNow = date(0,0,0,false,'dot')
// result 01.01.2022
```
## Dollar($)
```js
const dateNow = date(0,0,0,false,'dollar')
// result 01$01$2022
``` 
## Hyphen(-)
```js
const dateNow = date(0,0,0,false,'hyphen')
// result 01-01-2022
``` 
## UnderScore(_)
```js
const dateNow = date(0,0,0,false,'underScore')
// result 01_01_2022
``` 
## Exclamation(!)
```js
const dateNow = date(0,0,0,false,'exclamation')
// result 01!01!2022
```
## Hash(#)
```js
const dateNow = date(0,0,0,false,'hash')
// result 01#01#2022
```
## Quotation(")
```js
const dateNow = date(0,0,0,false,'quotation')
// result 01"01"2022
```
## ForwardSlash(/)
```js
const dateNow = date(0,0,0,false,'forwardSlash')
// result 01/01/2022
```

## Starter Code

```js
const {getDate} = require('@aftabmk/date');
// date now in the format dd/mm/yyyy
const date = getDate(0,0,0,false,'forwardSlash')
// result 01/01/2022
```