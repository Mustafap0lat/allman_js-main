let users = [
    {
        "id": 1,
        "firstname": "Alice",
        "lastname": "Alicesdotter"
    },
    {
        "id": 2,
        "firstname": "Gunnar",
        "lastname": "Gunnarsson"
    },
]

const removeById = (id) => {
    users = users.filter(user => user.id != id)
}

const updateUserById = (id, newProperties) => {
    users = users.map(user => user.id == id ? { ...user, ...newProperties } : user)
    return users.find(user => user.id == id);
}

export { users, removeById, updateUserById };