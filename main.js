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
        id: 2,
        name: 'NodeJS',
        price: 250
    },
]

// courses.forEach((course, index)=>{
//     console.log(course, index);
// })



// console.log(courses.filter((course, index)=>{
//     return course.id == 4
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
// var courses = [
//     {
//         id: 1,
//         name: 'HTML, CSS',
//         price: 50
//     },
//     {
//         id: 1,
//         name: 'Javascript',
//         price: 100
//     },
//     {
//         id: 1,
//         name: 'ReactJS',
//         price: 200
//     },
// ]

// var totalPrice = courses.reduce((accumulator, currentValue)=>{
//     return accumulator += currentValue.price
// },0)

// console.log(`Total price: ${totalPrice}`);

// Flat an array
// var depthArray = [1,2,[3,4],5,6,[7,8,9]]
// var flatArray = depthArray.reduce((flatItem, depthItem, depthIndex)=>{
//     return flatItem.concat(depthItem)
// }, [])

// console.log('The flat array; ',flatArray);


// Get all courses and put into a new array 
// var topics = [
//     {
//         topic: 'Front-end',
//         courses: [
//             {
//                 id: 1,
//                 title: 'HTML, CSS' 
//             },
//             {
//                 id: 2,
//                 title: 'Javascript' 
//             }
//         ]
//     },
//     {
//         topic: 'Back-end',
//         courses: [
//             {
//                 id: 1,
//                 title: 'PHP' 
//             },
//             {
//                 id: 2,
//                 title: 'NodeJS' 
//             }
//         ]
//     }
// ]


// var courses = topics.reduce((courseArray, topicsItem)=>{
//     return courseArray.concat(topicsItem.courses)
// },[])

// console.log('The new course: ',courses.map((course)=>{
//     return course
// }))


// var str = 'Learn Javascript in 2025'
// console.log(str.includes('learn'));

// var course = ['PHP', 'Java']
// console.log(course.includes('Java', -4));

// var courseArray = courses.map((course, index)=>{
//    return '<h2>${courseArray.name}</h2>'
// })
// var htmls= courseArray.join(' ')
// console.log(htmls);

Array.prototype.map2 = function(callBack){
    var arrayLength = this.length
    var returnValue = []
    for (var i = 0; i < arrayLength; i++){
        var result = callBack(this[i], i)
        returnValue.push(result)
    }
    return returnValue
}

// var map2Result = courses.map2((course, index)=>{
    
// })  

// var mapResult = courses.map((course, index)=>{
// })

// console.log(map2Result, mapResult);

//Homework
// forEach2(), filter2(), find2(), some2(), every2(), reduce2()

//forEach2()
// Array.prototype.forEach2 = function(callBack){
//     if (typeof callBack !== 'function'){
//         throw new TypeError(callBack + ' is not a function!')
//     }
//     var arrayLength = this.length
//     for (var index = 0; index < arrayLength; index++){
//         callBack(this[index], index, this)
//     }
// }

// courses.forEach2((course, index, originArray)=>{
//     console.log(course, index, originArray);
// });

//filter2()
Array.prototype.filter2 = function(callBack){
    var returnValue = []
    var arrayLength = this.length
    for (var index = 0; index < arrayLength; index++){
        var callbackReturnValue = callBack(this[index], index, this)
        if (callbackReturnValue){
            returnValue.push(this[index])
        }
    }
    return returnValue
}

console.log(courses.filter2((course, index)=>{
    return course
}));

