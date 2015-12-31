/// <reference path="typings/tsd.d.ts" />

import fs = require('fs')
import Handlebars = require('handlebars')
import helpers = require('./helpers')
Handlebars.registerHelper(helpers)
import * as Debug from 'debug'
var debug = Debug('ctg')

interface Action {
    command: String
    target: String
    value: any
}

// reformat actions into requests of actions
interface Request {
    url: String,
    actions: Array<Action>
}

export function casperjs(actions: Array<Action>) {
    var template = compile('templates/casperjs.hbs')
    var result = template({
        actions: actions,
    })
    return result
}

function compile(path) {
    return Handlebars.compile(fs.readFileSync(path, 'utf8'))
}
