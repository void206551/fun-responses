# Fun Responses

![npm](https://img.shields.io/npm/v/fun-responses?style=for-the-badge)![npm bundle size](https://img.shields.io/bundlephobia/min/fun-responses?style=for-the-badge)![npm](https://img.shields.io/npm/dt/fun-responses?style=for-the-badge)![Website](https://img.shields.io/website?down_color=grey&down_message=offline&label=Responses&style=for-the-badge&up_color=green&up_message=online&url=https%3A%2F%2Fvoid206551.dev%2Fprojects%2Fmelody%2Fresources%2Ffun%2Ffun.json)

### NPM Install
```bash
npm install fun-responses
```

### How to use:
```javascript
const fun = require('fun-responses');

async function run() {
    console.log(' - Joke')
    console.log(await fun.joke())
    console.log(' - Pickup Line')
    console.log(await fun.pickup())
    console.log(' - Topic')
    console.log(await fun.topic())
    console.log(' - Roast')
    console.log(await fun.roast())
    console.log(' - Toast')
    console.log(await fun.toast())
}
run()
```

### Discord Example
```js
const Discord = require('discord.js');
const funRes = require('fun-responses');

async function topicSend() {
    const embed = new Discord.MessageEmbed()
        .setDescription(await funRes.topic())
    message.channel.send(embed).then().catch(console.error);
}

topicSend();
```

### Amounts of Responses
Use|Responses
-|-
`funRes.joke()`|44
`funRes.pickup()`|42
`funRes.topic()`|86
`funRes.roast()`|22
`funRes.toast()`|15
