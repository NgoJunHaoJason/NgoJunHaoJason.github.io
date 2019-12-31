displaySetsPicture('sets_picture');
displayFunctionPicture('function_picture');
displayFloorAndCeilingPicture('floor_and_ceiling_picture');
displayExponentiationPicture('exponentiation_picture');
displayLogarithmPicture('logarithm_picture');

function displaySetsPicture(divId) {
    const svgWidth = 720;
    const svgHeight = 280;

    const circleRadius = 60;

    const setsPictureSVG = d3.select('#' + divId)
        .append('svg')
        .attr('viewBox', '0 0 ' + svgWidth + ' ' + svgHeight)
        .attr('preserveAspectRatio', 'xMidYMid meet');

    const alphabetGroup = setsPictureSVG.append('g')
        .attr('transform', `translate(${100}, ${100})`);

    alphabetGroup.append('circle')
        .attr('r', circleRadius)
        .attr('fill', 'turquoise')
        .attr('stroke', 'black')
        .attr('stroke-width', 2);

    alphabetGroup.append('text')
        .attr('text-anchor', 'middle')
        .attr('y', -circleRadius - 10)
        .attr('font-size', 26)
        .text('alphabets');

    let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');

    const numDisplayedAlphabets = 5;

    for (let index = 0; index < numDisplayedAlphabets; ++index) {
        const alphabetIndex = Math.floor(Math.random() * alphabets.length)
        const alphabet = alphabets.splice(alphabetIndex, 1);

        alphabetGroup.append('text')
            .attr('text-anchor', 'middle')
            .attr('y', 20 * index - 30)
            .text(alphabet);
    }

    const xRadius = 140;
    const yRadius = 110;

    const numberGroup = setsPictureSVG.append('g')
        .attr('transform', `translate(${svgWidth * 2 / 3}, ${svgHeight / 2})`);

    numberGroup.append('text')
        .attr('text-anchor', 'middle')
        .attr('y', -yRadius - 10)
        .attr('font-size', 26)
        .text('number sets');

    const numberSets = ['real', 'rational', 'integer', 'natural'];

    // reference: https://www.d3-graph-gallery.com/graph/custom_color.html
    const colourScale = d3.scaleLinear()
        .domain([1, numberSets.length])
        .range(['cyan', 'blue']);

    const groupEnter = numberGroup.selectAll('g').data(numberSets).enter();

    groupEnter.append('ellipse')
        .attr('cy', (datum, index) => index * 20)
        .attr('rx', (datum, index) => xRadius - index * 20)
        .attr('ry', (datum, index) => yRadius - index * 20)
        .attr('fill', (datum, index) => colourScale(index + 1))
        .attr('stroke', 'white');

    groupEnter.append('text')
        .attr('text-anchor', 'middle')
        .attr('fill', 'white')
        .attr('font-size', 26)
        .attr('y', (datum, index) => index * 40 - yRadius + 30)
        .text(datum => datum);
}

function displayFunctionPicture(divId) {
    const svgWidth = 720;
    const svgHeight = 240;

    const xRadius = 50;
    const yRadius = 80

    const functionPictureSVG = d3.select('#' + divId)
        .append('svg')
        .attr('viewBox', '0 0 ' + svgWidth + ' ' + svgHeight)
        .attr('preserveAspectRatio', 'xMidYMid meet');

    const textGroup = functionPictureSVG.append('g')
        .attr('transform', `translate(${35}, ${30})`);

    textGroup.append('text')
        .attr('x', -5)
        .attr('font-size', 28)
        .text('Example');

    textGroup.append('text')
        .attr('y', 30)
        .attr('font-size', 24)
        .text('f(1) = A');

    textGroup.append('text')
        .attr('y', 60)
        .attr('font-size', 24)
        .text('f(2) = C');

    textGroup.append('text')
        .attr('y', 90)
        .attr('font-size', 24)
        .text('f(3) = C');

    const domainGroup = functionPictureSVG.append('g')
        .attr('transform', `translate(${svgWidth / 2}, ${svgHeight / 2})`);

    domainGroup.append('ellipse')
        .attr('rx', xRadius)
        .attr('ry', yRadius)
        .attr('fill', 'orange')
        .attr('stroke', 'steelBlue')
        .attr('stroke-width', 2);

    for (let number = 0; number < 3; ++number) {
        domainGroup.append('text')
            .attr('text-anchor', 'middle')
            .attr('y', number * 35 - 30)
            .attr('font-size', 22)
            .text(number + 1);
    }

    const rangeGroup = functionPictureSVG.append('g')
        .attr('transform', `translate(${svgWidth * 3 / 4}, ${svgHeight / 2})`);

    rangeGroup.append('ellipse')
        .attr('rx', xRadius)
        .attr('ry', yRadius)
        .attr('fill', 'limeGreen')
        .attr('stroke', 'pink')
        .attr('stroke-width', 2);

    for (let index = 0; index < 4; ++index) {
        rangeGroup.append('text')
            .attr('text-anchor', 'middle')
            .attr('y', index * 30 - 40)
            .attr('font-size', 22)
            .text(String.fromCharCode(65 + index));
    }

    // references: 
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Element/marker
    // https://stackoverflow.com/a/36579541/9171260

    functionPictureSVG.append('defs')
        .append('marker')
        .attr('id', 'arrowhead')
        .attr('refX', 5)
        .attr('refY', 5)
        .attr('markerWidth', 6)
        .attr('marketHeight', 6)
        .attr('orient', 'auto')
        .attr('viewBox', '0 0 10 10')
        .append('path')
        .attr('d', 'M 0 0 L 10 5 L 0 10 z');

    functionPictureSVG.append('line')
        .attr('x1', svgWidth / 2 + 10)
        .attr('y1', svgHeight / 2 - 35)
        .attr('x2', svgWidth * 3 / 4 - 10)
        .attr('y2', svgHeight / 2 - 45)
        .attr('stroke', 'black')
        .attr('stroke-width', 2)
        .attr('marker-end', 'url(#arrowhead)');

    functionPictureSVG.append('line')
        .attr('x1', svgWidth / 2 + 10)
        .attr('y1', svgHeight / 2 - 5)
        .attr('x2', svgWidth * 3 / 4 - 10)
        .attr('y2', svgHeight / 2 + 10)
        .attr('stroke', 'black')
        .attr('stroke-width', 2)
        .attr('marker-end', 'url(#arrowhead)');

    functionPictureSVG.append('line')
        .attr('x1', svgWidth / 2 + 10)
        .attr('y1', svgHeight / 2 + 35)
        .attr('x2', svgWidth * 3 / 4 - 10)
        .attr('y2', svgHeight / 2 + 15)
        .attr('stroke', 'black')
        .attr('stroke-width', 2)
        .attr('marker-end', 'url(#arrowhead)');
}

