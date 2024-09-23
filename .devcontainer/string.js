//const name = "Dev"
//const repocount = 50 
//console.log(name+repocount) // outdated coding style

//console.log(`my name is ${name} and my repocount is ${repocount}`) // morden syntax 

const GameName = new String('Dev-hv')
console.log(GameName[0]);
console.log(GameName.length)
console.log(GameName.toLocaleUpperCase())
console.log(GameName.charAt(2));
console.log(GameName.indexOf('D'));

const newStr = GameName.substring(0, 2)
console.log(newStr);

const str2 = GameName.slice(-2, -1)
console.log(str2);

const str5 = "  Dev  "
console.log(str5.trim()) // To remove space from input

const url = "https://Dev.com/Debasish%10pujapanda"

console.log(url.replace('%20', '-')) // replace %20 with - 

console.log(url.includes('Dev')) // To check weather it is avalaible in url or not 

console.log(GameName.split('-')) // Convert string into array basis on - 




