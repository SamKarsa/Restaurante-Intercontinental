const path = require('path');

exports.OrderNow = (req, res)=>{
    res.sendFile(path.join(__dirname, '../views/Order_Now/Order_Now.html'));
}