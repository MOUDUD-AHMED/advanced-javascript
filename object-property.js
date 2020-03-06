const students = [
    {id:21, name:"Abdhullah", phone:454545},
    {id:31, name:"Niloy", phone:454545},
    {id:41, name:"Siam", phone:454545},
    {id:51, name:"Saju", phone:454545}
];

const output = students.map(x => x.name);
const output2 =students.filter(x => x.id > 25)
const output3 =students.find(x => x.id > 25)
console.log(output3);