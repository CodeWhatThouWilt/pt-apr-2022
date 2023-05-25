# Chai Methods and Language Chains

note: If you want the area of the docs that this can be found in, here's a link:
https://www.chaijs.com/api/bdd/

## Language chains (Syntactic sugar, not necessary to make things work)

These improve readability but add 0 functionality so they won't affect anything at all. Feel free to chain them however you'd like:

- to
- be
- been
- is
- that
- which
- and
- has
- have
- with
- at
- of
- same
- but
- does
- still
- also

## Assertion Methods

These are the methods that perform actual assertion checks. They do affect functionality of your tests:

- .not - Negates any of assertions following in the chain.

- .deep - Sets the deep flag used in comparing objects.

- .nested - Sets the nested flag, enabling dot- and bracket-notation when accessing object properties.

- .own - Sets the own flag, causing .property and .include to use the Object.prototype.hasOwnProperty method.

- .ordered - Sets the ordered flag, requiring array members to appear in the same order.

- .any and .all - Set the any or all flag.

- .ok - Asserts that the target is truthy.

- .true - Asserts that the target is true.

- .false - Asserts that the target is false.

- .null - Asserts that the target is null.

- .undefined - Asserts that the target is undefined.

- .NaN - Asserts that the target is NaN.

- .exist - Asserts that the target is neither null nor undefined.

- .empty - Asserts that the target's length is 0.

- .arguments - Asserts that the target is an arguments object.

- .equal(value) - Asserts that the target is strictly (===) equal to value.

- .eql(value) - Asserts that the target is deeply equal to value.

- .above(value) - Asserts that the target is greater than value.

- .least(value) - Asserts that the target is greater than or equal to value.

- .below(value) - Asserts that the target is less than value.

- .most(value) - Asserts that the target is less than or equal to value.

- .within(start, finish) - Asserts that the target is within a range.

- .instanceof(constructor) - Asserts that the target is an instance of constructor.

- .property(name, [value]) - Asserts that the target has a property name, optionally asserting that the value of that property is strictly equal to value.

- .lengthOf(value) - Asserts that the target's length property is value.

- .match(regexp) - Asserts that the target matches a regular expression regexp.

- .string(string) - Asserts that the target string contains another string.

- .keys(key1, [key2], [...]) - Asserts that the target has exactly the given keys, or includes the given keys.

- .throw([errorLike], [errMsgMatcher], [msg]) - Asserts that the function target will throw a specific type of error or specific type of error (as determined by the errorLike argument) with a message that matches errMsgMatcher.

- .respondTo(method) - Asserts that the object target will respond to a method.

- .itself - Sets the itself flag, thereafter asserting that the target's prototype property is value.

- .satisfy(method) - Asserts that the target passes a given truth test method.

- .closeTo(expected, delta) - Asserts that the target is approximately equal to expected, within a +/- delta range.

- .members(set) - Asserts that the target is a superset of set.

- .oneOf(list) - Asserts that the target is a member of list.

- .change(function) - Asserts that the value returned by function changes.

- .increase(function) - Asserts that the value returned by function increases.

- .decrease(function) - Asserts that the value returned by function decreases.

- .extensible, .sealed, .frozen - Asserts if target is extensible, sealed, or frozen.
