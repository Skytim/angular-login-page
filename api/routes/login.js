var express = require('express');
var router = express.Router();

/* Post login listing. */
router.post('/', function (req, res, next) {
  if (req.body.Acc === 'A123456789' && req.body.UserID === 'testuserid1' && req.body.Pw === '1234abcd') {
    res.json({
      "po_Login_19_2": {
        "ReturnCode": 0,
        "ReturnMessage": "",
        "ReturnMessageTitle": "",
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
  }
  else if (req.body.Acc === 'B123456789' && req.body.UserID === 'testuserid2' && req.body.Pw === '1234abcd') {
    res.json({
      "po_Login_19_2": {
        "ReturnCode": -11,
        "ReturnMessage": "",
        "ReturnMessageTitle": "",
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
  }
  else if (req.body.Acc === 'C123456789' && req.body.UserID === 'testuserid3' && req.body.Pw === '1234abcd') {
    res.json({
      "po_Login_19_2": {
        "ReturnCode": -14,
        "ReturnMessage": "",
        "ReturnMessageTitle": "",
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
  }
  else if (req.body.Acc === 'D123456789' && req.body.UserID === 'testuserid4' && req.body.Pw === '1234abcd') {
    res.json({
      "po_Login_19_2": {
        "ReturnCode": -99,
        "ReturnMessage": "",
        "ReturnMessageTitle": "",
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
  }

});

module.exports = router;
