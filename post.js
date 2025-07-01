// const express = require('express');
// const fs = require('fs');
// const bodyParser = require('body-parser');
// const path = require('path');
// const app = express();
// const PORT = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// const loadData = () => {
//     try {
//         return JSON.parse(fs.readFileSync('data.json'));
//     } catch {
//         return [];
//     }
// };


// const saveData = (data) => {
//     fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
// };


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'index.html'));
// });

// app.get('/api/users', (req, res) => {
//     res.json(loadData());
// });

// app.post('/create', (req, res) => {
//     const users = loadData();
//     const newUser = {
//         id: Date.now(),
//         name: req.body.name
//     };
//     users.push(newUser);
//     saveData(users);
//     res.redirect('/');
// });

// app.post('/update', (req, res) => {
//     const users = loadData();
//     const user = users.find(u => u.id == req.body.id);
//     if (user) user.name = req.body.name;
//     saveData(users);
//     res.redirect('/');
// });

// app.post('/delete', (req, res) => {
//     let users = loadData();
//     users = users.filter(u => u.id != req.body.id);
//     saveData(users);
//     res.redirect('/');
// });

// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });


// const express = require('express');
// const fs = require('fs');
// const bodyParser = require('body-parser');
// const path = require('path');
// const app = express();
// const PORT = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// const loadData = () => {
//     try {
//         return JSON.parse(fs.readFileSync('data.json'));
//     } catch {
//         return [];
//     }
// };

// const saveData = (data) => {
//     fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
// };

// // Serve the HTML view
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'index.html'));
// });

// // API to get users (with optional search filter)
// app.get('/api/users', (req, res) => {
//     const users = loadData();
//     const search = req.query.search?.toLowerCase() || '';
//     const filteredUsers = users.filter(user => user.name.toLowerCase().includes(search));
//     res.json(filteredUsers);
// });

// // Create user
// app.post('/create', (req, res) => {
//     const users = loadData();
//     const newUser = {
//         id: Date.now(),
//         name: req.body.name
//     };
//     users.push(newUser);
//     saveData(users);
//     res.redirect('/');
// });

// // Update user
// app.post('/update', (req, res) => {
//     const users = loadData();
//     const user = users.find(u => u.id == req.body.id);
//     if (user) {
//         user.name = req.body.name;
//     }
//     saveData(users);
//     res.redirect('/');
// });

// // Delete user
// app.post('/delete', (req, res) => {
//     let users = loadData();
//     users = users.filter(u => u.id != req.body.id);
//     saveData(users);
//     res.redirect('/');
// });

// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });


const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const loadData = () => {
    try {
        return JSON.parse(fs.readFileSync('data.json'));
    } catch {
        return [];
    }
};

const saveData = (data) => {
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
};


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.get('/api/users', (req, res) => {
    const users = loadData();
    const search = req.query.search?.toLowerCase() || '';
    const filtered = users.filter(user =>
        user.name.toLowerCase().includes(search)
    );
    res.json(filtered);
});

app.post('/create', (req, res) => {
    const users = loadData();
    const newUser = {
        id: Date.now(),
        name: req.body.name,
        gmail: req.body.gmail,
        age: req.body.age
    };
    users.push(newUser);
    saveData(users);
    res.redirect('/');
});

app.post('/update', (req, res) => {
    const users = loadData();
    const user = users.find(u => u.id == req.body.id);
    if (user) {
        user.name = req.body.name;
        user.gmail = req.body.gmail;
        user.age = req.body.age;
    }
    saveData(users);
    res.redirect('/');
});


app.post('/delete', (req, res) => {
    let users = loadData();
    users = users.filter(u => u.id != req.body.id);
    saveData(users);
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
