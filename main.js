function main() {
    if (process.argv.length < 3) {

    }
    console.log("starting the crawl!")
}

//process is a global object in javascript, and the argv property grabs the command line arguments.  
//If the length of that array of command line args only contains 1-2 items, that means that there was no command entered.
//This is because the first 2 default items in this array always appear as: process.argv = ['node', 'yourscript.js', ...]
//The third item in the array will be the command you enter into the command line
