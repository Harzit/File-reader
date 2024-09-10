const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('string-util')
  .description('CLI to do some file based tsaks')
  .version('0.8.0');

program.command('count')
  .description('Count the number of words')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err,data)=> {
        if(err){
            console.log(err);
        }else {
            const lines = data.split("\n").length;
            console.log(`There are ${lines} lines in ${file}`);
        }   
    });
  });

program.parse();