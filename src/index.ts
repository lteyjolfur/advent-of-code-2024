const input_basic = `Register A: 729
Register B: 0
Register C: 0

Program: 0,1,5,4,3,0`;

const input = `Register A: 61156655
Register B: 0
Register C: 0

Program: 2,4,1,5,7,5,4,3,1,6,0,3,5,5,3,0`;

const input_2=`Register A: 2024
Register B: 0
Register C: 0

Program: 0,3,5,4,3,0`;


const [rawRegister,rawProgram] = input.split('\n\n');

const register:bigint[] = Array(3).fill(BigInt(0));
let program:number[] = [];

const setRegister = (i:number,v:number) => register[i] = BigInt(v);


//console.log(rawRegister,rawProgram);
rawRegister.split('\n').forEach((row,i)=>{
	setRegister(i,Number(row.match(/\d+/)));
});
program = rawProgram.split(' ')[1].split(',').map(c=>Number(c));
console.log(register);
console.log(program);



const  realModulo = (a:bigint, bn:number) => {
	const b = BigInt(bn);
	return ((a % b) + b) % b;
};



// const opNames = [
// 	'adv','bxl','bst','jnz','bxc','out','bdv','cdv'
// ];



//const runProgram = () => console.log(program.map(({op,val})=>operate(op,val)).filter(o=>o!== undefined).join(','));
const runProgram = () => {
	const output:number[] = [];
	while(pointer<program.length){
		//console.log(pointer);
		const op = program[pointer];
		const val = program[pointer+1];
		const out = operate(op,val);
		if (out!==undefined){
			// console.log(output);
			// console.log(program);
			// console.log('out',out);
			if(program[output.length] === out){
				output.push(Number(out));	
				
			} else {
				break;
			}			
		}
		pointer +=2;
	}
	//console.log(output.join());
	return output.join();
};

const runProgramA = (isDebug=false) => {
	const output:number[] = [];
	while(pointer<program.length){
		const op = program[pointer];
		const val = program[pointer+1];
		const out = operate(op,val);
		if (out!==undefined){
			output.push(Number(out));
		}
		pointer +=2;

	}
	console.log(output.join());
	return output.join();
};


let pointer = 0;

const reset = (t='RESET') => {
	console.log(`---- ${t} ----`);
	resetRegisters();
	program = [];
	pointer = 0;
};

const resetRegisters = () => {
	for ( const i in register){
		register[i] = BigInt(0);
	}
};

const combo = (op:bigint) => {
	switch(op){
	case 0n:
	case 1n:
	case 2n:
	case 3n:
		return op;
	case 4n:
		return register[0];
	case 5n:
		return register[1];
	case 6n:
		return register[2];
	default:
		throw 'invalid combo';
	}

};



const operate = (a:number,b:number|bigint):(number|void) => opcodes[a](BigInt(b));

const xdv = (op:bigint) => register[0] >> combo(op);

const opcodes = [
	(op:bigint) => {register[0] = xdv(op);}, // adv
	(op:bigint) => {register[1] = register[1] ^ op;},//adv
	(op:bigint) => {register[1] = realModulo(combo(op),8);}, 
	(op:bigint) => {
		if(register[0] > 0n){
			pointer = Number(op) -2;
		}},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	(_op:bigint) => {register[1] = register[1] ^ register[2];}, //bxs
	(op:bigint) => Number(realModulo(combo(op),8)), // out
	(op:bigint) => {register[1] = xdv(op);}, //bdv
	(op:bigint) => {register[2] = xdv(op);}, //cdv


];


const testOp2 = () => {
	console.log('test2');
	register[0] = BigInt(16);
	console.log(register[0]>0);

	opcodes[2](BigInt(2));
	console.log(pointer);
	register[0] = BigInt(0);
	console.log(register[0]>0);
	console.log(opcodes[2](BigInt(2)));
};
//test2();

