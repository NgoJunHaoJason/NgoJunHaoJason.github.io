console.log(typeof (addLoadEvent));

d3.csv('lab_3_csv/cz2001_lab3_merge_sort_random_results.csv')
    .then(function(data) {
        data.forEach(function(datum) {
            datum['Array Size'] = Number(datum['Array Size']);
            datum['Number of Key Comparisons'] = Number(datum['Number of Key Comparisons']);
            datum['CPU time taken for sorting'] = Number(datum['CPU time taken for sorting']);
        });
        console.log(data[0]);
    });