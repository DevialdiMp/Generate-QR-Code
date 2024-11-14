const router = require("express").Router();
const HandleQr = require("../controllers/handleQr");

router.get("/dashboard", (req, res) => {
    res.send("Generate ur QR Code");
});

router.get("/qrcodeone", HandleQr.generateQr);
router.get("/qrcodetwo", HandleQr.generateAnotherQr);

module.exports = router;