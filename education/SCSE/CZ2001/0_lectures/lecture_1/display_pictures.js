displaySetsPicture();

function displaySetsPicture() {
    const svgWidth = 720;
    const svgHeight = 480;

    const setsPictureSVG = d3.select('#sets_picture')
        .append('svg')
            .attr('viewBox', '0 0 ' + svgWidth + ' ' + svgHeight)
            .attr('preserveAspectRatio', 'xMidYMid meet');
    
    const xOffset = 100;
    const yOffset = 100;
    const circleRadius = 60;

    const alphabetSet = setsPictureSVG.append('g')
        .attr('transform', `translate(${xOffset}, ${yOffset})`);

    alphabetSet.append('circle')
        .attr('r', circleRadius)
        .attr('fill', 'turquoise')
        .attr('stroke', 'black')
    
    alphabetSet.append('text')
        .attr('text-anchor', 'center')
        .attr('x', -circleRadius)
        .attr('y', -circleRadius - 10)
        .attr('font-size', 24)
        .text('alphabets');

    let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');

    const numDisplayedAlphabets = 5;

    for (let index = 0; index < numDisplayedAlphabets; ++index) {
        const alphabetIndex = Math.floor(Math.random() * alphabets.length)
        const alphabet = alphabets.splice(alphabetIndex, 1);

        alphabetSet.append('text')
            .attr('text-anchor', 'center')
            .attr('x', -5)
            .attr('y', 20 * index - 30)
            .text(alphabet);
    }

    setsPictureSVG.append('text')
        .attr('x', svgWidth - 300)
        .attr('y', svgHeight - 20)
        .attr('font-size', 24)
        .text('TODO: add more examples');
}