const url = 'https://void206551.dev/projects/melody/resources/fun/fun.json'
var got = require('got')
// Pickup call
exports.pRequest = async function () {

    const body = await got(url).json();
    let pickup = body[0].pickup
    let resPick = pickup[Math.floor(Math.random() * pickup.length)]

    return resPick
}