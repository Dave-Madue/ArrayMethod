const users = [
  { id: 1, name: "John", age: 17 },
  { id: 2, name: "Jane", age: 22 },
  { id: 3, name: "Mike", age: 19 }
];

const age = users.filter(user => user.age > 18).map(user => user.name);
console.log(age)


const names = users.map(user => user.name)
console.log(names)

for (const num of users) {
    if (num.age > 17) {
        console.log("You are an adult")
        return num.age
    }

}

const fin = users.find(user => user.id == 2);
console.log(fin)