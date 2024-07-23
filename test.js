let data=[{'count': 100,'date': '23/7/2024'},
    {'count': 5000,'date': '23/7/2024'}

]
console.log(data[0].count)
data.forEach(x=>console.log(x.count))
for(let x=0;x<=data.length;x++){
    data.pop();
}
console.log(data.length)
console.log(data)
let new_data=new Array(5)
new_data.push(1);
new_data.push(1);
new_data.push(1);
new_data.push(1);
new_data.push(1);
new_data.push(1);
new_data.push(1);
console.log(typeof new_data)
let a="22"
console.log(a=="")