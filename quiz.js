// Assuming you have already done "npm install fernet"
let fernet = require('./fernet');
let secret = new fernet.Secret('TluxwB3fV_GWuLkR1_BzGs1Zk90TYAuhNMZP_0q4WyM=');

// Oh no! The code is going over the edge! What are you going to do?
let message = 'gAAAAABcPQXBvW7LhSAODeGl22OL_s2UDjT1Rv2Z2EpCQWsbQ20UEVKF6TAzcEAlREFWM5NHLx0mLS_azYDfS98F6Mt4pzO-PIMdBMaq7IErqXyrsimybvvv6VRFsW_99pFIvDvFyiTex9aoFMTl8wJYIjEVqk3Iwts40BNDqoDDne9n-2Mp-PasEinUrPDEbuT2alR_XOr6';
let token = new fernet.Token({secret: secret, token: message, ttl:0});
token.decode();
