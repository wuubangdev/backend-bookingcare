let getHomePage = (req, res) => {
    return res.render('homePage.ejs');
};
let getAbout = (req, res) => {
    return res.render('test/aboutMe.ejs')
};

module.exports = {
    getHomePage: getHomePage,
    getAbout: getAbout
};