const { crawlPage } = require('./crawl.js');

function main() {
    if (process.argv.length < 3) {
        console.log("no website provided. Exiting.")
        process.exit(1);
    }
    else if (process.argv.length > 3) {
        console.log("too many command line arguments. Exiting.")
        process.exit(1);
    }
    const baseURL = process.argv[2];
    console.log(`Starting the crawl for ${baseURL}!`);
    crawlPage(baseURL);
}

main()

//process is a global object in javascript, and the argv property grabs the command line arguments.  
//If the length of that array of command line args only contains 1-2 items, that means that there was no command entered.
//This is because the first 2 default items in this array always appear as: process.argv = ['node', 'main.js', ...]
//The third item in the array will be the command you enter into the command line
