import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
// Get url input from users :

  .prompt([
    {
      message:"Type your URL :",
      name:"URL",
    }
  ])

// Convert that url input into readable img formate and then save it as file :
  
    .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_image.png"));

// Create txt file with that url input : 

    fs.writeFile("URL.txt", url, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
    });

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });