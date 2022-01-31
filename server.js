require('dotenv').config();

const Twilio = require('twilio');
const express = require('express');

const app = express();

const AccessToken = Twilio.jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;

app.get('/token/:identity', (req, res) => {
  const identity = req.params.identity;
  const token = new AccessToken(
    'ACdfacf217824fc0637e5f99bdb5121b38',
    'SKdcd27a176d236d3b6ed161d82048da6e',
    'qsdIbrlRWn1npFq7ddirPm8oM7McL3QU',
  );

  token.identity = identity;
  token.addGrant(
    new ChatGrant({
      serviceSid: 'IS0d664e89ef3244f992f1ed13e21bf920',
    }),
  );

  res.send({
    identity: token.identity,
    jwt: token.toJwt(),
  });
});

app.listen(3001, function () {
  console.log('Programmable Chat server running on port 3001!');
});
