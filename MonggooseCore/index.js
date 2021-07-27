const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/demo', {useUnifiedTopology: true,useNewUrlParser:true})
.then(()=> console.log("connected"))
.catch(err=> console.log('Error', err));

const courseSchema=new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date:{type:Date, default: Date.now},
    isPublished:Boolean
});

const Course = mongoose.model('Course', courseSchema); //uper case means class

//schema and model is manadatory to work with mongoose

//insert document into collection

// async function createCourse() {
//     const course=new Course({
//     name:'react course',
//     author:'jamal',
//     tags:['react', 'frontend'],
//     isPublished:false
// });
// const result=  await course.save();
// console.log(result);
// }
// createCourse();

//query for select
//  async function getCourse() {
//     const course= await Course
//         .find({author: 'jamal', isPublished:true})
//         .limit(10)
//         .sort({name:1})
//         .select({name:1, tags:1});

//     console.log(course);
// }
// getCourse();


//update course by id when we satisfy any businsess login w
// async function updateCourseById(id) {
//     const course=await Course.findById(id);
//     if(!course) return;
//     course.isPublished=true;
//     course.author='jawed';

//     const result = await course.save()
//     console.log(result);
// }

// updateCourseById('603f6a4b6f3d4453f852f352');


//direct update


// async function updateCourse(id) {
//     const result=await Course.updateOne({_id:id},{
//         //use  mongodb update operator 
//         //$inc $min $max $mul $set $unset
//         $set:{
//             author:'hello',
//             isPublished:false
//         }
//     });
//     console.log(result);
// }
// updateCourse('603f6a4b6f3d4453f852f352');

// async function updateCourseBoth(id) {
//     const course=await Course.findByIdAndUpdate(id,{
//         $set:{
//             author:'jamal',
//             isPublished:true
//         }
//     }, {new:true});
//     console.log(course);
// }
// updateCourseBoth('603f6a4b6f3d4453f852f352');

//remove document

async function removeCourse(id) {
    const result = await Course.deleteOne({_id:id})
    //Course.findByIdAndDelete 1st check is there or not if yes then delete
    console.log(result);
}
removeCourse('603f6a4b6f3d4453f852f352')