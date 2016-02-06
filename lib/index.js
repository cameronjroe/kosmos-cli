import fs from 'fs'
import path from 'path'
import log from 'verbalize'
import vorpal from 'vorpal'
let program = vorpal();
// import program from 'commander'
// import argv from 'minimist'

export default function () {
  program
    .command('foo', 'outputs bar')
    .action(function (args, cb) {
      this.log('bar');
      cb();
    });
    
  program
    .delimiter('myapp$')
    .show();
}

// program
//   .version('0.1.0')
//   .arguments('<file>')
//   .action((file) => {
//     console.log(program.test);
//   })
//   .parse(process.argv);

// argv(process.argv.slice(2));

// // Verbalize `runner`
// log.runner = 'kosmos-cli';

// // Use `-f` or `--file` to specify the source file
// var file  = argv._[0] || argv.f || argv.file || 'TODO.md';

// // Use `-t` or `--task` to specify the text to append
// var task = argv._[1] || argv.t || argv.task;


// if (!file) {
//   log.error('Please provide a source file, either as a first argument or with `-s`');
// }

// if (!task) {
//   log.error('No tasks will be appended to "' + file + '" since you didn\'t specify anything.');
// }


// /**
//  * Application
//  */
// if(!fs.existsSync(file)) {
//   fs.writeFileSync(file, '# Tasks\n\n');
// }

// fs.appendFile(file, ('- [ ] ' + task + '\n'), function (err) {
//   if (err) {throw err;}

//   log.writeln();
//   log.writeln(log.gray('  todo [appended] ') + '\'' + task + '\' to ' + log.bold(file));

//   // If all is well, log a success message.
//   log.success('  ' + log.runner + ' [done]');
// });
