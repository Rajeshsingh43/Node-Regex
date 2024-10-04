const jsonString='{"name": "rajesh", "age":"30", "city":"jaipur"}';
const jsonObject=JSON.parse(jsonString);
console.log(jsonObject.name);
console.log(jsonObject.age);