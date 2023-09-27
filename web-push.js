const webPush = require("web-push");
const { PUBLIC_VAPID, PRIVATE_VAPID } = require("./constant");

const vapidDetails = () => {
    return webPush.setVapidDetails(
        "mailto: seunawonugba@gmail.com",
        PUBLIC_VAPID,
        PRIVATE_VAPID
    );
};
const setVapidDetails = (sub) => {
    const payload = JSON.stringify({ title: "Section.io Push Notification" });

    try {
        const notifications = webPush.sendNotification(sub, payload);
        console.log(notifications);
        return notifications;
    } catch (error) {
        console.log(error);
        return error;
    }
};

module.exports = { setVapidDetails, vapidDetails };
