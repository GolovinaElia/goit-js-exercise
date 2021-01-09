// Возможность открыть живой чат online  и не dnd (режим не беспокоить)
const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;
console.log('canOpenChat:', canOpenChat);