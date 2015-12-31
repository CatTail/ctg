# CTG

> Common Test Generator

## Development

``` 
npm install
// change typescript source code
make // build
```

**NOTE**: ./typings/handlebars/handlebars.d.ts is being patch with extra `registerHelper` definition

``` 
export function registerHelper(name: Object): void;
```

## Common Test Format

Test record and automation tool use array of actions to describe user actions.

Common Test Format add additonal context information and reserved field for

future use.

``` json
[
  {
    "command": "click",
    "target": "#target",
    "value": "",
    "extra": {
      "key": "this can be very complex object"
    }
  },
  {
    "command": "type",
    "target": ".target",
    "value": "hello world"
  }
]
```

Complete set of browser event can't be find in https://developer.mozilla.org/en-US/docs/Web/API/Event.

Currently comment test format only define subset of these event.

### Command

|          Command Name          |               Description                |                 casperjs                 | nightmare |
| :----------------------------: | :--------------------------------------: | :--------------------------------------: | :-------: |
|           open(url)            |         Load the page at `url`.          |                open(url)                 | goto(url) |
|         useragent(ua)          |        Sets the User-Agent string        |             userAgent(agent)             | useragent |
|    viewport(width, height)     |      Changes current viewport size.      |         viewport(width, height)          | viewport  |
|             back()             |      Go back to the previous page.       |                  back()                  |   back    |
|           forward()            |       Go forward to the next page.       |                forward()                 |  forward  |
|           refresh()            |        Refresh the current page.         |                 reload()                 |  refresh  |
|        click(selector)         |   Clicks the `selector` element once.    |          mouse.click(selector)           |   click   |
|      mousedown(selector)       |  Mousedown the `selector` element once.  |           mouse.down(selector)           | mousedown |
|     type(selector[, text])     | Enters the `text` provided into the `selector` element. Empty or falsey values provided for `text` will clear the selector's value. |    sendKeys(with reset set as `true`)    |   type    |
|        check(selector)         | Toggles the `selector` checkbox element. | [fallback](https://gist.github.com/naholyr/3099026) |   check   |
|    select(selector, option)    | Changes the `selector` dropdown element to the option with attribute [value=`option`] | [fallback](http://stackoverflow.com/questions/16332312/how-to-click-a-select-option-and-then-evaluate-loaded-content-with-casperjs) |  select   |
|      scrollTo(top, left)       | Scrolls the page to desired position. `top` and `left` are always relative to the top left corner of the document. |              scrollTo(x, y)              | scrollTo  |
|       inject(type, file)       | Inject a local `file` onto the current page. The file `type` must be either `js` or `css`. | [js fallback](http://docs.casperjs.org/en/latest/faq.html?highlight=injectjs#can-i-use-jquery-with-casperjs) [css fallback](http://codeutopia.net/blog/2014/02/05/tips-for-taking-screenshots-with-phantomjs-casperjs/) |  inject   |
|            wait(ms)            | Wait for `ms` milliseconds e.g. `.wait(5000)` |              wait(timeout)               |   wait    |
|   waitForSelector(selector)    | Wait until the element `selector` is present e.g. `.waitForSelector('#pay-button')` |        waitForSelector(selector)         |   wait    |
|       Don't support now        |                                          |                                          |           |
| evaluate(fn[, arg1, arg2,...]) | Invokes `fn` on the page with `arg1, arg2,...`. All the `args` are optional. On completion it returns the return value of `fn`. Useful for extracting information from the page. |                 evaluate                 | evaluate  |
| .waitFor(fn[, arg1, arg2,...]) | Wait until the `fn` evaluated on the page with `arg1, arg2,...` returns `true`. All the `args` are optional. See `.evaluate()`for usage. |                 waitFor                  |   wait    |

## Referrences

* [casperjs](http://docs.casperjs.org/en/latest/modules/casper.html)
* [nightmare](https://github.com/segmentio/nightmare)