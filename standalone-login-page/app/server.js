const express = require('express');
const app = express();

app.get('/', (req, res) => {
  var userName = req.header('X-Auth-Request-User') || 'Guest';
  console.log(req.headers);
  userName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
  res.send(`
    <h1>Welcome ${userName},</h1>
    <br> This is the protected page.
    <br> Only authenticated users can access this page.
    <br> <a href="/whoami">To see headers?</a>
    <br> <a href="/auth/sign_out">Logout</a>
    `);
});

app.get('/login', (req, res) => {
  res.send(`
    <head>
      <title>Login Page</title>
      <link rel="stylesheet" href="/static/styles.css">
    </head>
    <h1>Login Page</h1>
    <form action="/auth/sign_in" method="post">
      <input type="hidden" name="rd" value="/">
      <label for="username">Username:</label><br>
      <input type="text" id="username" name="username"><br><br>
      <label for="password">Password:</label><br>
      <input type="password" id="password" name="password"><br><br>
      <input type="submit" value="Login">
    </form>
    `);
});

// Expose static files
app.use(express.static('/app'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
