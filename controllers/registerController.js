const bcrypt = require('bcrypt');
const User = require('../model/User');

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;

  if (!user || !pwd) {
    return res
      .status(400)
      .json({ error: 'Username and password are required!' });
  }

  const isDuplicate = await User.findOne({ username: user }).exec();

  if (isDuplicate) {
    return res.status(409).json({ message: 'This username is already in use' });
  }

  try {
    // Hash password
    const hashedPwd = await bcrypt.hash(pwd, 10);

    // Create and store user in the MongoDB
    const result = await User.create({
      username: user,
      password: hashedPwd,
    });

    console.log(result);
    res.status(201).json({ message: `New user ${user} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  handleNewUser,
};
