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

  /* using push into of returning an object, because from the call cheerio call
     we get an object not an array*/
  // $("li.staff-directory-department").map((index, item) => {
  //   arrayInfo.push({
  //     title: $("p.staff-member-title")
  //       .text()
  //       .map((index, item) => {
  //         return index;
  //       })
  //     // id: $("h2.staff-directory-department", item)
  //     //   .text()
  //     //   .trim(),
  //     // name: $("h3.staff-member-name", item)
  //     //   .text()
  //     //   .split("\n")
  //     //   .map(splitString => splitString.trim())
  //     //   .filter(trimString => trimString.length > 0),
  //     // title: $("p.staff-member-title")
  //     //   .eq(index)
  //     //   .text(),
  //     // email: $("p.staff-member-email", item).text(),
  //     // phone: $("p.staff-member-phone", item).text()
  //   });
  // });

  // let arr = $("li.staff-directory-department")
  //   .get()
  //   .map(el => {
  //     return {
  //       title: $(el)
  //         .find("p.staff-member-title")
  //         .text()
  //     };
  //   });

  // console.log(arr);

  // console.log(arrayInfo[1]);

  let arr = $("li.staff-directory-department")
    .get()
    .map(el => {
      return {
        title: $(el)
          .find("p.staff-member-title")
          .text()
      };
    });

  console.log(arr);

  res.send(arrayInfo);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
