import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    { message: "Type in your URL: ", name: "URL" },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // console.log(answers);
    /* ? Type in your URL:  humba
    { URL: 'humba' } */
    const url = answers.URL;

    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", url, (err) => {
      console.log("The file has been saved!");
    });
  });
