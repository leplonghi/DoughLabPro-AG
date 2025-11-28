
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/pages/learn');

function walk(dir, callback) {
    fs.readdir(dir, function (err, files) {
        if (err) throw err;
        files.forEach(function (file) {
            var filepath = path.join(dir, file);
            fs.stat(filepath, function (err, stats) {
                if (stats.isDirectory()) {
                    walk(filepath, callback);
                } else if (stats.isFile() && file.endsWith('.tsx')) {
                    callback(filepath);
                }
            });
        });
    });
}

walk(directoryPath, function (filepath) {
    fs.readFile(filepath, 'utf8', function (err, data) {
        if (err) throw err;

        let result = data.replace(/text-slate-900 dark:text-slate-200/g, 'text-slate-900');
        result = result.replace(/prose-sm dark:prose-invert max-w-none text-slate-700 dark:text-slate-300/g, 'prose-sm max-w-none text-slate-700');

        if (data !== result) {
            fs.writeFile(filepath, result, 'utf8', function (err) {
                if (err) throw err;
                console.log('Updated: ' + filepath);
            });
        }
    });
});
