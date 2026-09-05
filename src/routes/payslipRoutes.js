const express = require("express");

const router = express.Router();

const controller = require("../controllers/payslipController");

router.post(
    "/upload",
    (req, res, next) => {
        req.app.locals.upload.single("payslip")(req, res, next);
    },
    controller.uploadPayslip
);

module.exports = router;