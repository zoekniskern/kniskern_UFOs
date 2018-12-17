/* Zoe Kniskern main UFO code 
 * 
 */

/* UTILITY FUNCTIONS */

function rand(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

let s;

let dataset;
let countryset;
let dataURL = 'scrubbed.csv';
let worldjson = 'world-countries.json';
let key = (d) => d.key;
var parseDate = d3.time.format("%d/%m/%y").parse;

//ALL LOADING DATA ATTEMPTS

//Convert Rows
// function ConvertRows(data) {
//   return {
//     year: parseInt(data.datetime.substring(6)),
//     city: data.city,
//     state: data.state,
//     shape: data.shape,
//     lat: parseFloat(data.latitude),
//     long: parseFloat(data.longitude)
//   }
// }

window.onload = function() {
  d3.csv('scrubbed-smaller.csv', function(error, data) {
    return{
      year: parseInt(data.datetime.substring(6)),
      city: data.city,
      state: data.state,
      shape: data.shape,
      lat: parseFloat(data.latitude),
      long: parseFloat(data.longitude)
    }
  }),
  d3.json(worldjson, function(country) {
        countryset = country;
        console.log("countryset inside");
        console.log(countryset);
        createMap(dataset, countryset);
  }).then((data) => {
    console.log(data);
  })
}

// window.onload = function() {
//   d3.csv(dataURL, ConvertRows)
//     .then((d) => {
//       dataset = d;
//       d3.json(worldjson, function(country) {
//             countryset = country;
//             console.log("countryset inside");
//             console.log(countryset);
//       });
//     });  

//   createMap(dataset, countryset);
// }

// Promise.all([
//   d3.json("ufo-smaller.json"),
//   d3.json("world-countries.json")
//   ]).then((values) => {
//     let[dataset, countryset] = values;

//     console.log(values);
//     //console.log(countryset);

//     createMap(dataset, countryset);
//   });

// Promise.all([
//   d3.json("ufo-smaller.json"),
//   d3.json("world-countries.json")
// ]).then((values) => {
//   let [dataset, countryset] = values;

//   console.log(dataset);
//   console.log(countryset);

//   createMap(dataset, countryset);

// });

// console.log("dataset outside");
// console.log(dataset);
// console.log("countryset outside");
// console.log(countryset);

//Onload function
// window.onload = function() {
//   d3.csv(dataURL, function(data) {
//     return {
//       year: parseInt(data.datetime.substring(6)),
//       city: data.city,
//       state: data.state,
//       shape: data.shape,
//       lat: parseFloat(data.latitude),
//       long: parseFloat(data.longitude)
//     };
//   },
//   function(data) {
//       dataset = data;
//       console.log("dataset inside");
//       console.log(dataset);
//       //createMap(dataset, countryset);
//   }),
//   d3.json(worldjson, function(country) {
//         countryset = country;
//         console.log("countryset inside");
//         console.log(countryset);
//         createMap(dataset, countryset);
//   });
// }



/* MAP */
function createMap(dataset, countryset) {
  let w = window.innerWidth - window.innerWidth*.25;
  let h = window.innerHeight - window.innerHeight*.25;

  var svg = d3.select("#map")
    .attr("width", w)
    .attr("height", h);

   // 2. Define a map projection
  var projection = d3.geo.mercator();

  let projectionDefaultScale = projection.scale();

  // 3. Define a path generator using the projection
  let path = d3.geo.path()
    .projection(projection);

  // 5. Draw the map using SVG path elements
  var map = svg.append('g');

  //Bind data and create one path per GeoJSON feature
  map.selectAll("path")
    .data(countryset.features)
    .enter()
    .append("path")
    .attr("d", path)
    .style('fill', 'gray');

  /* CITY DATA AS POINTS */
  map.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .style('fill', 'red')
    .style('stroke', 'purple')
    .style('opacity', '0.75')
    .attr('cx', d => projection([d.long, d.lat])[0])
    .attr('cy', d => projection([d.long, d.lat])[1])
    .attr('r', 5)
    .append('title')
      .text(d => `${d.name}: ${d.years} years`)
  
}
