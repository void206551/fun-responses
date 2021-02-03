// Joke call
exports.joke = async function () {

    const jResponse = require('./imports/joke.js')

    let resJoke = await jResponse.jRequest()

    return resJoke

}

// Pickup line call
exports.pickup = async function () {

    const pResponse = require('./imports/pickup.js')

    let resPick = await pResponse.pRequest()

    return resPick
}

// Topic call
exports.topic = async function () {

    const tResponse = require('./imports/topic.js')

    let resTopic = await tResponse.tRequest()

    return resTopic
}

// Roast call
exports.roast = async function () {

    const rResponse = require('./imports/roast.js')

    let resRoast = await rResponse.rRequest()

    return resRoast
}

// Toast call
exports.toast = async function () {

    const toResponse = require('./imports/toast.js')

    let resToast = await toResponse.toRequest()

    return resToast
}