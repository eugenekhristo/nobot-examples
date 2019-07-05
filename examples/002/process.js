process.stdout.write(`Currently we are in this directory: ${process.cwd()}\n`);
process.stdout.write(`ID of this process is: ${process.pid}\n`);
process.stdout.write(`What's your name?\n`);
process.stdout.write(`My name is: `);

process.stdin.setEncoding('utf8');

// When user typed something and ENTER is pressed
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk !== null) {
    process.stdout.write(`The user wrote: ${chunk}\n`);
    process.exit(0);
  } else {
    process.exit(1);
  }
});

process.on('exit', code => {
  process.stdout.write(`The process now is over with code: ${code}\n`);
  process.stdout.write(
    `It's took ${process.uptime()} seconds to run this script!`
  );
});
