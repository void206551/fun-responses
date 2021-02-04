const url = 'https://void206551.dev/projects/fun/fun.json'
var got = require('got')
// Topic call
exports.rRequest = async function () {

    const body = await got(url).json();
    let roast = body[0].roast
    let resRoast = roast[Math.floor(Math.random() * roast.length)]

    return resRoast
}