let cars=new Set();
cars.add("BMW");
cars.add("BENZ");
cars.add("AUDI");
cars.add("AUDI");

for(obj of cars.values()){
    console.log(obj);
}

cars.delete("AUDI");
for(obj of cars.values()){
    console.log(obj);
}

console.log(cars.has("AUDI"));

console.log(cars.size);