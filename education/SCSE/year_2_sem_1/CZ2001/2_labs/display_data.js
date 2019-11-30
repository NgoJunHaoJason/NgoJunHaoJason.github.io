// reference: https://www.d3-graph-gallery.com/graph/line_basic.html

// set the dimensions and margins of the graph
const MARGIN = { 
    top: Math.floor(window.innerHeight / 16), 
    right: Math.floor(window.innerWidth / 16), 
    bottom: Math.floor(window.innerHeight / 16), 
    left: Math.floor(window.innerWidth / 8), 
};
const WIDTH = Math.floor(window.innerWidth * 12 / 16);
const HEIGHT = Math.min(Math.floor(window.innerHeight * 7 / 8), Math.floor(WIDTH * 5 / 6));

function displayData(divId, csvPath) {
    // append the svg object to the body of the page
    let svg = d3.select('#' + divId)
    .append('svg')
    .attr('width', WIDTH + MARGIN.left + MARGIN.right)
    .attr('height', HEIGHT + MARGIN.top + MARGIN.bottom)
    .append('g')
    .attr('transform', 'translate(' + MARGIN.left + ',' + MARGIN.top + ')');

    d3.csv(
        csvPath,
        function (datum) {
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
        .range([0, WIDTH]);

    svg.append('g')
        .attr('transform', 'translate(0,' + HEIGHT + ')')
        .call(d3.axisBottom(x));

    // Add Y axis
    let y = d3.scaleLinear()
        .domain([0, d3.max(data, (datum) => datum.numKeyComparisons)])
        .range([HEIGHT, 0]);

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
            .y((datum) => y(datum.numKeyComparisons))
        );
    });
}

let displaySortingResults = function () {
    displayData(
        'insertion_sort_ascending_results_visualisation',
        'lab_3_csv/cz2001_lab3_insertion_sort_ascending_results.csv'
    );

    displayData(
        'insertion_sort_random_results_visualisation',
        'lab_3_csv/cz2001_lab3_insertion_sort_random_results.csv'
    );

    displayData(
        'insertion_sort_descending_results_visualisation',
        'lab_3_csv/cz2001_lab3_insertion_sort_descending_results.csv'
    );

    displayData(
        'merge_sort_ascending_results_visualisation',
        'lab_3_csv/cz2001_lab3_merge_sort_ascending_results.csv'
    );

    displayData(
        'merge_sort_random_results_visualisation',
        'lab_3_csv/cz2001_lab3_merge_sort_random_results.csv'
    );

    displayData(
        'merge_sort_descending_results_visualisation',
        'lab_3_csv/cz2001_lab3_merge_sort_descending_results.csv'
    );
}

displaySortingResults();
