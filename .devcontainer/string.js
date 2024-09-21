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