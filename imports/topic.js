const url = 'https://void206551.dev/projects/fun/fun.json'
var got = require('got')
// Topic call
exports.tRequest = async function () {

    const body = await got(url).json();
    let topic = body[0].topic
    let resTopic = topic[Math.floor(Math.random() * topic.length)]

    return resTopic
}