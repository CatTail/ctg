export function equal(v1, v2, options) {
    if (v1 == v2) {
        return options.fn(this)
    }
    return options.inverse(this)
}

export function debug(variable) {
    console.log("====================Current Context====================")
    console.log(this)

    console.log("====================Variable====================")
    console.log(variable)
}
