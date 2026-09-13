const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

// Replace window.lucide?.icons['iconName'] with window.lucide?.icons['IconName']
// E.g. 'arrowDownRight' -> 'ArrowDownRight'

html = html.replace(/window\.lucide\?\.icons\['([a-zA-Z0-9]+)'\]/g, (match, p1) => {
    // Capitalize first letter
    const pascal = p1.charAt(0).toUpperCase() + p1.slice(1);
    return `window.lucide?.icons['${pascal}']`;
});

fs.writeFileSync('index.html', html);
console.log('Fixed icon PascalCase issue!');
