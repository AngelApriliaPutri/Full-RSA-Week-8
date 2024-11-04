const crypto = require("crypto");

/**
 * First of all, the SENDER obtains the RECIPIENT PUBLIC KEY.
 */
const senderPrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCkb5NN7IGL88Yy
ykuj7NZdLxyttnroRgWvgCp1wjnXMpcRzdQT8KMs1KGywRf6DU8hgQrB2EtyDGjn
ln+WcsFrd6dktzFZbIJYY05kFiJ6tpKG6Lfjgl16DeMpeJr9uc+L2GosBVQ0Qw08
LXhxc5+OkA8Bqckc+Ic9CtXySbnxiM8GzjO/s6mExhpqYBF8bZCWfl8/8XZ9vHVQ
/y8mjPIPmXzG4jO/PO3mM982I9jg/8Ix2XltewNNxBfuWYssCKywC+B0HVyWjfs/
5o3hMwNpQ/akko3M4CdYjIl2L5yU8CoEuNDheXK9ua1gR18d3lSENlWaRq5itsCH
nicoSCCPAgMBAAECggEAOYTP7Z+PtzFYAJczu00StPjQWtFsj8hCn9/Aun1styJ6
pp8tkqYHphxgzYLuzKiQKAOYDDOJPIUrwuqpiaptjxaFRt0v1Xx34cwm9Sqq9+ra
OXe5L0uAQDwQXIbUDHHNMDlM9kYM7NURkZ3ENkdAJmGs5iOKdmhXAhrCuORiNyLX
0rkFE9bTSXAf0IZqDw632m2VId8NGAFFyUM+2TyP7rX+8xy1DZNhMahEI4wG9suy
V9dfC5YGCSzhmB+uP6hKs/qOguqn9wy+tOlyaCUafghgaFdeFvPhaAxv6iAP5xxM
lrfstnsH+K+YtyjM/YGfql0QeENMnCqvgMLdclbE0QKBgQDnrfTbBxDwm0Yn6wea
R/j/bozZXy7iGp/DGwduayPLGNI7+kOCvHu6/rZva3aJnf61ScTKBMbLPsidYAfZ
zWtzAhmLJgd2Q0YVI+49ChWkT36BJ/8pMDW3ayc9d4zlCF95agqnTT/8qILcFXAb
eBHlaXsD6EKQdM9YjdjUC6M4sQKBgQC1sot7DOot20YfCSUaBumwP8kxPM2DOnFq
6JXG8l7e+lSMbV5RIH+9a6Le/Xf5t9w/ajbQJsGF8PGcDqGq2vtK+WqgEDwXrQz+
w7Kvdq/QsNjHVscUpurg5PjMPKK0nDavu6U6wUrILk+4pMqnqYs6OQlhA1IXsV//
aFlMJws9PwKBgEEbGJEoljEXYYq8OKG5khauCXTYk8NEehsJEHiOMTvU2Ne0B57I
uvictcXv7BrWRIrLlTq0Ru080oGvR+WEHarvLyB0ampok1xDgaKzn8tR75n6FHGN
s7q8qQVUAEsopDPpgd7sDYxCCqwwdhWyE01l7AT4EySnPtGC4ykLsC2xAoGBAIV3
HVXJ6sq8YwmxIfu4UDgS4qq0SxG2AFHTfxGgP2fy4eA1Bi75fFubkQvTjCl2kOZU
EudbUJQepJtJdB+YszYjd9sTkdCiYQVSoxKYUBUvkkz6xUm6QpXoG4mKkMmyZck4
QOqjyVa6Df1Hr0TxGUAvXWBRnB+jPyzRbaaul2bpAoGBAIIqRkk++5a3scCGORtp
8juMFhxNZSv29ALiI2B5rz1H0k3NAshRUgp5JRfQ2EfrIdP/UtF/CtDMmVeIMYkS
hCVA5FWx2xtPHiM16071Vf5LeOHjPX7NUfXBajFwIdCKkfKQ5LIZnGVJWz55E0uT
75mHFfjBlms3LXDSnxL/sbp6
-----END PRIVATE KEY-----`;
const senderPrivateKey = crypto.createPrivateKey(senderPrivateKeyPem);

const recipientPublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsBTrQlhIVhZ68DIVtxgp
wPx0jeR9Shg4vHdOp8Lukticd5UvB+LN5buEwrrxxBftA140zsxqtCcYxpmyIgMR
OA2otjiTIr9N+BYtNSXi0JKDPUMpfpJqmTQhIEGghpcMJOijc3+jKLCUSuaC4ZjY
D3NcYIhGDeFhPftZegpz+lrX/Z6ROC5Toez6qBn00djmafaA9vl2wwefEhlSBkHu
cOkuDcJwn/Y3b8RD0x+fyHs1r1+HbXrdG15mFSgxRGnxpH4iM7Jj9sPir2CdjTtw
m2dlGjaX5LbA/wp71xsMYnTWY080O3iuzP0ju9VBcs8+Go2rdHPWvFps1vBKAS7C
4QIDAQAB
-----END PUBLIC KEY-----`;
const recipientPublicKey = crypto.createPublicKey(recipientPublicKeyPem);

const message = "I want some apples";

// SENDER generate CIPHERTEXT
const data = Buffer.from(message);
const signature = crypto.sign("sha256", data, senderPrivateKey);
console.log("Signature:", signature.toString("hex"));
const ciphertext = crypto.publicEncrypt(recipientPublicKey, data);
console.log("Message:", ciphertext.toString("hex"));