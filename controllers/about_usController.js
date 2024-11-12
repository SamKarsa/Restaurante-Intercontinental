const path = require('path');

exports.AboutUs = (req, res)=>{
    res.sendFile(path.join(__dirname, '../views/About_Us/About_Us.html'));
}