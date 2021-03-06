module.exports = {
  apps : [{
    name: "web",
    script: 'npm run build && npm run start',
    watch: '.',
    env_production : {
      "NODE_ENV" : "production"
    }
  },{
    name: "web-dev",
    script: 'npm run dev',
    watch: '.',
    env : {
      "NODE_ENV" : "development"
    }
  }],

  deploy : {
    production : {
      user : 'ec2-user',
      host : 'yoshikouki.net',
      ssh_options : ["StrictHostKeyChecking=no", "PasswordAuthentication=no"],
      key  : '~/.ssh/yoshikouki.net.pem',
      ref  : 'origin/main',
      repo : 'git@github.com:yoshikouki/yoshikouki.net.git',
      path : '/home/ec2-user/yoshikouki.net',
      'pre-setup' : 'which git > /dev/null || sudo yum install git',
      'post-deploy' : 'npm install > /dev/null' +
        '&& (which pm2 > /dev/null || npm install -g pm2) ' +
        '&& pm2 startOrReload ecosystem.config.js --env production',
      env : {
        "NODE_ENV": "production"
      }
    }
  }
};
