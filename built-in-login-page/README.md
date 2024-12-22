Built-In Login Page
===================

## Setup

To bring up the stack

```bash
docker compose up -d
```

## Access

Access the service at [http://localhost](http://localhost)

Now you will be redirected to the built-in login page.

Enter the username and password as `admin` and `TopSecret` respectively.

After successful login, you will be redirected to the service.

## Other Endpoints

To know the headers passed to the app - http://localhost/whoami
To Get the user information - http://localhost/auth/userinfo
To Logout - http://localhost/auth/logout


## Cleanup

To bring down the stack

```bash
docker compose down
```
