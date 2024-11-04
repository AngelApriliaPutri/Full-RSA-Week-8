const crypto = require("crypto");

const recipientPrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCwFOtCWEhWFnrw
MhW3GCnA/HSN5H1KGDi8d06nwu6S2Jx3lS8H4s3lu4TCuvHEF+0DXjTOzGq0JxjG
mbIiAxE4Dai2OJMiv034Fi01JeLQkoM9Qyl+kmqZNCEgQaCGlwwk6KNzf6MosJRK
5oLhmNgPc1xgiEYN4WE9+1l6CnP6Wtf9npE4LlOh7PqoGfTR2OZp9oD2+XbDB58S
GVIGQe5w6S4NwnCf9jdvxEPTH5/IezWvX4dtet0bXmYVKDFEafGkfiIzsmP2w+Kv
YJ2NO3CbZ2UaNpfktsD/CnvXGwxidNZjTzQ7eK7M/SO71UFyzz4ajat0c9a8WmzW
8EoBLsLhAgMBAAECggEAG4cPBy6RaHwCjj3rl9Xm49fT9Ow4C3cL76g18L47Lqk/
P5FgFTsyS0HB+JuMo8ZwdFVXAM7ZDlRfvYoBB5Yz1pqJZKt6599r4LwUJznxYqrK
alpvSJgP+Dw7wt+KVArrMsiiklztn1/eXx34b4JwohcROw+IPC/0VDdQ/rusSVgv
6nLb+74vhhAVsog2ORjbXKpB2/06+5pCTdDkitTd9Xzrzh4s4FKIr/EY/kGk35DI
VnVD7ddhaYUQ+VmGfA6Ylhb71PdMLeVryKRHyQ+dW+JILvCVuusXC5TgFUVQRQME
bKtIiF54HqqwT3Ia3V0Ujf9HsJGJ37g8yyNBDU51rQKBgQD3enWOhi5XkHbvydZi
rLkizJEG101WFH+VSW1RzPwb+1nZnHUE48zk/pTa4V8+aNQQbqcM4eeaofWaMzBU
LXE2BdfpoYM3SqiF0/BhjqxKJgsAWkSisbsqj5QICJMfizUUM5qZeIHcLoX7D5lo
zyL1Hi8cgLKHCUNAdvnvzq/5zwKBgQC2JRfGo3Qp5z6Hd5kYqbC9NJBdfeJ5KXc1
TLGjiCs5s5hgN+sCP2MKNBuSkh8u2KtnZuBHwydFe8Eim42Tm4VwXoVCAjxWrXMQ
WRNbwGiYKpg3k9vR6hghjuwann9kMQ8Q9XyWvTnBvdpWgJ08DlLck8PEwE2KEbO5
T/61qnuUTwKBgCV/TpSbzCXEY+ENSgiFdz/IkyjgMn2aeYJbL883KfPrb7/DLw/g
nEkOMevAPjgslgUvXuxaxkbtx1Ln8qiugfrXg9GIgWM9Uq+EX2XIwl4xyXTyOHgW
Se+29Y0KD5C1/QLklsYuNi7wdaiGwo3Y5MkTG7xL28EOLDx2SoSFYrCNAoGAHqLI
h/mQHUguxTxBfNt1xa0kpwT4ZaaqzUU0D6xkkNT7SRu+pGci8mFnTdTT994rnj24
dXmGjnJNPtPpES20WP0c7shPe8i6tMI2tlT7grSPW7G75Ge6XVKbtbJ4/NIflZuk
s/np0ANtyOTjDWnfWAhmgh5SLGnjz8R7s/STypMCgYEAq8N5hBjxSyIav4yvbqjn
AlnexTP3y0GqnQMZiX25h1mEgE5lJ00bBN9P34HJRHllyeeTJIwY1X1tKa6nP2pH
1YnnZsFPKCgqUwItcYoRi0nZ6/4e9ap3S33P36nUdLlF+pU2FNz1S0Ji9LNT4SJy
tr4iZ3+s7SPk6pGEAwVK0/Q=
-----END PRIVATE KEY-----`;
const recipientPrivateKey = crypto.createPrivateKey(recipientPrivateKeyPem);

const senderPublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApG+TTeyBi/PGMspLo+zW
XS8crbZ66EYFr4AqdcI51zKXEc3UE/CjLNShssEX+g1PIYEKwdhLcgxo55Z/lnLB
a3enZLcxWWyCWGNOZBYieraShui344Jdeg3jKXia/bnPi9hqLAVUNEMNPC14cXOf
jpAPAanJHPiHPQrV8km58YjPBs4zv7OphMYaamARfG2Qln5fP/F2fbx1UP8vJozy
D5l8xuIzvzzt5jPfNiPY4P/CMdl5bXsDTcQX7lmLLAissAvgdB1clo37P+aN4TMD
aUP2pJKNzOAnWIyJdi+clPAqBLjQ4XlyvbmtYEdfHd5UhDZVmkauYrbAh54nKEgg
jwIDAQAB
-----END PUBLIC KEY-----`;
const senderPublicKey = crypto.createPublicKey(senderPublicKeyPem);

const signatureHex = "410162285cd1e490016a122387363822ce412d1953fc4474b224351816d2aa3e75c711f88e6ac26b1f7832cd16b15f974683cb6d412a12e0debb88ad97b8bce4079a36c09abe1318dc1a62a364ed874478032c83faf250a1aaa40a8e3675318497fb9bf01c4e16d0cb63d656c5afc14349ecd06a3449693a21f0d5e18bd2217e72c164da5af80bb0837f47720a72bce78fec118f0f3024fb93fa6676f4736a90dc40c5decf87c28a9a6226d5ebd09a3a49ac7ffba7515fdf4a5efd88b97e7195f2f0e1d9eaad449752715e1d67a965c6e82ba5ea0ac75259bf8e65fa37fbdfceb7a261048cefaaf3d9ef862d539c4deb8fccbf43c1b7299f34a8730f4099bdca";
const signature = Buffer.from(signatureHex, "hex");

const ciphertextHex = "1b09203294422519c42e38229ad3cb1a6f77bd52306f25fcf56292cc8dd6e04073c7e5227718633301c279b5ecf47f9664531bc377bc8c38e27eb64b31ad5926150511eb35b0a515ebd59e72d7a9b986808cc3f79f7d1debdfd3fe9b31247b7fff763434461d7d3710bf97da13b308736ffa8f3cb76c4f8f107a454814f3ba91ec3cf3f5152fb41193f93d90b2515a460dd9e31149444f181d875516bc123ff8627356c38afe4861d6740c382b0afbf9d690f24052b13f1103d5698c9f5d359bc98d11686a8bcb361938a8514ae2c64191c28b8ed67ef3cd65ff8478c1caac68e99ee56a5e5f20dfe8687b5a2ebd9394bacd4cbfc8d4450d81bb5553fca29a61";
const ciphertext = Buffer.from(ciphertextHex, "hex");

// RECIPIENT recovers PLAINTEXT
const recoveredPlaintext = crypto.privateDecrypt(recipientPrivateKey, ciphertext);
const message = recoveredPlaintext.toString("utf8");
const data = Buffer.from(message);

// RECIPIENT verifies SIGNATURE
const isValid = crypto.verify("sha256", data, senderPublicKey, signature);
console.log("Signature verification:", isValid);
console.log("Message:", message);


