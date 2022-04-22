
const add = (a,b) => {
  return a+b;
}

const sub = (a,b)=>{
    return a-b;
}

const name='alam'
// module.exports = add //for single export
// module.exports.add = add;
// module.exports.sub = sub;
// we can use object destructering
module.exports={add,sub, name}