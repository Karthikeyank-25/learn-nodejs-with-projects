// How to use Native Node Modules :
//          Native modules are the built-in modules that come pre-installed with Node.js.

// How to can use them :

// 1.Import the Module :
        require()                       // Use the require() function to load a native module.
        const fs = require('fs');       // File System module

// 2.Use the Module’s Functions :
//      Using 'fs' (File System) to read files :

        const data = fs.readFileSync('example.txt', 'utf-8');
        console.log(data);
