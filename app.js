const crypto = require('crypto');
const fs = require('fs');

const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
const iv = crypto.randomBytes(16);

// archivo de entrada
const r = fs.createReadStream('file.txt');
console.log('Generador de randomBytes ' + iv);

// encriptacion
const encrypt = crypto.createCipheriv(algorithm, secretKey, iv);

// desencriptacion
const decrypt = crypto.createDecipheriv(algorithm, secretKey, iv);

// archivo de salida
const w = fs.createWriteStream('file.out.txt');

// start pipe
r.pipe(encrypt).pipe(decrypt).pipe(w);