// var width=500;
// var height=500;
// var canvas =  d3.select("body")
//                 .append("svg")
//                 .attr("width",width)
//                 .attr("height", height)

//tijdelijk erin//

var cities = [
  { name: 'London', population: 8674000},
  { name: 'New York', population: 8406000},
  { name: 'Sydney', population: 4293000},
  { name: 'Paris', population: 2244000},
  { name: 'Beijing', population: 11510000}
];

// Join cities to rect elements and modify height, width and position
d3.selectAll('rect')
  .data(cities)
  .attr('height', 19)
  .attr('width', function(d) {
    var scaleFactor = 0.00004;
    return d.population * scaleFactor;
  })
  .attr('y', function(d, i) {
    return i * 20;
  });

// Join cities to text elements and modify content and position
d3.selectAll('text')
  .data(cities)
  .attr('y', function(d, i) {
    return i * 20 + 13;
  })
  .attr('x', -4)
  .text(function(d) {
    return d.name;
  });

d3.selectAll('circle')
	.data(cities)
	.attr('r',function(d) {var scaleFactor = 0.0000009;return d.population*scaleFactor})
	.attr('cy',function(d,i) {return i*20+10})
	.attr('cx',-50)

//add divs with enter and use population to add text
function doEnter()
    {d3.select('#enters').selectAll('div')
  .data(cities).enter()
  .append('div')};
