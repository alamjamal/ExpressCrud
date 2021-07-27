const express=require('express');
const router=express.Router();
const Joi=require('joi');
const courses=[
    {id:1, name:"java", year:2018},
    {id:2, name:"c", year:2017},
    {id:3, name:"c++", year:2018},
    {id:4, name:"python", year:2020},
];

function myValidate(data) {  
    const schema=Joi.object({
        name:Joi.string().min(3).required(),
        year:Joi.number().min(2000).max(2040).required()
    });
    return schema.validate(data);
}

//show all value
router.get('/', (req,res)=>{
res.send(courses);
});
//get value by id
router.get('/:id', (req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('not found');
    res.send(course);
});

//insert value
router.post('/', (req,res)=>{
    // if(!req.body.course  || req.body.course.length<3){
    //     res.status(404).send("name must be valid");
    //     return;
    // }
const result = myValidate(req.body);
if(result.error) return res.status(404).send(result.error.details[0].message);
course={
    id:courses.length+1,
    name: req.body.name,
    year:req.body.year,
};
console.log(course);
courses.push(course);
res.send(course);
});

//update course
router.put('/:id', (req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('not found');
 
    const result = myValidate(req.body);
    if(result.error) return res.status(404).send(result.error.details[0].message);

    course.name=req.body.name;
    course.year=req.body.year;
    console.log(course.name);
    res.send(course);
});

router.delete('/:id',(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('not found');

    const index=courses.indexOf(course);
    courses.splice(index,1);
    res.send('succcess');

});

module.exports=router;