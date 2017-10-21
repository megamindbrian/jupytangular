var importer = require('../Core');
var wordCount = function (r) {
    var words = r['packages'].map(p => p.split('.ts/')[1])
        .concat(r['packages'].map(p => path.basename(p.split('.ts/')[0])))
        .concat(r['relatives'].map(r => path.basename(r)))
        .concat(r['relatives'].map(r => path.basename(r.split('.ts/')[0])));
    var wordCounts = {};
    words.forEach(w => {
        if (typeof wordCounts[w] === 'undefined') {
            wordCounts[w] = 1;
        } else {
            wordCounts[w]++;
        }
    });
    var resultWords = Object.keys(wordCounts).map((d) => ({name: d, size: wordCounts[d]}));
    var edges = [];
    r['packages'].forEach(
        p => edges[edges.length] = {source: p.split('.ts/')[1], target: path.basename(p.split('.ts/')[0])});
    r['relatives'].forEach(p => edges[edges.length] = {
        source: path.basename(p.split('.ts/')[0]),
        target: path.basename(p.split('.ts/')[1])
    });
    return {nodes: resultWords, edges: edges};
};

            words = r;
            var tree = wordCount(words);
        .catch(e => console.log(e))