const url = 'https://void206551.dev/projects/fun/fun.json'
var got = require('got')
// Joke call
exports.jRequest = async function () {

    const body = await got(url).json();
    let joke = body[0].joke
    let resJoke = joke[Math.floor(Math.random() * joke.length)]

    return resJoke
}