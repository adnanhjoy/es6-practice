const friendsName = ['Adnan', 'Joy', 'Farhan', 'Saimon'];

const friends = (names) => {
    let newFriend = [];
    for (let name of names) {
        if (name.length % 2 === 0) {
            newFriend.push(name);

        }
    }
    return newFriend;
}

const namesLength = friends(friendsName);
console.log(namesLength)