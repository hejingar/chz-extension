console.log("CHZ Extension Background Script loaded");
chrome.runtime.onInstalled.addListener((details) => {
  console.log("CHZ Extension installed:", details.reason);
  if (details.reason === "install") {
    console.log("First time installation");
  } else if (details.reason === "update") {
    console.log("Extension updated");
  }
});
chrome.runtime.onStartup.addListener(() => {
  console.log("CHZ Extension started");
});
chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  console.log("Background received message:", request);
  if (request.type === "ping") {
    sendResponse({ success: true, message: "pong" });
  }
  return true;
});
chrome.notifications.onClicked.addListener((notificationId) => {
  console.log("Notification clicked:", notificationId);
});
console.log("CHZ Extension Background Script initialized");
