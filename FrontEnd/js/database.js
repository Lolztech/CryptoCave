const sqlite3 = require('sqlite3').verbose();

// Connect to the database
const db = new sqlite3.Database('C:\Users\arwas\OneDrive\Pulpit\lock in\cryptocave.sqbpro', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

// Query the database
db.serialize(() => {
    db.each(`SELECT * FROM your_table`, (err, row) => {
        if (err) {
            console.error(err.message);
        }
        console.log(row); // Handle the retrieved data here
    });
});

// Close the database connection
db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Closed the database connection.');
});