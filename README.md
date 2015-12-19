# modulo-n [![Support this project][donate-now]][paypal-donations]

Get unique number results based on unique inputs using modulo-n classes.

For a specific integer and range, you will always get the same number
result. It could happen to find different inputs for which the result
will be the same. That's expected.

## Installation

```sh
$ npm i --save modulo-n
```

## Example

```js
const moduloN = require("modulo-n");

console.log(moduloN(42, 4, 8));
// => 6

console.log(moduloN(42, 2, 8));
// => 2

console.log(moduloN(43, 2, 8));
// => 3
```

## Documentation

### `moduloN(n, min, max)`
Returns a number that will be unique for a specific `n` and range.

#### Params
- **Number** `n`: The input number.
- **Number** `min`: The minimum number in the range.
- **Number** `max`: The maximum number in the range.

#### Return
- **Number** A number that will greater or equal to `min` but lower than `max` and will be always the same for the same range and same `n`.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md