function displayFloorAndCeilingPicture(divId) {
    const svgWidth = 720;
    const svgHeight = 240;

    const margin = { left: 40, top: 40, right: 40, bottom: 40 };

    const plotWidth = svgWidth / 2 - margin.left - margin.right;
    const plotHeight = svgHeight - margin.top - margin.bottom;

    let data = [-3, -2, -1, 0, 1, 2, 3];

    const dataWithBuffer = [-4].concat(data).concat([4]);

    const svg = d3.select('#' + divId)
        .append('svg')
        .attr('viewBox', '0 0 ' + svgWidth + ' ' + svgHeight)
        .attr('preserveAspectRatio', 'xMidYMid meet');

    const xScale = d3.scaleLinear()
        .domain(d3.extent(dataWithBuffer))
        .range([0, plotWidth]);

    const yScale = d3.scaleLinear()
        .domain(d3.extent(dataWithBuffer))
        .range([plotHeight, 0]);

    const xAxis = d3.axisBottom(xScale)
        .tickValues(data)
        .tickFormat(d3.format('.0f'));

    const yAxis = d3.axisLeft(yScale)
        .tickValues(data)
        .tickFormat(d3.format('.0f'));

    // floor function
    const floorGroup = svg.append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

    floorGroup.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', plotWidth / 2)
        .text('floor function');

    floorGroup.append('g')
        .attr('transform', `translate(0, ${plotHeight})`)
        .call(xAxis);

    floorGroup.append('g')
        .call(yAxis);

    const floorEnter = floorGroup.selectAll('circle').data(data).enter();

    floorEnter.append('circle')
        .attr('cx', datum => xScale(datum))
        .attr('cy', datum => yScale(datum))
        .attr('r', 2)
        .attr('fill', 'steelBlue')
        .attr('stroke', 'steelBlue');

    floorEnter.append('circle')
        .attr('cx', datum => xScale(datum + 1))
        .attr('cy', datum => yScale(datum))
        .attr('r', 2)
        .attr('fill', 'white')
        .attr('stroke', 'steelBlue');

    // reference: https://stackoverflow.com/a/19236813/9171260
    floorEnter.append('line')
        .attr('x1', datum => xScale(datum))
        .attr('y1', datum => yScale(datum))
        .attr('x2', datum => xScale(datum + 0.95))
        .attr('y2', datum => yScale(datum))
        .attr('stroke', 'steelBlue');

    // ceiling function
    const ceilingGroup = svg.append('g')
        .attr('transform', `translate(${svgWidth / 2 + margin.left}, ${margin.top})`);

    ceilingGroup.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', plotWidth / 2)
        .text('ceiling function');

    ceilingGroup.append('g')
        .attr('transform', `translate(0, ${plotHeight})`)
        .call(xAxis);

    ceilingGroup.append('g')
        .call(yAxis);

    const ceilingEnter = ceilingGroup.selectAll('circle').data(data).enter();

    ceilingEnter.append('circle')
        .attr('cx', datum => xScale(datum - 1))
        .attr('cy', datum => yScale(datum))
        .attr('r', 2)
        .attr('fill', 'white')
        .attr('stroke', 'steelBlue');

    ceilingEnter.append('circle')
        .attr('cx', datum => xScale(datum))
        .attr('cy', datum => yScale(datum))
        .attr('r', 2)
        .attr('fill', 'steelBlue')
        .attr('stroke', 'steelBlue');

    // reference: https://stackoverflow.com/a/19236813/9171260
    ceilingEnter.append('line')
        .attr('x1', datum => xScale(datum - 0.95))
        .attr('y1', datum => yScale(datum))
        .attr('x2', datum => xScale(datum))
        .attr('y2', datum => yScale(datum))
        .attr('stroke', 'steelBlue');
}

