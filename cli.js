
const { Sequelize } = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize('postgres', 'postgres', process.env.PGPASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
})

sequelize.query('SELECT * FROM blogs')
    .then(result => {
        console.log(result[0].length + ' blogs found');
        result[0].forEach(blog => console.log(`${blog.author}: '${blog.title}', ${blog.likes} likes`))
    })
    .finally(() => {
        sequelize.close()
            .then(() => console.log('Connection closed'))
            .catch(err => console.error('Error closing connection', err));
    });

module.exports = sequelize;