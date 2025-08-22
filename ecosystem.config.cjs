module.exports = {
  apps : [{
    name   : "soomoja-app",
    script : "npm",
    args   : "run build:all && npm run start",
    cwd    : "/home/soomoja/htdocs/soomoja.com",
    watch  : false,
    env    : {
      NODE_ENV: "production",
    }
  }]
};