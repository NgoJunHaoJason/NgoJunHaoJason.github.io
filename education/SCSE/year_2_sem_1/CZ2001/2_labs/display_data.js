console.log(typeof (addLoadEvent));

d3.csv(
    'lab_3_csv/cz2001_lab3_merge_sort_random_results.csv',
    function(datum) {
        return {
            arraySize: Number(datum['Array Size']),
            numKeyComparisons: Number(datum['Number of Key Comparisons']),
            timeTaken: Number(datum['CPU time taken for sorting']),
        };
    }
).then(function(data) {
        console.log(data[0]);
    });