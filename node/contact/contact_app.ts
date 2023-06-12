import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Nama :", (name:string) => {
  rl.question('Contact :', (number:string)=>{
  console.log(number);
  console.log(name);
  rl.close()
  })
});
