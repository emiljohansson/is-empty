import test from 'ava';
import isEmpty from './';

test('exist', (t) => {
    const actual = typeof isEmpty;
    const expected = 'function';
    t.is(actual, expected);
});

test('truthy', (t) => {
    t.truthy(isEmpty({}));
    t.truthy(isEmpty([]));
    t.truthy(isEmpty(''));
});

test('falsy', (t) => {
    t.falsy(isEmpty({a: 42}));
    t.falsy(isEmpty(['foo']));
    t.falsy(isEmpty('foo'));
    t.falsy(isEmpty(0));
    t.falsy(isEmpty());
    t.falsy(isEmpty(null));
    t.falsy(isEmpty(isNaN));
});
