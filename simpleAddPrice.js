let obj = [
    {num :10,
    price:"$1.13"
},
    {num :13,
    price:"$1.$1$4"
},
    {num :5,
    price:"$2.1$3"
},
    {num :89,
    price:"$12.122"
},
]
// console.log(obj)
var total = 0
for(var i=0; i<obj.length; i++){
    item = obj[i]
    console.log(item)
    price = item.price
    price = price.slice(1, )
    price = parseFloat(price)
    total += price
}
console.log(total)
