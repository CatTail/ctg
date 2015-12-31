var casper = require("casper").create({
    verbose: true,
    logLevel: "debug"
})
var fs = require('fs')

casper.start()

casper.open("http://meituan.com")

casper.then(function() {
    this.userAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36")
})

casper.then(function() {
    this.viewport(500, 500)
})

casper.then(function() {
    this.back()
})

casper.then(function() {
    this.forward()
})

casper.then(function() {
    this.reload()
})

casper.then(function() {
    this.mouse.click("#selector")
})

casper.then(function() {
    this.mouse.down("#selector")
})

casper.then(function() {
    this.sendKeys("#selector", "hello world", {reset: true})
})

casper.then(function() {
    // var checked = this.getElementAttribute("#selector", "checked")
    this.mouse.click("#selector")
})
// casper.wait(100)

// https://github.com/segmentio/nightmare/blob/32dfd18f5aa042a433f25eb15dfbc260ff5c49e3/lib/actions.js#L183
casper.thenEvaluate(function(selector, option) {
    var element = document.querySelector(selector)
    var event = document.createEvent("HTMLEvents")
    element.value = option
    event.initEvent("change", true, true)
    element.dispatchEvent(event)
}, "#selector", "someOption") // TODO: option maybe int?

casper.then(function() {
    this.scrollTo(200, 200)
})

casper.then(function() {
    this.page.injectJs("/path/to/file.js")
})

casper.evaluate(function(content) {
    var style = document.createElement('style')
    style.innerHTML = content
    document.body.appendChild(style)
}, fs.read("/path/to/file.css"))

casper.wait(1000)

casper.waitForSelector("#selector")

casper.run()
