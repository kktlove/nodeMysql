var crypto = require('crypto');

var key = '비밀키';
var input = 'kim';

var cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf-8', 'base64');
var cipheredOutput = cipher.final('base64');

console.log('원래 문자열 : ' + input);
console.log('암호화 : ' + cipheredOutput);

var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf-8');
var decipheredOutput = decipher.final('utf-8');

console.log('복호화 : ' + decipheredOutput);