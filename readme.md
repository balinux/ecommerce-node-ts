# Learn typescript app

## initial app

```bash
npm init -y
npm i typescript --save-dev
npx tsc --init
npm i @types/node --save-dev
npm i @types/express --save-dev
```

## initialising prisma

```bash
npm i prisma @prisma/client
npx prisma init

```

## migrate prisma model

````bash
╰─ npx prisma migrate dev --name CreateUsersTable

## user signup
```bash
 npm install bcrypt jsonwebtoken
 npm i --save-dev @types/bcrypt
````

## login feature

```bash
npm i --save-dev @types/jsonwebtoken
```

```bash
# test login
http -a email:password POST http://localhost:3000/api/auth/login email=ryo@gmail.com password=rio123
```
