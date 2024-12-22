const express = require('express');
const app = express();

app.get('/', (req, res) => {
  var userName = req.header('X-Auth-Request-User') || 'Guest';
  console.log(req.headers);
  userName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
  res.send(`<h1>Welcome ${userName},</h1> <br> This is the protected page. <br> Only authenticated users can access this page.<br> <a href="/whoami">To see headers?</a> <br> <a href="/auth/sign_out">Logout</a>`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
