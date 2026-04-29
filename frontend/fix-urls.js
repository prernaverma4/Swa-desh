const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.match(/\.(js|jsx|ts|tsx)$/)) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(srcDir);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Replace string literals (single or double quotes)
    content = content.replace(/['"]http:\/\/(127\.0\.0\.1|localhost):5000\/api\/?(.*?)['"]/g, "(process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000/api') + '/$2'");
    
    // Replace inside template literals (backticks)
    content = content.replace(/`http:\/\/(127\.0\.0\.1|localhost):5000\/api\/?/g, "`${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000/api'}/");

    if (content !== original) {
        console.log(`Updated ${file}`);
        fs.writeFileSync(file, content, 'utf8');
    }
});
