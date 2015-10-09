
//Set up the drawing environment here
var margin = {t:20,r:20,b:20,l:20};
var width = document.getElementById('plot').clientWidth-margin.l-margin.r,
	height = document.getElementById('plot').clientHeight-margin.t-margin.b;

var plot = d3.select('.canvas')
	.append('svg')
	.attr('width',width+margin.l+margin.r)
	.attr('height',height+margin.t+margin.b)
	.append('g')
	.attr('class','plot')
	.attr('transform','translate('+margin.l+','+margin.r+')');


//Start with 100 symbols
var numOfSymbols = 100;

//Create an array, generate objects to push into the array
//Attributes of these symbols are
// --> x position: between 0 and width
// --> y position: betewen 0 and height
// --> size: between 0 and 100x100
// --> type: circle or square
// --> color



var symbols = [];



for(var i=0; i<numOfSymbols; i++){
	newSymbols = {
		xPos:Math.random()*(width),
		yPos:Math.random()*(height),
		sizeW:Math.random()*100,
		sizeH:Math.random()*100,
		colorFill: 'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')',
		type:Math.round(Math.random())
	};

	symbols.push(newSymbols);
}

console.log(symbols[1]);
	

//With the array you've created and populated, draw circles to represent these symbols
symbols.forEach(function(index){

	if (index.type == 0 ) {
		plot
			.append('rect')
			.attr('x', index.xPos)
			.attr('y', index.yPos)
			.attr('width', index.sizeW)
			.attr('height', index.sizeH)
			.style('fill', index.colorFill)
	} else {
		plot
			.append('circle')
			.attr('cx', index.xPos)
			.attr('cy', index.yPos)
			.attr('r', index.sizeW)
			.style('fill', index.colorFill)
	}
});