function displayExponentiationPicture(divId) {
    const svgWidth = 480;
    const svgHeight = 240;

    const margin = { left: 20, top: 20, right: 20, bottom: 20 };

    const plotWidth = svgWidth - margin.left - margin.right;
    const plotHeight = svgHeight - margin.top - margin.bottom;

    let data = [-3, -2, -1, -0.75, -0.5, -0.25, -0.05, -0.01, 0, 0.25, 0.5, 1, 2, 3];

    const exponentiationPictureSVG = d3.select('#' + divId)
        .append('svg')
        .attr('viewBox', '0 0 ' + svgWidth + ' ' + svgHeight)
        .attr('preserveAspectRatio', 'xMidYMid meet');

    const xScale = d3.scaleLinear()
        .domain(d3.extent(data))
        .range([0, plotWidth]);

    const yScale = d3.scaleLinear()
        .domain([0, 5])
        .range([plotHeight, 0]);

    const xAxis = d3.axisBottom(xScale)
        .tickValues([-3, -2, -1, 0, 1, 2, 3])
        .tickFormat(d3.format('.0f'));

    const yAxis = d3.axisLeft(yScale)
        .tickValues([1, 2, 3, 4, 5])
        .tickFormat(d3.format('.0f'));

    const plotGroup = exponentiationPictureSVG.append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const xAxisGroup = plotGroup.append('g')
        .attr('transform', `translate(0, ${plotHeight})`)
        .call(xAxis);

    xAxisGroup.append('text') // axis label
        .attr('x', plotWidth + 10)
        .attr('y', 5)
        .attr('fill', 'black')
        .attr('font-size', 14)
        .text('n');

    plotGroup.append('g')
        .attr('transform', `translate(${plotWidth / 2}, 0)`)
        .call(yAxis);

    const base2Line = d3.line()
        .x(datum => xScale(datum))
        .y(datum => yScale(Math.pow(2, datum)))
        .curve(d3.curveBasis);

    plotGroup.append('path')
        .attr('d', base2Line(data))
        .attr('fill', 'none')
        .attr('stroke', 'steelBlue');

    const base10Line = d3.line()
        .x(datum => xScale(datum))
        .y(datum => yScale(Math.pow(10, datum)))
        .curve(d3.curveBasis);

    plotGroup.append('path')
        .attr('d', base10Line(data))
        .attr('fill', 'none')
        .attr('stroke', 'steelBlue');

    plotGroup.append('text')
        .attr('x', 390)
        .text('b = 2');

    plotGroup.append('text')
        .attr('x', 270)
        .text('b = 10');
}

function displayLogarithmPicture(divId) {
    const svgWidth = 480;
    const svgHeight = 240;

    const margin = { left: 20, top: 20, right: 20, bottom: 10 };

    const plotWidth = svgWidth - margin.left - margin.right;
    const plotHeight = svgHeight - margin.top - margin.bottom;

    let data = [0.000001, 0.001, 0.005, 0.01, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.75, 1, 1.5, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const logarithmPictureSVG = d3.select('#' + divId)
        .append('svg')
        .attr('viewBox', '0 0 ' + svgWidth + ' ' + svgHeight)
        .attr('preserveAspectRatio', 'xMidYMid meet');

    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, plotWidth]);

    const yScale = d3.scaleLinear()
        .domain([-4, 4])
        .range([plotHeight, 0]);

    const xAxis = d3.axisBottom(xScale)
        .tickValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const yAxis = d3.axisLeft(yScale);

    const plotGroup = logarithmPictureSVG.append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const xAxisGroup = plotGroup.append('g')
        .attr('transform', `translate(0, ${plotHeight / 2})`)
        .call(xAxis);

    xAxisGroup.append('text') // axis label
        .attr('x', plotWidth + 10)
        .attr('y', 5)
        .attr('fill', 'black')
        .attr('font-size', 14)
        .text('x');

    const yAxisGroup = plotGroup.append('g')
        .call(yAxis);

    yAxisGroup.append('text') // axis label
        .attr('y', -5)
        .attr('fill', 'black')
        .attr('font-size', 14)
        .text('y');

    const line = d3.line()
        .x(datum => xScale(datum))
        .y(datum => yScale(Math.log2(datum)))
        .curve(d3.curveBasis);

    plotGroup.append('path')
        .attr('d', line(data))
        .attr('fill', 'none')
        .attr('stroke', 'steelBlue');

    // correct way: https://stackoverflow.com/a/50942335/9171260
    plotGroup.append('text')
        .attr('x', plotWidth / 2)
        .attr('y', -5)
        .attr('text-anchor', 'middle')
        .text('y = log\u2082 x')
}
