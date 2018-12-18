const express = require("express");
const app = express();
const port = 3000;
const cheerio = require("cheerio");
const axios = require("axios");

app.get("/faculty", async (req, res) => {
  const html = await axios("https://www.cbu.edu/faculty-staff").then(
    res => res.data
  );

  const $ = cheerio.load(html);

  let arrayInfo = [];

  $("li.staff-directory-department").map((item, index) => {
    arrayInfo.push({
      id: $("h2.staff-directory-department", index)
        .text()
        .trim(),
      name: $("h3.staff-member-name", index)
        .text()
        .split("\n")
        .map(splitString => splitString.trim())
        .filter(trimString => trimString.length > 0),
      title: $("p.staff-member-title", index).text()
    });
  });

  console.log(arrayInfo[0]);

  res.send(arrayInfo);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
