var arr = [];

var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

for(i=1; i<=10; i++){
    document.write(i + "<br>");
}

var tableNumber = +prompt("Enter a number to show its multiplication table");
var tableLength = +prompt("Enter length multiplication table");
document.write("Multiplication table of " + tableNumber + "<br>");
document.write("Length " + tableLength + "<br>");
for(i=1; i<=tableLength; i++){
    document.write(tableNumber + " X " + i + " = " + tableNumber*i + "<br>");
}

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(i=0; i<fruits.length; i++){
    document.write(fruits[i] + "<br>");
}
for(j=0; j<fruits.length; j++){
    document.write("Element at index " + j + " is " + fruits[i] + "<br>");
}

document.write("<h4>" + "Counting" + "</h4> " + "<br>")
for(i=1; i<=15; i++){
    document.write(i + ", ");
}
document.write("<h4>" + "Reverse Counting" + "</h4>")
for(i=10; i>0; i--){
    document.write(i + ", ");
}
document.write("<h4>" + "Even" + "</h4>")
for(i=0; i<=20; i=i+2){
    document.write(i + ", ");
}
document.write("<h4>" + "Odd" + "</h4>")
for(i=1; i<=20; i=i+2){
    document.write(i + ", ");
}
document.write("<h4>" + "Series" + "</h4>" )
for(i=2; i<=20; i=i+2){
    document.write(i + "k, "  ) ; 
}

var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var check = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
for(i = 0; i <arr.length; i++){
    if(check === arr[i]){
        document.write(arr[i] + " is available at index " + i + " in our bakery");
        break;
    }
    else{
        document.write("We are sorry." + check + " is not avaible in our bakery");
        break;
    }
}

var arr = [24, 53, 78, 91, 12];
var largestNumber = arr[0];
for(i = 0; i < arr.length; i++){
    if(arr[i] > largestNumber){
        largestNumber = arr[i];
    }
}
document.write("Array items: " + arr + "<br>");
document.write("The largest number is " + largestNumber);

var arr = [24, 53, 78, 91, 12];
var smallestNumber = arr[0];
for(i = 0; i < arr.length; i++){
    if(arr[i] < smallestNumber){
        smallestNumber = arr[i];
    }
}
document.write("Array items: " + arr + "<br>");
document.write("The smallest number is " + smallestNumber);

for(i=5; i<=100; i=i+5){
    document.write(i + ", ");
}
