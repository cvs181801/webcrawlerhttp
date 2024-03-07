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
    try {
        const resp = await fetch(currentURL);
        if (resp.status > 399) {
            console.log(`error fetching this website : ${currentURL}. Status code is ${resp.status}.`);
            return;
        }
        console.log('response text: ', await resp.text());
        const contentType = resp.headers.get("content-type");
        if (contentType !== "text/html"){
            console.log(`Error fetching this website : ${currentURL}. The content type is ${contentType}, but we were expecting HTML.`);
            return; 
        }
    } catch (err) {
        console.log(`I'm sorry, we are having trouble crawling ${currentURL}. Please try again. Error code: ${err.message}`)
    }
    
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