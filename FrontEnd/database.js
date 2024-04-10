const sqlite3 = require('sqlite3').verbose();

// Database file path
const dbFilePath = "C:\Users\arwas\OneDrive\Pulpit\Crypto Cave project\cc main\cryptocave.sqbpro";

// Connect to the database
const db = new sqlite3.Database(dbFilePath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
    } else {
        console.log('Connected to the database.');
        
        // Query the database
        db.serialize(() => {
            db.each(`SELECT * FROM users`, (err, row) => {
                if (err) {
                    console.error('Error querying the database:', err.message);
                } else {
                    console.log(row); // Handle the retrieved data here
                }
            });
        });
        
        // Close the database connection (after querying)
        db.close((err) => {
            if (err) {
                console.error('Error closing the database connection:', err.message);
            } else {
                console.log('Closed the database connection.');
            }
        });
    }
});
