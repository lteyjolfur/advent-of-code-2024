import { readFileSync } from 'fs';

const input = readFileSync('./input.txt','utf-8');

const locks:number[][] = [];
const keys:number[][] = [];

input.split('\n\n').forEach((string)=>{
	const object = Array.from({length:5},()=>-1);
	const isKey = string[0] === '.';
	string.split('\n').forEach((row)=>row.split('').forEach(((c,i)=>{
		object[i]+= Number(c==='#');
	})) 
	);
	isKey?keys.push(object):locks.push(object);
});

let fits = 0;
keys.forEach(key=>{
	locks.forEach((lock)=>{
		lock.every((t,i)=>{
			const res = t+key[i]<6;
			return res;
		}) && fits++;
	});
});

console.log(fits);