// Проверка подписки пользователя при доступе к контенту
const subscription = 'free';
const canAccessContent = subscription === 'pro' || subscription === 'vip';
console.log('canAccessContent:', canAccessContent);