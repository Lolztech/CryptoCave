const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// Connect to MongoDB Databases
const businessConnection = mongoose.createConnection('mongodb://127.0.0.1:27017/BusinessUsers', { useNewUrlParser: true, useUnifiedTopology: true });
const personalConnection = mongoose.createConnection('mongodb://127.0.0.1:27017/PersonalUsers', { useNewUrlParser: true, useUnifiedTopology: true });


// Define user schema
const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    name: String,
    username: String,
    password: String,
    // add any other fields here
});

// Define models for Business and Personal using the respective connections
const BusinessUser = businessConnection.model('User', UserSchema);
const PersonalUser = personalConnection.model('User', UserSchema);

// Route for business user signup
app.post('/api/signup/business', async (req, res) => {
    const { email, name, username, password } = req.body;

    // Simple validation
    if (!email || !name || !username || !password) {
        return res.status(400).json({ message: "Please fill in all fields" });
    }

    try {
        // Check if email or username already exists for business user
        let user = await BusinessUser.findOne({ $or: [{ email }, { username }] });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new business user
        user = new BusinessUser({
            email,
            name,
            username,
            password: hashedPassword,
        });

        await user.save();
        res.status(201).json({ message: "Business user created successfully" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Login route
app.post('/api/login', async (req, res) => {
    const { email, username, password } = req.body;

    // Attempt to find the user in both collections
    let user = await BusinessUser.findOne({ $or: [{ email }, { username }] }) ||
               await PersonalUser.findOne({ $or: [{ email }, { username }] });

    if (!user) {
        return res.status(404).json({ message: "User not found." });
    }

    // Check if the password matches
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return res.status(401).json({ message: "Invalid credentials." });
    }

    // Login successful, return user info (omit sensitive information)
    const { password: _, ...userInfo } = user.toObject();
    res.status(200).json(userInfo);
});


// Route for personal user signup
app.post('/api/signup/personal', async (req, res) => {
    const { email, name, username, password } = req.body;

    // Simple validation
    if (!email || !name || !username || !password) {
        return res.status(400).json({ message: "Please fill in all fields" });
    }

    try {
        // Check if email or username already exists for personal user
        let user = await PersonalUser.findOne({ $or: [{ email }, { username }] });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new personal user
        user = new PersonalUser({
            email,
            name,
            username,
            password: hashedPassword,
        });

        await user.save();
        res.status(201).json({ message: "Personal user created successfully" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
