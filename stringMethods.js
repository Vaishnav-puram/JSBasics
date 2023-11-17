let str="Hello vaishnav!";
console.log(str.length);
console.log(str.substring(0,2));
console.log(str.slice(0,2));
console.log(str.substr(-4));
let str1=str.replace(/hello/i,"bye");
console.log(str1);
console.log(str.toLowerCase());
console.log(str.toUpperCase());

let text = "I love cats. Cats are very easy to love. Cats are very popular";
let str2=text.replaceAll(/cats/g,"dogs");
str2=str2.replaceAll(/Cats/g,"Dogs");
console.log(str2);

let str3="      Hello world        ";
console.log(str3.trim().length);
console.log(str3.trimStart().length);
console.log(str3.trimEnd().length);
let str4="7";
console.log(str4.padStart(3,0));
console.log(str4.padEnd(3,'x'));
const arr=str.split(" ");
console.log(arr[0]);
console.log(str.charAt(0));
console.log(str.charCodeAt(0));
let str5="Hello";
let str6="world";
console.log(str5.concat(" ",str6));