const jwt = require('jsonwebtoken');
const fs = require('fs')

const privateKey = fs.readFileSync('./private.key').toString()
const publicKey = fs.readFileSync('./public.key').toString()

console.log('[p0.9]', privateKey)

const header = {
    algorithm: 'RS256',
    // typ: 'JWT'
}

const payload = {
    iss: 'lijiahao@shopee.com',
    iat: +new Date / 1000,
    exp: parseInt(+new Date / 1000) + 1000,
    scope: 'test'
}

const token = jwt.sign(payload, privateKey, header)

console.log('[p1.0] token', token)

jwt.verify(token, publicKey, (err, decoded) => {
    if (err) {
      // token验证失败
      console.error(err);
    } else {
      // token验证成功，解析后的数据存储在decoded中
      console.log('[p1.1]', decoded);
    }
  });