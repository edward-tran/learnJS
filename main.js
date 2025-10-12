// var manufactor = "Manufactor"

// var thinkpadT470 = {
//     name: 'ThinkPad T470',
//     yearBuy: 2023,
//     color: 'Black', 
//     [manufactor]: "Lenovo"
// }

// thinkpadT470.weight = '1,4 Kg'
// var nameKey = 'name'


// delete thinkpadT470.Manufactor
// console.log(thinkpadT470);

// var getKeys= function (){
//     var keysArray = []
//     for (var i in thinkpadT470){
//         keysArray.push(i)
//     }
//     return keysArray
// }

// console.log('Keys of Object: ',getKeys());

// var getValues= function (){
//     var keysValue = []
//     for (var i in thinkpadT470){
//         keysValue.push(thinkpadT470[i])
//     }
//     return keysValue
// }

// console.log('Values of Object: ', getValues());

// function User(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.getName = function (){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// var user1 = new User('Edward', 'Tran');
// console.log(user1);
// console.log('Full name: ', user1.getName());

// var arr = [
//     'Javascript', 
//     'Python',
//     'Go'
// ]
// var i = 0 

// while (i < arr.length){
//     console.log(arr[i]);
//     i++;
// }

var courses = [
    {
        id: 1,
        name: 'HTML, CSS',
        price: 100 
    },
    {
        id: 2,
        name: 'Javascript',
        price: 200
    },
    {
        id: 3,
        name: 'NodeJS',
        price: 250
    },
]

// courses.forEach((course, index)=>{
//     console.log(course, index);
// })



// console.log(courses.filter((course, index)=>{
//     return course.id == 2
// }));

// var updatedCourses = courses.map((course, index, originArray)=>{
//     return {
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         price: course.price,
//         coinText: `Gia: ${course.price}`,
//         originArray:originArray
//     }
// })
// console.log(updatedCourses);
var courses = [
    {
        id: 1,
        name: 'HTML, CSS',
        price: 50
    },
    {
        id: 1,
        name: 'Javascript',
        price: 100
    },
    {
        id: 1,
        name: 'ReactJS',
        price: 200
    },
]

var totalPrice = courses.reduce((accumulator, currentValue)=>{
    return accumulator += currentValue.price
},0)

// console.log(`Total price: ${totalPrice}`);

// Flat an array
var depthArray = [1,2,[3,4],5,6,[7,8,9]]

// Get all courses and put into a new array 
var topics = [
    {
        topic: 'Front-end',
        courses: [
            {
                id: 1,
                title: 'HTML, CSS' 
            },
            {
                id: 2,
                title: 'Javascript' 
            }
        ]
    },
    {
        topic: 'Back-end',
        courses: [
            {
                id: 1,
                title: 'PHP' 
            },
            {
                id: 2,
                title: 'NodeJS' 
            }
        ]
    }
]

