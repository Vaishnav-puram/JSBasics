const fruits=new Map([["apples",500],["banana",400],["mango",800]]);

for(obj of fruits.entries()){
    console.log(obj);
}

fruits.set("kiwi",650);
for(obj of fruits.entries()){
    console.log(obj);
}
console.log(fruits.get("apples"));
console.log(fruits.size);
fruits.delete("apples");
console.log(fruits.size);
console.log(fruits.has("apples"));