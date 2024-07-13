

        let ret = await $axios.post('https://10.10.54.18/cis/ui/v1/home/getPublicKey').data
// {
//     "code": "0",
//     "msg": null,
//     "data": {
//         "publicKey": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkrvmP0rszA4iflDW4U+9WKtKBhqELTfRp9ZD2yXYfhEUU3Qk1WPWzH3xSJSESgVrc/TOca9zkRPS9f7LAC9AoP8+7WOxXZmsMfBtz2KAI9KqOj5w/ugzLgs6s4EQCWOXdOD3N8O0eCIUnyKoCmLVw3j1NIwXfSk7vSJK7gZeCIJBxueyG+deW6ltEADSWSxQZtfdj0nQmrqTMj8I+Sln77iRGFeSo53M2wmqTo5zwqhMFR4SzQTHFodsdqzZhqYkUv89XpVTiwevQAJ3J3U/gnrrt2/yUQLdJ7aURO130WK7KisQkV9ZdrcpnvSzNzKhUHuZ/qciTmG8vBcCqsZjsQIDAQAB"
//     }
// }
        // bindCard
        ret = await $axios.post('https://10.10.54.18/cis/ui/v1/card/bindCard',{
          "personId": "a108b744e2714cf7bd98904bfd46f95e",
          "orgIndexCode": "28c244f3b52d40788145682b1ad6aac5",
          "cards": [
            {
              "cardNumber": "123654789",
              "pwd": "",
              "cardType": "1",
              "cardBusinessType": "normalCard"
            }
          ]
        }).data
// {
//   "code": "0",
//   "msg": "cis.cis.card.bind.success",
//   "data": null
// }