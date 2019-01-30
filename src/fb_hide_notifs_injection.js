function clearNotificationBadgeFromTitle() {
    document.title = document.title.replace(/\(\d+\)\s/, '')
}

setInterval(clearNotificationBadgeFromTitle, 50);
