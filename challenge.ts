interface User{
  name?: string;
  age?: number;
  birthday?: string;
}

const prettyPrintWilder = (users: User[]) => users.map((user: User) => {
  if (user.age) {
    console.log('${user.name} is ${user.age} years old');
  }
  if (user.birthday) {
    console.log('${user.name} is ${user.birthday');
  } }); 

   
const user1: User = { name: "Pierre", age: 23 };
const user2: User = { name: "Paul", birthday: "10/02/1990" };
const user3 : User = { name: "Jacques", age: 25 };
const wilders = [{}];
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);