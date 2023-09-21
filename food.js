const data = require('./food.json');
//console.log(data);

//task1
function foodItems(abc){
    return abc.forEach(item=>console.log(item));
}
console.log("solution for task 1");
console.log(foodItems(data));

//task2
function vegetableCat(vegetable){
    return vegetable.filter(item=>item.category==="Vegetable").forEach(item=>console.log(item));
}
console.log("solution for task 2");
console.log(vegetableCat(data));

//task3
function fruitCat(fruit){
    return fruit.filter(item=>item.category=='Fruit').forEach(item=>console.log(item));
}
console.log("solution for task 3");
console.log(fruitCat(data));

//task4
function proteinCat(protein){
    return protein.filter(item=>item.category=='Protein').forEach(item=>console.log(item));
}
console.log("solution for task 4");
console.log(proteinCat(data));

//task5
function nutsCat(nuts){
    return nuts.filter(item=>item.category=='Nuts').forEach(item=>console.log(item));
}
console.log("solution for task 5");
console.log(nutsCat(data));

//task6
function grainsCat(grains){
    return grains.filter(item=>item.category=='Grain').forEach(item=>console.log(item));
}
console.log("solution for task 6");
console.log(grainsCat(data));

//task7
function dairyCat(dairy){
    return dairy.filter(item=>item.category=='Dairy').forEach(item=>console.log(item));
}
console.log("solution for task 7");
console.log(dairyCat(data));

//task8
function calAbove100(cal){
    return cal.filter(item=>item.calorie>100).forEach(item=>console.log(item));
}
console.log("solution for task 8");
console.log(calAbove100(data));

//task9
function calbelow100(cal){
    return cal.filter(item=>item.calorie<100).forEach(item=>console.log(item)); 
}
console.log("solution for task 9");
console.log(calbelow100(data));


//task10
console.log("solution for task 10");
data.sort((a,b)=>b.protiens-a.protiens);
data.forEach((item)=>{console.log(item)});


//task11
console.log("soluion for task 11");
data.sort((a,b)=>a.calorie-b.calorie);
data.forEach((item)=>console.log(item));