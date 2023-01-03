const User = require('../model/User');

const handleLogout = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) {
    return res.sendStatus(204);
  }

  const refreshToken = cookies.jwt;

  // Check for refreshToken in Database
  const foundUser = await User.findOne({ refreshToken }).exec();
  if (!foundUser) {
    // Clear the cookie
    res.clearCookie('jwt', {
      httpOnly: true,
      sameSite: 'None',
      // secure: true,
    });
    return res.statusStatus(204);
  }

  foundUser.refreshToken = '';
  await foundUser.save();

  res.clearCookie('jwt', {
    httpOnly: true,
    sameSite: 'None',
    // secure: true,
  });

  res.sendStatus(204);
};

module.exports = {
  handleLogout,
};
