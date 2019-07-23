const rules = [
  {
    from: /void (\w*)\(\)/gm,
    to: "function $1()"
  },
  {
    from: /size\((\d+),\s?(\d+)\)/gm,
    to: "createCanvas($1, $2)"
  },
  {
    from: /println\((.*)\)/gm,
    to: "console.log($1)"
  },
  {
    from: /(int|float|double|long|char|String|Array)\s/gm,
    to: "let "
  }
];

export default function(content) {
  rules.forEach(r => (content = content.replace(r.from, r.to)));
  return content;
}
