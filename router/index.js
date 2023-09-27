const express = require("express");
const { StatusCodes } = require("http-status-codes");
const { setVapidDetails } = require("../web-push");
const subscription = express.Router();

subscription.post("/subscribe-push-notifications", async (req, res) => {
    const subscription = req.body;
    console.log(subscription);

    return res.status(StatusCodes.OK).json({
        success: true,
        data: "Push notifications subscription successful",
    });

    setVapidDetails(subscription);
});

module.exports = { subscription };
