console.log(typeof (addLoadEvent));

d3.csv('lab_3_csv/cz2001_lab3_merge_sort_random_results.csv')
    .then(function(data) {
        console.log(data[0]);
    });