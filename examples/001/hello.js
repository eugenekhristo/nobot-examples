const [name] = process.argv.slice(2);

if (name === undefined) {
  console.error('Please enter a name!');
  process.exit(0);
}

console.log(`Nice to see you, ${name}`);
