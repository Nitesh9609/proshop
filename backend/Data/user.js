import bcrypt from 'bcryptjs'

const users = [
    {
        name: "nitesh",
        email: "test@test.com",
        password: bcrypt.hashSync("1234567890", 10),
        isAdmin: true,
    },
    {
        name: "ram",
        email: "test1@test.com",
        password: bcrypt.hashSync("1234567890", 10),
        isAdmin: false,
    },
    {
        name: "shyam",
        email: "test2@test.com",
        password: bcrypt.hashSync("1234567890", 10),
        isAdmin: false,
    },
    {
        name: "ghanshyam",
        email: "test3@test.com",
        password: bcrypt.hashSync("1234567890", 10),
        isAdmin: false,
    },
]

export default users