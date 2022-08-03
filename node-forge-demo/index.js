// generate publickKey privateKey
// 生成公钥 私钥
var forge = require("node-forge");

const { rsa, publicKeyToRSAPublicKeyPem, privateKeyToPem } = forge.pki;

rsa.generateKeyPair({ bits: 2048, workers: 2 }, function (err, keypair) {
  if (err) {
    throw new Error(err);
    return;
  }
  console.log(keypair);
  //这里生成了公钥 私钥
  console.log({
    pulicKey: publicKeyToRSAPublicKeyPem(keypair.publicKey, 72).replace(
      /\r/g,
      ""
    ),
    privateKey: privateKeyToPem(keypair.privateKey, 72).replace(/\r/g, ""),
  });
});
