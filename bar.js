function createBar(pointsdata) {
    console.log("small multiple loaded");
    //console.log(pointsdata);

    let shapenest;
    
    //nest data
    shapenest = d3.nest()
    .key( function(d) {
        return d.country;
      }) 
      .rollup( function(values) {
        return {
            count: values.length  
        };
      })   
    .entries(pointsdata);

    console.log(shapenest);

    
    let margin = { top: 35, right: 0, bottom: 30, left: 0 };

    let width = 400 - margin.left - margin.right;
    let height = 400 - margin.top - margin.bottom;

    let mult = d3.select("#multiples")
      .attr("width", 400)
      .attr("height", 500)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scale.ordinal()
      .domain(shapenest.map(function(d) { return d.key; }))
      .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
      .domain([0, 12000])
      .range([height, 0]);

    var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

    var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .ticks(5);

    mult.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    mult.append("g")
      .attr("class", "y axis")
      .call(yAxis);

    mult.append("text")
        .text('Sightings by Country!')
        .attr("text-anchor", "middle")
        .attr("class", "graph-title")
        .attr("y", -10)
        .attr("x", width / 2.0);
    
    var bar = mult.selectAll(".bar")
        .data(shapenest)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.key); })
        .attr("y", function(d) { return y(d.values.count); })
        .attr("width", x.rangeBand())
        .attr("height", function(d) { return height - y(d.values.count); });
    
    mult.selectAll('.text')
        .data(shapenest)
        .enter()
        .append("text")
        .attr("class", "label")
        .attr("x", function(d) { return x(d.key) + x.rangeBand() / 2; })
        .attr("y", function(d) { return y(d.values.count) - 20; })
        .attr("dy", '.75em')
        .text(function(d) { return d.values.count; });


    // let mWidth = 100;
    // let mHeight = 100;

    // var xScale = d3.scale.linear()
    //     .range([0, mWidth])
    //     .domain([1949,2013]);
    //     //.tickFormat("%Y");

    // var yScale = d3.scale.linear()
    //   .range([0, mHeight])
    //   .domain([0, 70]);

    // //https://bl.ocks.org/mbostock/9490516
    // var mult = d3.select('#multiples')
    //   .data(shapenest)
    //   .enter().append('svg')
    //     .attr('width', mWidth)
    //     .attr('height', mHeight)
    //     .attr('x', (d) => xScale(d.key))
    //     .attr('x', (d) => xScale(d.value.key.value.count));

    // mult.append('path')
    //   .attr('class', 'line')
    //   .attr('d', function(country) {
    //       return d3.mult.line()
    //         .x(function(d) { return country.x(d.value.year); })
    //         .y(function(d) { return country.y(d.value.count); })
    //         (symbol.values);
    //   });
}