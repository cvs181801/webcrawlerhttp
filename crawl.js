const { JSDOM } = require('jsdom');

function getUrlsFromHtml(htmlBody, baseUrl){ 
    const urls = [];
    const dom = new JSDOM(htmlBody);
    const linkElements = dom.window.document.querySelectorAll('a');
    return urls;
}
//baseUrl here is the url of the site we are crawling
//htmlBody will be a string representing the html on the site

function normalizeUrl(urlString){
    const urlObj = new URL(urlString)
    const hostPath = `${urlObj.hostname}${urlObj.pathname}`;
    if (hostPath.length > 0 && hostPath.slice(-1) === '/') {
        return hostPath.slice(0, -1);
    }
    return hostPath;
}

module.exports = {
    normalizeUrl,
    getUrlsFromHtml
}