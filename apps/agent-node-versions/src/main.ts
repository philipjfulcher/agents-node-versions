console.log('Hello World');

const strings = [
  // Lone leading surrogate
  'ab\uD800',
  'ab\uD800c',
  // Lone trailing surrogate
  '\uDFFFab',
  'c\uDFFFab',
  // Well-formed
  'abc',
  'ab\uD83D\uDE04c',
];

for (const str of strings) {
  // @ts-expect-error isWellFormed is node 20 feature
  console.log(str.isWellFormed());
}
