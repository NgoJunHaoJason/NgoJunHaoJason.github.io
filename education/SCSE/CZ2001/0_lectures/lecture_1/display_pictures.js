displaySetsPicture('sets_picture');
displayFunctionPicture('function_picture');

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

    const groupEnter = numberGroup.selectAll('g').data(numberSets)
        .enter().append('g');

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