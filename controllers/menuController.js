const path = require('path');

exports.Menu = (req, res)=>{
    res.sendFile(path.join(__dirname, '../views/Menu/Menu.html'));
}