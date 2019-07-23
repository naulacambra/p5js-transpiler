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
    from: /(int|float|double|long|char|String|Array|PGraphics)\[?\]?\s(\w*)(;|\s=)/gm,
    to: "let $2$3"
  },
  {
    from: /(int|float|double|long|char|String|Array|int)\[?\]?\s(\w*)([,)])/gm,
    to: "$2$3"
  },
  {
    from: /void (\w*)\((.*)\)/gm,
    to: "function $1($2)"
  },
  {
    from: /(\w*\.(beginDraw|endDraw)\(\))/gm,
    to: "// $1"
  },
  {
    from: /{([\w\d,\s]*)}/gm,
    to: "[$1]"
  },
  {
    from: /(pushMatrix)\(\);/gm,
    to: "push();"
  },
  {
    from: /(popMatrix)\(\);/gm,
    to: "pop();"
  }
];

export default function(content) {
  if (!content) return content;
  if (!/setup/gm.test(content)) {
    content = `function setup() { \n${content}\n}`;
  }
  return rules.reduce((acc, curr) => acc.replace(curr.from, curr.to), content);
}
