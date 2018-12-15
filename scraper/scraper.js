const $ = require("cheerio");
const axios = require("axios");

async scrapeCBU = () => {
    const html = await axios('https://www.cbu.edu/faculty-staff');
    let faculty = [];

    $('h2.staff-directory-department', html).map(item =>{
        faculty.push({
            title: $('staff-member-title', item)
        });
    });

    return faculty;
};


