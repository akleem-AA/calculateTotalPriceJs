let obj = [{
    price: "$80.64",
    num:10,
},
{
    price: "$90.64",
    num:"5",
},
{
    price: "$100.64",
    num:"17"
    
}]

//add all prince pass a obj as a argument
let totalPrice = addSubPrice(obj)
console.log("total",totalPrice)

//problem we can add only string like "10" + 20 = 30 but we can not add the sting with special char like $ etc
    
//we need to remove $ sign in upcoming obj

function addSubPrice(data){
   let sum = 0;
  for(let i = 0; i<obj.length; i++){
    sum = sum +getPrice(obj[i].price)
}
return sum;
}

function getPrice(data){
    console.log(data)
    return parseFloat(data.split('$')[1])
}
