const rules = [
  {
    from: /void (\w*)\(\)/gm,
    to: "function $1()"
  }
];

export default function(content) {
  rules.forEach(r => (content = content.replace(r.from, r.to)));
  return content;
}
