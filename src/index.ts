import readline from 'readline';

const input = `###############
#.......#....E#
#.#.###.#.###.#
#.....#.#...#.#
#.###.#####.#.#
#.#.#.......#.#
#.#.#####.###.#
#...........#.#
###.#.#####.#.#
#...#.....#.#.#
#.#.#.###.#.#.#
#.....#...#.#.#
#.###.#.#.#.#.#
#S..#.....#...#
###############`;

const sleep = (ms:number) => {
	const start = Date.now();
	while (Date.now() - start < ms) {
		// eslint-disable-next-line no-empty
	}
};

// þarf ég al vista stefnu + stig eða bara stig?


const WALL= '#';
const EMPTY='.';
const END='E';
const START='S';




const dirs = [
	{x:0,y:-1}, 
	{x:1,y:0},
	{x:0,y:1},
	{x:-1,y:0},
];



type Dirs = typeof dirs;

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

	isViable(newScore:number,nextStep:Vec):boolean{
		
		const nextStr = posToStr(nextStep);
		if(empties[nextStr]?.score>newScore){
			empties[nextStr].score = newScore;
			return true;
		}
		return false;
	}

	straigh(nC:Checker[]){
		const newScore = this.score+1;
		const nextStep = sum(this.pos,dirs[this.dir]);
		if(this.isViable(newScore,nextStep)){
			nC.push(new Checker(nextStep,this.dir,newScore));
		}
	}

	// clockwise(nC){
	// 	const newScore = this.score+1001;
	// }

	// cClockwise(nC){
	// 	const newScore = this.score+1001;
	// }

	// back(nC){
	// 	const newScore = this.score+2001;
	// }

	check(nC:Checker[]){
		this.straigh(nC);
		//this.clockwise(nC);
		//this.cClockwise(nC);
		//this.back(nC);
	}
}



let start:Vec;
let end:Vec;
//const walls:Vec[]=[];
const empties:{[key:string]:Empty}={};
const isFound = false;



// HERE
const map = input.split('\n').map((row,y)=>row.split('').map((c,x)=>{
	const pos = {y,x};
	switch(c){
	case START:
		start=pos;
		break;
	case EMPTY:
		empties[posToStr({y,x})]={pos,score:Infinity};
		break;
	case END:
		end=pos;
		break;
	default:
	}
	return c;
}));

// const path: Dirs[] = rawPath.flatMap(cA =>
// 	cA.map(c => (['<', '>', '^', 'v'] as const).includes(c as Dirs) ? (c as Dirs) : 'v')
// );

console.log(map);




const visualise = (shouldClear=false) => {
	// render();
	// if(shouldClear){
	// 	readline.cursorTo(process.stdout,0,0);
	// 	readline.clearScreenDown(process.stdout);	
	// }
	map.forEach(row=>console.log(row.join('')));
};

visualise();

let whileI = 0;
let checks:Checker[] = [];
while(!isFound&& whileI<100000){
	const newChecks:Checker[] = [];
	checks.forEach(checker=>checker.check(newChecks));
	checks = [...newChecks];
	whileI++;
}

//console.log(input.split('#').length*2);
//console.log(map.forEach(row=>))

//151267 // low

