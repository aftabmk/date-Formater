<h1 align="center">
    Date
   <b>
        <a href="https://aftab.netlify.app"><img src="https://pluspng.com/img-png/clock-hd-png-clock-png-image-1399.png" /></a><br>
    </b>
</h1>
<p align="center">*This module is used to generate date with specific format like 04/07/1995 from js build in function of **Date.now()**,The aim of this package is to simplify the date-format to readily usable syntax with no further alteration*.</p>

## Installing

Using npm:

```bash
$ npm install axios
```

Using bower:

```bash
$ bower install axios
```

Using yarn:

```bash
$ yarn add axios
```

Using pnpm:

```bash
$ pnpm add axios
```

## Example

### note: CommonJS usage
In order to gain the TypeScript typings (for intellisense / autocomplete) while using CommonJS imports with `require()` use the following approach:

```js
const axios = require('axios').default;

// axios.<method> will now provide autocomplete and parameter typings
```

Performing a `GET` request

```js
const axios = require('axios').default;

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```