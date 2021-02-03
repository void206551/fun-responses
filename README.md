# Fun Responses

![npm](https://img.shields.io/npm/v/fun-responses?style=for-the-badge)

NPM install:
```bash
npm install fun-responses
```

How to use:
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

Use|Responses
-|-
`funRes.joke()`|37
`funRes.pickup()`|41
`funRes.topic()`|44
`funRes.roast()`|22
`funRes.toast()`|6
