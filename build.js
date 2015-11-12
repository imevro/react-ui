const os = require('os');
const exec = require('child_process').exec;

var env = 'NODE_ENV=production'
var buildCmd = 'babel src --out-dir lib';
if (os.type() === 'Windows_NT') {
  buildCmd = 'set ' + env + '&&' + buildCmd;
} else {
  buildCmd = env + ' ' + buildCmd;
}
exec(buildCmd);

