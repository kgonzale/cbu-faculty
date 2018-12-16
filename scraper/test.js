const express = require("express");
const app = express();
const port = 3000;
const $ = require("cheerio");

app.get("/faculty", (req, res) => {
  const html = axios("https://www.cbu.edu/faculty-staff");

  const scrape = $("h2.staff-directory-department", html).map(item => {
    return {
      title: $("staff-member-title", item).text()
    };
  });

  res.send(scrape);

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});
