const jwt = require('jsonwebtoken');

function signAccessToken(user) {
    const payload = {
        role: user.role,
        email: user.email
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
}

module.exports = { signAccessToken };