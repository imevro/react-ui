const os = require('os');
const exec = require('child_process').exec;
const env = process.env.NODE_ENV;

const buildCmd = 'babel src --out-dir lib';

if (os.type() === 'Windows_NT') {
  exec('set ' + env + '&&' + buildCmd);
} else {
  exec(env + ' ' + buildCmd);
}
