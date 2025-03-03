function getKeysOfArray<T extends object>(obj: T): (keyof T)[] {
    return Object.keys(obj) as (keyof T)[];
}

interface Item {
    shape: string;
    size: string;
    color: string;
}

const item1: Item = {shape: 'oval', size: 'large', color: 'black'}

console.log(getKeysOfArray(item1));