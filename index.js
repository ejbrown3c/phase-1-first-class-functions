function receivesAFunction(callback) {
    return callback ()
}

receivesAFunction(callback)

function returnsANamedFunction () {
    return function test (){ 
    }
}

function returnsAnAnonymousFunction () {
    return function () {
    } 
}