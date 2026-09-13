const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

html = html.replace(/const ([A-Za-z0-9]+) = \(\{ className = "", size = 24, color = "currentColor", \.\.\.props \}\) => \{\s*const iconNode = window\.lucide\?\.icons\['([^']+)'\];\s*if \(!iconNode\) return null;\s*return <span[^>]*dangerouslySetInnerHTML[^>]*><\/span> \/>;\s*\};/g, 
(match, p1, p2) => {
    return `const ${p1} = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconData = window.lucide?.icons['${p2}'];
    if (!iconData) return null;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}
        >
            {iconData.map(([tag, attrs], i) => {
                const Tag = tag;
                return <Tag key={i} {...attrs} />;
            })}
        </svg>
    );
};`;
});

// Since the `return <span...` has a specific format:
// return <span className={className} dangerouslySetInnerHTML={{ __html: iconNode.toSvg({ class: className, width: size, height: size, stroke: color, ...props }) }} />;

html = html.replace(/const ([A-Za-z0-9]+) = \(\{ className = "", size = 24, color = "currentColor", \.\.\.props \}\) => \{[\s\n]*const iconNode = window\.lucide\?\.icons\['([^']+)'\];[\s\n]*if \(!iconNode\) return null;[\s\n]*return <span className=\{className\} dangerouslySetInnerHTML=\{\{ __html: iconNode\.toSvg\(\{ class: className, width: size, height: size, stroke: color, \.\.\.props \}\) \}\} \/>;[\s\n]*\};/g,
(match, p1, p2) => {
    return `const ${p1} = ({ className = "", size = 24, color = "currentColor", ...props }) => {
    const iconData = window.lucide?.icons['${p2}'];
    if (!iconData) return null;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}
        >
            {iconData.map(([tag, attrs], i) => {
                const Tag = tag;
                return <Tag key={i} {...attrs} />;
            })}
        </svg>
    );
};`;
});


fs.writeFileSync('index.html', html);
console.log('Fixed icon body definitions!');
