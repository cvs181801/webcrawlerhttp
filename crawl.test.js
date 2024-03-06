
const { normalizeUrl, getUrlsFromHtml } = require("./crawl");
const { test, expect } = require('@jest/globals');

test('normalizeUrl', () => {
    const input = 'https://www.google.com/path';
    const actual = normalizeUrl(input);
    const expected = 'www.google.com/path';
    expect(actual).toEqual(expected);
})

test('getUrlsFromHtml', () => {
    const inputHtmlBody = `
    <html>
        <body>
            <a href="https://www.somewackywebsite.com/wackadoodle"> 
                Click Here to Visit My Wacky Website!
            </a>

            <a href="https://www.somedumbwebsite.com/dumbthingsgohere"> 
                Click Here to Visit My Dumb Website!
            </a>

        </body>
    </html>
    `
    const inputBaseUrl = 'https://www.somewackywebsite.com';
    const actual = getUrlsFromHtml(inputHtmlBody, inputBaseUrl);
    const expected = ["https://www.somewackywebsite.com/wackadoodle", "https://www.somedumbwebsite.com/dumbthingsgohere"];
    expect(actual).toEqual(expected);
})