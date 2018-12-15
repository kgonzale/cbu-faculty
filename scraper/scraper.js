const $ = require("cheerio");
const axios = require("axios");
const fs = require("fs");

async function scrapeCBU() {
  const html = await axios("https://www.cbu.edu/faculty-staff");
  let faculty = [];

  $("h2.staff-directory-department", html).map(item => {
    faculty.push({
      title: $("staff-member-title", item)
    });
  });

  console.log(faculty);

  fs.writeFile("faculty.json", JSON.stringify(faculty), function(err) {
    if (err) throw err;
    console.log("complete");
  });
}

scrapeCBU();
