const funny = './fun.json';

// Joke call
exports.joke = function () {
    var {
        joke
    } = require(funny);
    var resJoke = joke[Math.floor(Math.random() * joke.length)];
    return resJoke
}

// Pickup line call
exports.pickup = function () {
    var {
        pickup
    } = require(funny);
    var resPick = pickup[Math.floor(Math.random() * pickup.length)];
    return resPick
}

// Topic call
exports.topic = function () {
    var {
        topic
    } = require(funny);
    var resTopic = topic[Math.floor(Math.random() * topic.length)];
    return resTopic
}

// Roast call
exports.roast = function () {
    var {
        roast
    } = require(funny);
    var resRoast = roast[Math.floor(Math.random() * roast.length)];
    return resRoast
}

// Toast call
exports.toast = function () {
    var {
        toast
    } = require(funny);
    var resToast = toast[Math.floor(Math.random() * toast.length)];
    return resToast
}