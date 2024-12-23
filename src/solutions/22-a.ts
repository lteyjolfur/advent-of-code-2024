import assert from 'assert';

import { readFileSync } from 'fs';
import readline from 'readline';

const input = readFileSync('./input.txt','utf-8');

/*
mult 64
mix
prune
divide/32
math.floor
prune
mult 2048
mix
prune

*/

const input_test = `1
10
100
2024`;

const initNums = input.split('\n').map(n=>BigInt(n));

const mix = (secretNumber:bigint,value:bigint) => (secretNumber^value);
assert(mix(42n,15n)===37n);
const prune = (secretNumber:bigint):bigint => (secretNumber%16777216n);
assert(prune(100000000n) === 16113920n);

const nextPrice = (n:bigint) => {
	const a = prune(mix(n,n*64n));
	const b = prune(mix(a,a/32n));
	return 	prune(mix(b,b*2048n));
};
assert(nextPrice(123n)===15887950n);

const calculateNumbers = (init:bigint[],amount:number) => {
	const prices:bigint[][] = [];

	for (const num of init){
		let secret = num;
		const secrets = Array.from({length:amount}, () => {
			const res = nextPrice(secret);
			secret = res;
			return res;
		});
		prices.push(secrets);
	}
	return prices;
};

const calculateNumbersArrayLess = (init:bigint[],amount:number) => {
	const prices:bigint[] = [];

	for (const num of init){
		let secret = num;
		for(let i = 0; i< amount; i++){
			secret = nextPrice(secret);
		}
		prices.push(secret);
	}
	return prices;
};
    

assert.deepStrictEqual(calculateNumbers([123n],10).flat(), 
	[15887950n,
		16495136n,
		527345n,
		704524n,
		1553684n,
		12683156n,
		11100544n,
		12249484n,
		7753432n,
		5908254n]);

console.log(calculateNumbersArrayLess(initNums,2000).reduce((acc,cur)=>acc+cur));