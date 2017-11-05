var execSync = require('child_process').execSync;var gitTree = (project) => {
    const dir = process.cwd();    process.chdir(project);    var branches = execSync('git branch --list --all ').toString()        .trim().split(/\s*\n\s*\**\s*/ig)        .map(b => b.replace('remotes/', '').trim());    // reverse git so we can add merges to the "graph" after the branch tree is constructed    var branch = execSync('git log --pretty=format:"%ct %d %h %p" '        + '--reverse --branches --tags ').toString().split(/\s*\n\s*/ig);    var all = []; //execSync('git log --pretty=format:"%h %p" --reverse --all').toString().split(/\s*\n\s*/ig);    var nodes = [];    var edges = [];    branch.forEach(b => {        var commits = ((/[0-9]+\s+\(.*?\)\s*(.+)/ig).exec(b)            || (/[0-9]+\s+(.+)/ig).exec(b) || [b, b.trim()])[1].trim().split(/\s+/ig);        commits.forEach(r => {            if (nodes.filter(d => d.name == r).length == 0) {                nodes[nodes.length] = {                    name: r,                    index: nodes.length,                    branch: ((/[0-9]+\s+\((.*?)\)/ig).exec(b) || [b, ''])[1],                    time: (/([0-9]+)\s+/ig).exec(b)[1]                }            }        });        // don't include merges in tree        if (commits.length == 3) {            commits = [commits[0], commits[2]];        }        if (commits.length == 2) {            edges = edges.concat(commits.slice(1)            // check all existing sources to test for merge                .map((c, i) => {                    return {source: c, target: commits[i]}; // -1 because of slice(1)                }))        }    });    process.chdir(dir);
    return formatNodes(nodes, edges.reverse());
}module.exports = gitTree;gitTree;