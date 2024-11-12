const path = require('path');

exports.Home = (req, res)=>{
    res.sendFile(path.join(__dirname, '../views/Home/Home.html'));
}
