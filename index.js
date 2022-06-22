const puppeteer = require('puppeteer');
const fse = require('fs-extra'); // v 5.0.0
const path = require('path');
const template = require('./htmlTemplate');

const runer = async () => {
  const scraperController = require('./pageController');

  const browser = await puppeteer.launch();

  let contents = await scraperController(browser); 

  let filePath = path.resolve(`./output`);
  filePath = `${filePath}/index.html`;
  await fse.outputFile(filePath, template(contents));

  fse.copy("./sources/font", "./output/font", function (err) {
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy completed!')
  });


  console.log("done");

  setTimeout(async () => {
    await browser.close();
    console.log("closed");
  }, 10000);
}

runer();
