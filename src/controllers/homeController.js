import db from "../models/index"

let getHomePage = async (req, res) => {
    let data = await db.User.findAll();
    return res.render('homePage.ejs', {
        data: JSON.stringify(data)
    });
};
let getAbout = (req, res) => {
    return res.render('test/aboutMe.ejs')
};

module.exports = {
    getHomePage: getHomePage,
    getAbout: getAbout
};