const tests = () => {
	// reset('0');
	// setRegister(2,9);
	// operate(2,6);
	// console.log('register[1] === 1n');
	// console.log(register[1] === 1n);
	// //1
	// reset('1');
	// setRegister(0,10);
	// program = [5,0,5,1,5,4];
	// runProgramA();
	// console.log('program = 0,1,2');
	// //
	// reset('2');
	// setRegister(0,2024);
	// program = [0,1,5,4,3,0];
	// runProgramA();
	// console.log('program = 4,2,5,6,7,7,7,7,3,1,0');
	// console.log('register[0] === 0n');
	// console.log(register[0] === 0n);
	// reset('3');
	// setRegister(1,29);
	// program=[1,7];
	// runProgramA();
	// console.log('register[1]===26n');
	// console.log(register[1]===26n);
	// //
	// reset('4');
	// setRegister(1,2024),
	// setRegister(2,43690),
	// program=[4,0];
	// runProgramA();
	// console.log('register[1]===44354n');
	// console.log(register[1]===44354n);
	// //
	reset('bst 2 4');
	for(let i = 0; i< 8; i++){
		reset();
		setRegister(0,i);
		console.log(register);
		operate(2,4);
		operate(1,5);
		console.log(register);
	}
	
};

//tests();

type CB = {
	c:number,
	b:number
}

const tSP = (n:bigint|number) => n.toString(2).padStart(3,'0'); 
const solutions: { [key: number]: string[] } = {0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[]};
const numSols: { [key: number]: CB[] } = {0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[]};

for(let b = 0; b<8;b++){
	for (let c=0;c<8;c++){
		const res = (((b^5)^c)^6);
		console.log(tSP(b),tSP(c), res);
		solutions[Number(res)].push(`b:${tSP(b)} c:${tSP(c)}`);
		numSols[Number(res)].push({c,b});

	}
}

console.debug(solutions); 
console.debug(numSols);

const valid12:CB[][][] = Array(program.length).fill([]);


// const valid =numSols[2].filter(sol=>{
// 	const c1 = sol.c;
// 	const isFound = false;
// 	console.log(sol);
// 	for (const sol2 of numSols[4]){
// 		const b2 = sol2.b;
		
// 		if(b2>>2n===c1%2n){
// 			valid12[0].push([sol,sol2]);
// 			//return true;
// 		}

// 	}
// 	return isFound;
// });

console.log(numSols[2]);

const winningIndexes:bigint[] = [];


class Crawler {
	history:CB[];
	index: number;
	//solutions: CB[];
	solution: CB[];
	nextSolutions?: CB;

	constructor(index:number,solution:CB[],history:CB[],nextSolutions?:CB){
		this.index = index;
		this.history = [...JSON.parse(JSON.stringify(history)),solution[0]];
		//this.solutions = numSols[index];
		this.solution = solution;
		this.nextSolutions = nextSolutions;
	}

	convert(n:number) {
		return n.toString(2).padStart(3,'0').split('').map(c=>Number(c));
	}

	toScore(completeHistory:CB[]){
		let score = completeHistory.reduce((acc:bigint, cb:CB):bigint => {
			return (acc << 3n) + BigInt(cb.c);
		}, 0n);
		const lastItem = completeHistory.at(-1);
		if (lastItem !== undefined) {
			score = (score << 5n) + BigInt(lastItem.b);
		}
		winningIndexes.push(score);
	}

	printHistory(history= this.history){
		console.log(history.map(cb=>`${tSP(cb.c)}`).join(''));
		console.log('     '+history.map(cb=>`${tSP(cb.b)}`).join(''));
	}


	crawl(){
		//console.log('crawl');	
		const nextSolutions:CB[][] = [];
		console.log('i',this.index);
		if(this.index+2 === program.length){
			console.log('done');
			
			const completeHistory =	[...this.history,this.solution[1]];
			console.log(completeHistory	);
			this.toScore(completeHistory);
			this.printHistory(completeHistory);
			return;
		}
		const b1 = this.convert(this.solution[0].b);

		const findNext = (next:CB) => {
			const c2 = this.convert(next.c);
			const b2 = this.convert(next.b);
			if(b1[0]===c2[2]){
				numSols[program[this.index+2]].forEach((next2)=>{
					const c3 = this.convert(next2.c);
					if(b1[1] === c3[0]&& b1[2] === c3[1] && b2[0] === c3[2]){
						//console.log('b1:',b1,'c3:',c3);
						console.log('-----');
						console.log(`${tSP(this.solution[0].c)}${tSP(next.c)}${tSP(next2.c)}`);
						console.log(`     ${tSP(this.solution[0].b)}${tSP(next.b)}${tSP(next2.b)}`);
						
						nextSolutions.push([next,next2]);
					}
				});
			}
		};

		if(this.solution[1] === undefined){
			numSols[program[this.index+1]].forEach((next)=>{
				console.log('init');
				findNext(next);
			});
		} else {
			const next  = this.solution[1];
			findNext(next);
		}

		//console.log(nextSolutions);
		const solutionScores = nextSolutions.map((row:CB[])=>{
			return this.solution[0].c<<12+row[0].c<<8+row[1].c<<5+row[1].b;
		});
		let nextMoves; 
		let lowest = Infinity;
		solutionScores.forEach((score,i)=>{
			if(score<lowest){
				lowest = score;
				nextMoves = nextSolutions[i];
			}
		});
		if(nextMoves === undefined){
			return;
		}
		(new Crawler(this.index+1,nextMoves,this.history,nextMoves)).crawl();
	}

}

