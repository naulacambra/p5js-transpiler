const rules = [
  {
    from: /size\((\d+),\s?(\d+)\)/gm,
    to: "createCanvas($1, $2)"
  },
  {
    from: /println\((.*)\)/gm,
    to: "console.log($1)"
  },
  {
    from: /(int|float|double|long|char|String|Array|PGraphics)\s(\w*)(;|\s=)/gm,
    to: "let $2$3"
  },
  {
    from: /(int|float|double|long|char|String|Array)\s(\w*)([,)])/gm,
    to: "$2$3"
  },
  {
    from: /void (\w*)\((.*)\)/gm,
    to: "function $1($2)"
  },
  {
    from: /(\w*\.beginDraw\(\))/gm,
    to: "// $1"
  },
  {
    from: /(\w*\.endDraw\(\))/gm,
    to: "// $1"
  }
];

export default function(content) {
  if (!/setup/gm.test(content)) {
    content = `function setup() { \n${content}\n}`;
  }
  rules.forEach(r => (content = content.replace(r.from, r.to)));
  return content;
}
