let num = 1 ;
const array = [];
for(i=0; i<10; i++) {
    num += 2;
    if(i == 5){
        continue;
    }
   array.push(num);
}
console.log(array);