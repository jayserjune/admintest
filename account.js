const _obj=require('./account_list.json')
const fs = require("fs")
let _account={
    "name": "account_list",
    "value": [
    ],
    "expires": null,
    "startTime": 1612008783274
}

for(let phone in _obj){
    let _item={
        name:phone,
        user_data:_obj[phone],
        isOnline:_obj[phone].online
    }
    _account.value.push(_item)
}
fs.writeFileSync('./account_list2.json', JSON.stringify(_account));

console.log(_account)