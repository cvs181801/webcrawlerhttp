//const { normalizeUrl } = require('./crawl.js');
const { normalizeUrl } = require("./crawl");
const { test, expect } = require('@jest/globals');

test('normalizeUrl', () => {
    const input = 'https://www.google.com/path';
    const actual = normalizeUrl(input);
    const expected = 'www.google.com/path';
    expect(actual).toEqual(expected);
})