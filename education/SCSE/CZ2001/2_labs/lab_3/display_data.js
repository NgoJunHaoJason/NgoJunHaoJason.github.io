// reference: https://www.d3-graph-gallery.com/graph/line_basic.html

// set the dimensions and margins of the graph
const MARGIN = {
    top: 10,
    right: 10,
    bottom: 60,
    left: 60,
};
const WIDTH = 720;
const HEIGHT = 480;

const xComponent = 'Array Size';
const yComponent = 'Number of Key Comparisons';

function displayData(divId, csvPath) {
    // append the svg object to the body of the page
    const svgWidth = WIDTH + MARGIN.left + MARGIN.right;
    const svgHeight = HEIGHT + MARGIN.top + MARGIN.bottom;

    const svg = d3.select('#' + divId)
        .append('svg')
            .attr('viewBox', '0 0 ' + svgWidth + ' ' + svgHeight)
            .attr('preserveAspectRatio', 'xMidYMid meet')
        .append('g')
            .attr('transform', 'translate(' + MARGIN.left + ',' + MARGIN.top + ')');

    d3.csv(
        csvPath,
        function (datum) {
            return {
                arraySize: Number(datum[xComponent]),
                numKeyComparisons: Number(datum[yComponent]),
                timeTaken: Number(datum['CPU time taken for sorting']),
            };
        }
    ).then(function (data) {
        const x = d3.scaleLinear()
            .domain([0, d3.max(data, (datum) => datum.arraySize)])
            .range([0, WIDTH])
            .nice();
        
        const xAxis = d3.axisBottom(x)
            .tickFormat(d3.format('.2s'));

        svg.append('g')
            .attr('transform', 'translate(0,' + HEIGHT + ')')
            .call(xAxis)
            .append('text')
                .text('Array Size')
                .attr('text-anchor', 'middle')
                .attr('fill', 'black')
                .attr('font-size', 15)
                .attr('x', WIDTH / 2)
                .attr('y', 40);

        // Add Y axis
        const y = d3.scaleLinear()
            .domain([0, d3.max(data, (datum) => datum.numKeyComparisons)])
            .range([HEIGHT, 0])
            .nice();

        const yAxis = d3.axisLeft(y)
            .tickFormat(d3.format('.2s'));

        svg.append('g')
            .call(yAxis)
            .append('text')
                .text(yComponent)
                .attr('transform', 'rotate(-90)')
                .attr('text-anchor', 'middle')
                .attr('fill', 'black')
                .attr('font-size', 15)
                .attr('x', -HEIGHT / 2)
                .attr('y', -45);;

        // Add the line
        svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', 'steelblue')
            .attr('stroke-width', 1.5)
            .attr('d', d3.line()
                .x(datum => x(datum.arraySize))
                .y(datum => y(datum.numKeyComparisons))
            );
    });
}

let displaySortingResults = function () {
    displayData(
        'insertion_sort_ascending_results_visualisation',
        'data/cz2001_lab3_insertion_sort_ascending_results.csv'
    );

    displayData(
        'insertion_sort_random_results_visualisation',
        'data/cz2001_lab3_insertion_sort_random_results.csv'
    );

    displayData(
        'insertion_sort_descending_results_visualisation',
        'data/cz2001_lab3_insertion_sort_descending_results.csv'
    );

    displayData(
        'merge_sort_ascending_results_visualisation',
        'data/cz2001_lab3_merge_sort_ascending_results.csv'
    );

    displayData(
        'merge_sort_random_results_visualisation',
        'data/cz2001_lab3_merge_sort_random_results.csv'
    );

    displayData(
        'merge_sort_descending_results_visualisation',
        'data/cz2001_lab3_merge_sort_descending_results.csv'
    );
}

displaySortingResults();
