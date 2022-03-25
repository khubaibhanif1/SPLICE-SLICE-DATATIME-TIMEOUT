array123=["A","B","C","D","E"]
array=array123.slice(1,2)
console.log(array);

khubaib123=["khubaib", "taha","anas", "hassan"]
khu=khubaib123.splice(1,3)
console.log(khu)


const khubaib421=["khubaib", "taha","anas", "hassan","shuja"]
khubaib421.splice(1,2,"umair","kashan")
console.log(khubaib421)




const date= new Date();
console.log(date);
console.log("Today Day=>" + date.getDate());
console.log("Today Month=>" + date.getMonth());
console.log("Today year=>" + date.getFullYear());
console.log("Today seconds=>" + date.getSeconds());
console.log("Today Minutes=>" + date.getMinutes());
console.log("Today Hour=>" + date.getHours());


function one(){
    console.log("this is khubaib")
    
}

function two(){
    setTimeout(function(){
        console.log("this is taha")
        

    },2000)
   
}

function three(){
    console.log("this is anas")
}

one()
two()
three()