const funny = './fun.json';

const fuWeb = 'https://void206551.dev/projects/fun/fun.json'

// Joke call
exports.joke = function () {
    var {
        joke
    } = require(fuWeb);
    var resJoke = joke[Math.floor(Math.random() * joke.length)];
    return resJoke
}

// Pickup line call
exports.pickup = function () {
    var {
        pickup
    } = require(fuWeb);
    var resPick = pickup[Math.floor(Math.random() * pickup.length)];
    return resPick
}

// Topic call
exports.topic = function () {
    var {
        topic
    } = require(fuWeb);
    var resTopic = topic[Math.floor(Math.random() * topic.length)];
    return resTopic
}

// Roast call
exports.roast = function () {
    var {
        roast
    } = require(fuWeb);
    var resRoast = roast[Math.floor(Math.random() * roast.length)];
    return resRoast
}

// Toast call
exports.toast = function () {
    var {
        toast
    } = require(fuWeb);
    var resToast = toast[Math.floor(Math.random() * toast.length)];
    return resToast
}