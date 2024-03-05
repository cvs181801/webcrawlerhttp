
urlString = 'https://www.google.com';

function normalizeUrl(urlString){
    const urlObj = new URL(urlString)
    console.log('urlString', urlString)
    console.log(urlObj.hostname)
    console.log(urlObj.pathname)
   
    return `${urlObj.hostname}${urlObj.pathname}`;
}

module.exports = {
    normalizeUrl
}