
const parseData = (str:string) => {
	const lists:number[][] = [
		[],
		[],
	];
    
	str.split('\n').map(row=>row.split(' '))
		.map(row=>
			row.filter((a:string)=>a!=='')
				.map(a=>Number(a))
				.forEach((num:number,index) => {
					lists[index].push(num);}));
	return lists;
};

export default parseData;