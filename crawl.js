const { JSDOM } = require('jsdom');

function getUrlsFromHtml(htmlBody, baseUrl){ 
    const urls = [];
    const dom = new JSDOM(htmlBody);
    const linkElements = dom.window.document.querySelectorAll('a');
    for (const linkElement of linkElements){
        if(linkElement.href.slice(0,1)==='/'){
            urls.push(`${baseUrl}${linkElement.href}`)
        } else {
            urls.push(`${linkElement.href}`)
        }
    }
    return urls;
}
//baseUrl here is the url of the site we are crawling
//htmlBody will be a string representing the html on the site

async function crawlPage(currentURL) {
    console.log(`Actively crawling ${currentURL}...`);
    const resp = await fetch(currentURL);
    console.log('response text: ', await resp.text());
}

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
    getUrlsFromHtml,
    crawlPage
}