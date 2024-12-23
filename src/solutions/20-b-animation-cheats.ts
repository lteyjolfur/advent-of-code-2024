import { readFileSync } from 'fs';
import readline from 'readline';

const input = readFileSync('./input.txt','utf-8');


const input_real = `###############
#...#...#.....#
#.#.#.#.#.###.#
#S#...#.#.#...#
#######.#.#.###
#######.#.#...#
#######.#.###.#
###..E#...#...#
###.#######.###
#...###...#...#
#.#####.#.###.#
#.#...#.#.#...#
#.#.#.#.#.#.###
#...#...#...###
###############`;

const  realModulo = (a:number, b:number) => {
	return ((a % b) + b) % b;
};

const sleep = (ms:number) => {
	const start = Date.now();
	while (Date.now() - start < ms) {
		// eslint-disable-next-line no-empty
	}
};

const dirs = [
	{x:0,y:-1}, 
	{x:1,y:0},
	{x:0,y:1},
	{x:-1,y:0},
];

const sum = (a:Vec,b:Vec) => ({y:a.y+b.y,x:a.x+b.x}); 
const posToStr = (a:Vec) => `${a.y},${a.x}`;

type Vec = {
	x:number,
	y:number
}

type Empty = {
	pos:Vec
	score:number
}

class Checker  {
	pos: Vec;
	dir: number;
	score: number;

	constructor(pos:Vec,dir:number,score:number){
		this.pos = pos;
		this.dir = dir;
		this.score = score;

	}

	isViable(nC:Checker[],nextStep:Vec,dir:number):boolean{
		const newScore = this.score+1;
		const nextStr = posToStr(nextStep);
		if(posToStr(nextStep) === posToStr(end.pos) && end.score > newScore){
			end.score=newScore;
		}
		if(empties[nextStr]?.score>newScore){
			empties[nextStr].score = newScore;
			//map[nextStep.y][nextStep.x] = 'O';
			nC.push(new Checker(nextStep,dir,newScore));
			return true;
		}
		return false;
	}

	straight(nC:Checker[]){
		const nextStep = sum(this.pos,dirs[this.dir]);
		this.isViable(nC,nextStep,this.dir);
	}

	clockwise(nC:Checker[]){
		const dir = realModulo(this.dir+1,4);
		const nextStep = sum(this.pos,dirs[dir]);
		this.isViable(nC,nextStep,dir);
	}

	cClockwise(nC:Checker[]){
		const dir = realModulo(this.dir-1,4);
		const nextStep = sum(this.pos,dirs[dir]);
		this.isViable(nC,nextStep,dir);
	}

	back(nC:Checker[]){
		const dir = realModulo(this.dir+2,4);
		const nextStep = sum(this.pos,dirs[dir]);
		this.isViable(nC,nextStep,dir);
	}

	check(nC:Checker[]){
		this.straight(nC);
		this.clockwise(nC);
		this.cClockwise(nC);
		this.back(nC);
	}
}


let start:Vec = {y:0,x:0};
let end:Empty = {pos:{y:0,x:0},score:Infinity};
const walls:Record<string,Empty> ={};
const empties:{[key:string]:Empty}={};

const map = input.split('\n').map((row,y)=>row.split('').map((cell,x)=>{
	switch(cell) {
	case '.':
		empties[posToStr({y,x})]={pos:{y,x},score:Infinity};
		return ' ';
	case 'S':
		start = {y,x};
		break;
	case 'E':
		end = {pos:{y,x},score:Infinity};
		break;
	default:
		walls[posToStr({y,x})]={pos:{y,x},score:Infinity};
		return '█';
	} 
	return cell as string;
	
}));

const render = (rMap=map) => {
	console.log();
	readline.cursorTo(process.stdout,0,0);
	readline.clearScreenDown(process.stdout);		
	console.log(rMap.map(row=>row.join('')).join('\n'));
};
render();

let checks:Checker[] = [new Checker(start,1,0)];
const firstPass = () => {
	while(end.score === Infinity){
		const newChecks:Checker[] = [];
		checks.forEach(checker=>checker.check(newChecks));
		checks = [...newChecks];
	}
};

firstPass();

render();

let cheats = 0;

empties[posToStr(end.pos)] = end;
empties[posToStr(start)] = {pos:start,score:0};

const threshold = 100;
const maxDist = 20;

Object.values(empties).sort((a,b)=> a.score-b.score).forEach((empty)=>{
	const rMap = JSON.parse(JSON.stringify(map));
	const {x,y}=empty.pos;
	rMap[y][x] = 'O';
	sleep(50);
	
	map[y][x] = '░';
	let localCheats = 0;
	for(let i = y-maxDist; i<=y+maxDist; i++){
		for(let j = x-maxDist; j<=x+maxDist; j++){
			const dist = Math.abs(i-y) + Math.abs(j-x); // Manhattan distance 
			if(dist>maxDist){
				continue;
			}
			const lookPos = {y:i,x:j};
			const lookString = posToStr(lookPos);
			const save = empties[lookString]?.score - (empty.score + dist);
			if(save >= threshold){
				const reset = '\x1b[0m';
				const green = '\x1b[32m';
				rMap[i][j] =  `${green}◆${reset}`;  
				++cheats;
				++localCheats;
			}
		}
	}
	render(rMap);
	console.log('cheats found:', localCheats, 'total:', cheats);
});

console.log(cheats);
// const reset = '\x1b[0m';
// const red = '\x1b[31m';
// const green = '\x1b[32m';

// console.log(`${red}H${green}e${reset}llo`); // "H" is red, "e" is green, the rest is default

