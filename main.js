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

console.log(`Total price: ${totalPrice}`);

// Flat: Lam phang mang 
var depthArray = [1,2,[3,4],5,6,[7,8,9]]

// Lay ra cac khoa hoc va dua vao 1 mang moi 
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