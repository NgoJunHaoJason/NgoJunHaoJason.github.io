// reference: https://www.d3-graph-gallery.com/graph/line_basic.html

// set the dimensions and margins of the graph
const margin = { top: 60, right: 60, bottom: 60, left: 60 };
const width = 960 - margin.left - margin.right;
const height = 480 - margin.top - margin.bottom;

// append the svg object to the body of the page
let svg = d3.select('#insertion_sort_ascending_results_visualisation')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

d3.csv(
    'lab_3_csv/cz2001_lab3_insertion_sort_ascending_results.csv',
    function (datum) {
        console.log(datum);
        return {
            arraySize: Number(datum['Array Size']),
            numKeyComparisons: Number(datum['Number of Key Comparisons']),
            timeTaken: Number(datum['CPU time taken for sorting']),
        };
    }
).then(function (data) {
    // Add X axis --> it is a date format
    // .domain([0, d3.max(data, (datum) => datum.arraySize)])
    // .domain(d3.extent(data, (datum) => datum.arraySize))
    let x = d3.scaleLinear()
        .domain([0, d3.max(data, (datum) => datum.arraySize)])
        .range([0, width]);

    svg.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x));

    // Add Y axis
    let y = d3.scaleLinear()
        .domain([d3.max(data, (datum) => datum.numKeyComparisons), 0])
        .range([height, 0]);

    svg.append('g')
        .call(d3.axisLeft(y));

    // Add the line
    svg.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 1.5)
        .attr('d', d3.line()
            .x((datum) => x(datum.arraySize))
            .y((datum) => x(datum.numKeyComparisons))
        );
});