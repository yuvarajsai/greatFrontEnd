/*

classnames is a commonly-used utility in modern front end applications to conditionally join CSS class names together. If you've written React applications, you likely have used a similar library.

Implement the classnames function.

classNames('foo', 'bar'); // 'foo bar'
classNames('foo', { bar: true }); // 'foo bar'
classNames({ 'foo-bar': true }); // 'foo-bar'
classNames({ 'foo-bar': false }); // ''
classNames({ foo: true }, { bar: true }); // 'foo bar'
classNames({ foo: true, bar: true }); // 'foo bar'
classNames({ foo: true, bar: false, qux: true }); // 'foo qux'

Arrays will be recursively flattened as per the rules above.
classNames('a', ['b', { c: true, d: false }]); // 'a b c'

Values can be mixed.

classNames(
  'foo',
  {
    bar: true,
    duck: false,
  },
  'baz',
  { quux: true },
); // 'foo bar baz quux'

Falsey values are ignored.

classNames(null, false, 'bar', undefined, { baz: null }, ''); // 'bar'

In addition, the returned string should not have any leading or trailing whitespace.

*/

export type ClassValue =
	| ClassArray
	| ClassDictionary
	| string
	| number
	| null
	| boolean
	| undefined;
export type ClassDictionary = Record<string, any>;
export type ClassArray = Array<ClassValue>;

export default function classNames(...args: Array<ClassValue>): string {
	const validClasses: string[] = [];
	const iterateArray = (arr: Array<ClassValue>) =>
		arr.forEach((arg) => {
			if (
				typeof arg === null ||
				typeof arg === undefined ||
				typeof arg === "boolean" ||
				!arg
			) {
				return;
			} else if (typeof arg === "string") {
				validClasses.push(arg);
			} else if (typeof arg === "number") {
				validClasses.push(String(arg));
			} else if (Array.isArray(arg)) {
				iterateArray(arg);
			} else {
				Object.entries(arg as ClassDictionary).forEach((key) => {
					if (!key[1]) return;
					validClasses.push(key[0]);
				});
			}
		});
	iterateArray(args);
	return validClasses.map((cls) => cls.trim()).join(" ");
}
