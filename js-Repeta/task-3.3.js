const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: true },
    { name: 'Ajax', online: false }
];
console.table(friends);

// Ищем друга по имени

const findFriendByName = function (allFriends, name) {
    for (const friend of friends) {
        console.log(friend);
        if (friend.name === name) {
            return 'Нашли!';
        }
    }
    return 'Не нашли!';
};

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// Получаем имена всех друзей.

const getAllNames = function (allFriends) {
    const names = [];

    for (const friend of allFriends) {
        names.push(friend.name);
    }
    return names;
};
// console.log(getAllNames(friends));

//  Получаем имена друзей, которые только онлайн.

const getOnlineFriend = function (allFriend) {
    const names = [];
    for (const friend of allFriend) {
        console.log(friend);
        if (friend.online) {
         names.push(friend.name);
    }
}
    return names;
}
console.log(getOnlineFriend(friends));