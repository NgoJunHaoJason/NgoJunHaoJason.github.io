// reference: https://www.d3-graph-gallery.com/graph/line_basic.html

// set the dimensions and margins of the graph
const MARGIN = {
    top: Math.floor(window.innerHeight / 16),
    right: Math.floor(window.innerWidth / 16),
    bottom: Math.floor(window.innerHeight / 16),
    left: Math.floor(window.innerWidth / 8),
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

        svg.append('g')
            .attr('transform', 'translate(0,' + HEIGHT + ')')
            .call(d3.axisBottom(x))
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

        svg.append('g')
            .call(d3.axisLeft(y))
            .append('text')
                .text(yComponent)
                .attr('transform', 'rotate(-90)')
                .attr('text-anchor', 'middle')
                .attr('fill', 'black')
                .attr('font-size', 15)
                .attr('x', HEIGHT / 2)
                .attr('y', -40);;

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
