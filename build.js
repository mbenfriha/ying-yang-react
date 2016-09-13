const exec = require('child_process').exec;
const environ = (!process.argv[2].indexOf('development')) ? 'development' : 'production';
let cmdLine = './node_modules/.bin/webpack --progress';
let command;

if (process.platform === 'win32') {
  cmdLine = 'set NODE_ENV=' + environ + '&& ' + cmdLine;
} else {
  cmdLine = 'NODE_ENV=' + environ + ' ' + cmdLine;
}

command = exec(cmdLine);

command.stdout.on('data', data => process.stdout.write(data));
command.stderr.on('data', data => process.stderr.write(data));
command.on('error', err => process.stderr.write(err));