console.log('ððððððððð');
const reverseProgram=program.slice().reverse();
console.log(reverseProgram[0]);
numSols[reverseProgram[0]].forEach((cb:CB)=>{
	console.log(cb);
	if(cb.c === 0){
		const crawler = new Crawler(0,[cb],[]);
		crawler.crawl();
	}
	
});


console.log('winningIndexes', winningIndexes.sort((a,b)=>Number(a-b)));



// program.forEach((n,i)=>{
// 	if (i===program.length-1){
// 		return;
// 	}
// 	console.log(n,program[i+1]);
// 	crawl(n,1);
// });


console.log('valid');
//console.log(valid);
console.log('---');
//valid12.forEach(row=>console.debug(row));
console.log('--');

let programOutput = '';
//let a = 2078805769n;
//let a = 1n<<(3n*16n);
//let a = 281475819303689n;
//let a = 6907282946896600n;
//let a = 956967624372755n
//let a = winningIndexes[0];
//let a = 956967624372755n;
let a = 11n;
while (programOutput !== program.join() ){
	//console.log(a);
	pointer = 0;
	resetRegisters();
	setRegister(0,Number(a));
	programOutput = runProgramA();
	if(programOutput.length){
		console.log(a,':',programOutput,'\t', a.toString(2), `b:${tSP(a%8n)},c:${tSP((a>>5n)%8n)}`);
		console.log(a,':',program.join());
	}
	a++;
	break;
	
}

console.log(a-1n);
	

//tests();

//2,4, 1,5, 7,5, 4,3, 1,6, 0,3, 5,5, 3,0
//0'adv',1'bxl',2'bst',3'jnz',4'bxc',5'out',6'bdv',7'adv'

//b = a mod 8 {0-8}
// b == b^5   {0-8}


// amin = 1 << 16

// 
// 15206555n : 2,4,1,5,7,5
// 15206810n : 2,4,1,5,7,5
// 15208193n : 2,4,1,5,7,5
// 15208201n : 2,4,1,5,7,5
// 2074708378: 

// let checkedArr:string[] = '00000'.split('');
// [  { c: 1, b: 0 }, { c: 3, b: 4 },
// 	{ c: 6, b: 4 }, { c: 6, b: 0 },
// 	{ c: 4, b: 0 }, { c: 6, b: 0 },
// 	{ c: 4, b: 3 }, { c: 0, b: 0 },
// 	{ c: 1, b: 3 }, { c: 3, b: 6 },
// 	{ c: 4, b: 7 }, { c: 0, b: 0 },
// 	{ c: 5, b: 3 }, { c: 0, b: 6 },
// 	{ c: 1, b: 1 }, { c: 6, b: 5 }
// ].slice().reverse().forEach((cb)=>{
// 	const neg5 = checkedArr.length -5;
// 	const neg4 = checkedArr.length -4;
// 	const neg3 = checkedArr.length -3;
// 	const c = tSP(cb.c).split('');
// 	const b = tSP(cb.c).split('');
// 	checkedArr[neg5] = c[0];
// 	checkedArr[neg4] = c[1];
// 	checkedArr[neg3] = c[2];
// 	checkedArr = [...checkedArr,...b];
// }); 

// const checkedNum = (BigInt(parseInt(checkedArr.join(''),2)));
// console.log(checkedArr.join(''));
// console.log(checkedNum);