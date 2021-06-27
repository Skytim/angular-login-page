var express = require('express');
var router = express.Router();

/* Post login listing. */
router.post('/', function (req, res, next) {
  var ReturnCode = -99;
  var ReturnMessage = '';
  var ReturnMessageTitle = '';
  if (req.body.Acc === 'A123456789' && req.body.UserID === 'testuserid1' && req.body.Pw === '1234abcd') {
    ReturnCode = 0;
  }
  else if (req.body.Acc === 'B123456789' && req.body.UserID === 'testuserid2' && req.body.Pw === '1234abcd') {
    ReturnCode = -11;
    ReturnMessage = '你需要設定新密碼';
    ReturnMessageTitle = '關於設定新密碼';
  }
  else if (req.body.Acc === 'C123456789' && req.body.UserID === 'testuserid3' && req.body.Pw === '1234abcd') {
    ReturnCode = -14
  }

  res.json({
    "po_Login_19_2": {
      "ReturnCode": ReturnCode,
      "ReturnMessage": ReturnMessage,
      "ReturnMessageTitle": ReturnMessageTitle,
      "TokenMP": "",
      "Token": "BA7F6963-442B-4AC1-A38A-EBEEC1B2516B",
      "Name": "曾 O 永",
      "Name_ImgBase64": "",
      "F1EmailAddress": "445905@test.com.tw",
      "F1Mobile": "0912345678",
      "SSLIsEffective": "",
      "Announce": [],
      "LastLoginSuccessDT": [], "LastLoginFailDT": [],
      "DeviceIsBoundByCurrentUser": ""
    }
  });

});

module.exports = router;
