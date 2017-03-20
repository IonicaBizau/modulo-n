
# modulo-n

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/modulo-n.svg)](https://www.npmjs.com/package/modulo-n) [![Downloads](https://img.shields.io/npm/dt/modulo-n.svg)](https://www.npmjs.com/package/modulo-n)

> Get unique number results based on unique inputs using modulo-n classes.

For a specific integer and range, you will always get the same number
result. It could happen to find different inputs for which the result
will be the same. That's expected.

## :cloud: Installation

```sh
$ npm i --save modulo-n
```


## :clipboard: Example



```js
const moduloN = require("modulo-n");

console.log(moduloN(42, 4, 8));
// => 6

console.log(moduloN(42, 2, 8));
// => 2

console.log(moduloN(43, 2, 8));
// => 3
```

## :memo: Documentation


### `moduloN(n, min, max)`
Returns a number that will be unique for a specific `n` and range.

#### Params
- **Number** `n`: The input number.
- **Number** `min`: The minimum number in the range.
- **Number** `max`: The maximum number in the range.

#### Return
- **Number** A number that will greater or equal to `min` but lower than `max` and will be always the same for the same range and same `n`.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`numberly`](https://github.com/IonicaBizau/numberly#readme)—Get a specific number for an input string and number range.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
