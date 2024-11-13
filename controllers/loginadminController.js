const path = require('path');

exports.LogIn = (req, res)=>{
    res.sendFile(path.join(__dirname, '../views/Log_In_Admin/Log_In_Admin.html'));
}
