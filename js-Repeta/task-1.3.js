// Создать функцию для изменения названия отеля в обьекте.
const hotel = {
    name: 'Sunset resort',
    stars: 5,
    capacity: 200
};
const updateHotelName = function (hotel, newName) {
    hotel.name = newName;
}
updateHotelName(hotel, 'Lagoon');
console.log(hotel);