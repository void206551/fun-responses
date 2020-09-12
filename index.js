const funny = './fun.json';

// Joke call
var {
    joke
} = require(funny);
var resJoke = joke[Math.floor(Math.random() * joke.length)];

exports.joke = resJoke

// Pickup line call
var {
    pickup
} = require(funny);
var resPickup = joke[Math.floor(Math.random() * pickup.length)];

exports.pickup = resPickup

// Topic call
var {
    topic
} = require(funny);
var resTopic = topic[Math.floor(Math.random() * topic.length)];

exports.topic = resTopic

// Roast call
var {
    roast
} = require(funny);
var resRoast = roast[Math.floor(Math.random() * roast.length)];

exports.roast = resRoast

// Toast call
var {
    toast
} = require(funny);
var resToast = toast[Math.floor(Math.random() * toast.length)];

exports.toast = resToast