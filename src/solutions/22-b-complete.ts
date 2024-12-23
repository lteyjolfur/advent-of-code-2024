import assert from 'assert';

import { readFileSync,writeFileSync } from 'fs';
import readline from 'readline';


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

const input_basic = `1
10
100
2024`;

const input_r = `1
2
3
2024`;

const input = readFileSync('./input.txt','utf-8');
const initNums = input.split('\n').map(n=>BigInt(n));

const mix = (secretNumber:bigint,value:bigint) => (secretNumber^value);

const prune = (secretNumber:bigint):bigint => (secretNumber%16777216n);

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
		const secrets = Array.from({length:amount-1}, () => {
			const res = nextPrice(secret);
			secret = res;
			return res;
		});
		prices.push(secrets);
	}
	return prices;
};  

const getValidPatterns = (diffs:number[],digits:number[]) => {
	const validPatterns:Map<string,number> = new Map();
	diffs.forEach((_,j)=>{
		if (j>2){
			const key = JSON.stringify(diffs.slice(j-3,j+1));
			if(!validPatterns.has(key)){
				validPatterns.set(key,digits[j]);
			}	
		}
	});
	return validPatterns;
};

const calculateDigits = (init:bigint[],amount:number) => {
	const digits = calculateNumbers(init,amount).map(row=>row.map(n=>Number(n%10n)));
	const diffs = digits.map((row,i)=>row.map((d,j)=>d-(row[j-1]??Number(init[i])%10)));
	//const validPatterns:Record<string,number>;
	const validPatternsArr = diffs.map((_,i)=>getValidPatterns(diffs[i],digits[i]));
	const validKeys = new Set(...validPatternsArr.map(map=>map.keys()));
	let best = 0;
	let bestKey = '';
	validKeys.forEach(key=>{
		const result = validPatternsArr.map(map=>map.get(key)||0).reduce((acc,cur)=>acc+cur);
		if (result > best) {
			best = result;
			bestKey = key;
		}
	});
	console.log(digits);
	//console.log(diffs);
	console.log(validPatternsArr);
	console.log(best);
	console.log(bestKey);
	console.log(validPatternsArr.map(map=>map.get(bestKey)||0));

};

console.log(calculateDigits(initNums,2001));

assert.deepStrictEqual(calculateNumbers([123n],11).flat(), 
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

assert(prune(100000000n) === 16113920n);
assert(mix(42n,15n)===37n);

//console.log(calculateNumbers(initNums,2000));//.reduce((acc,cur)=>acc+cur));
//console.log(calculateDigits([123n],10));
//writeFileSync('22-b-last-digit.txt',calculateNumbers([123n],2000).flat().map(n=>n%10n).join(','));


// high 2253
// low 2242
// low 2247
// 2250 :)