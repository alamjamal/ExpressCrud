const bioData={
    name:"alam",
    age:26,
    address:"mau"

}
console.log(bioData.name);
const strData=JSON.stringify(bioData)
console.log(strData);
const objData=JSON.parse(strData)
console.log(objData);