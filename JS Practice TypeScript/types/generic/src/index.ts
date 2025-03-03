type CreatedPartial<T> = {
    [P in keyof T]?: T[P];
}

interface User {
    name: string;
    age: number;
}

const user: CreatedPartial<User> = { age: 12 };
console.log(user);