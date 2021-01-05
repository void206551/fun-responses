# Fun Responses

![npm](https://img.shields.io/npm/v/fun-responses?style=for-the-badge)

NPM install:
```bash
npm install fun-responses
```

How to use:
```javascript
var funRes = require('fun-responses')
//Sends joke into the console. 
console.log(funRes.joke())
```

Example Discord use:
```javascript
var  funRes = require('fun-responses')
const  Discord = require("discord.js");
const  embed = new  Discord.MessageEmbed()
    .setDescription(funRes.joke())
message.channel.send(embed).then().catch(console.error);
```

Use|Responses
-|-
`funRes.joke()`|37
`funRes.pickup()`|41
`funRes.topic()`|44
`funRes.roast()`|22
`funRes.toast()`|6
