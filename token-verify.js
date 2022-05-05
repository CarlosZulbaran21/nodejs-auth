const jwt = require("jsonwebtoken")

const secret = 'myCat'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY0OTIyNTMxMn0.baE9lIWE-sdGvAmzDiEdG2AB0w0dBbW3iKBSHnBC1LA"

function verifyToken(token, secret) {
    return jwt.verify(token, secret)
}

const payload = verifyToken(token, secret)
console.log(payload);