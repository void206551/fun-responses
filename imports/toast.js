const url = 'https://void206551.dev/projects/melody/resources/fun/fun.json'
var got = require('got')
// Topic call
exports.toRequest = async function () {

    const body = await got(url).json();
    let toast = body[0].toast
    let resToast = toast[Math.floor(Math.random() * toast.length)]

    return resToast
}