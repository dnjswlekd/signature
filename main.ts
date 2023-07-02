import _ from 'lodash'

console.log(_.upperCase('hello-world'))

interface User {
    name: String
    age: Number
}

const user:User = {
    name: 'wonji',
    age: 25
} 

console.log(user)