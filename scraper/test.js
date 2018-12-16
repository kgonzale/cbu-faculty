const express = require("express");
const app = express();
const port = 3000;
const $ = require("cheerio");
const axios = require("axios");

app.get("/faculty", async (req, res) => {
  // async function scraper(){

  // }

  const html = await axios(
    "http://catalogs.rutgers.edu/generated/nb-ug_current/pg159.html"
  );

  const scrape = $("div.item-container", html).map(item => {
    return {
      code: $(".course-annotation", container).text()
    };
  });

  res.send(scrape);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
