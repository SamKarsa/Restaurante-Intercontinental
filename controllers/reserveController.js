const path = require('path');

exports.Reserve = (req, res)=>{
    res.sendFile(path.join(__dirname, '../views/Reserve/Reserve.html'));
}