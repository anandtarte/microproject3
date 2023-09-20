const data = require('./food.json');
console.log(data);

//task1
function foodItems(abc){
    return abc.map(item=>item.foodname);
}
console.log(foodItems(data));

//task2
function vegetableCat(vegetable){
    return vegetable.filter(item=>item.category==="Vegetable").map(item=>item.foodname);
}
console.log(vegetableCat(data));

//task3
function fruitCat(fruit){
    return fruit.filter(item=>item.category=='Fruit').map(item=>item.foodname);
}
console.log(fruitCat(data));

//task4
function proteinCat(protein){
    return protein.filter(item=>item.category=='Protein').map(item=>item.foodname);
}
console.log(proteinCat(data));

//task5
function nutsCat(nuts){
    return nuts.filter(item=>item.category=='Nuts').map(item=>item.foodname);
}
console.log(nutsCat(data));

//task6
function grainsCat(grains){
    return grains.filter(item=>item.category=='Grains').map(item=>item.foodname);
}
console.log(grainsCat(data));

//task7
function dairyCat(dairy){
    return dairy.filter(item=>item.category=='Dairy').map(item=>item.foodname);
}
console.log(dairyCat(data));

//task8
function calAbove100(cal){
    return cal.filter(item=>item.calorie>100).map(item=>item.foodname);
}
console.log(calAbove100(data));

//task9
function calAbove100(cal){
    return cal.filter(item=>item.calorie<100).map(item=>item.foodname);
    
}
console.log(calAbove100(data));
