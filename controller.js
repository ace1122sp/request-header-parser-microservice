const getUser = (req, res) => {
  const regexLanguageAndIPAddress = /.*?(?=,)/;
  const regexOperatingSystem = /(?=\().*?(?=\))/;
  let user;

  const ipAddress = JSON.stringify(regexLanguageAndIPAddress.exec(req.headers['x-forwarded-for'])).slice(2, -2);
  const language = JSON.stringify(regexLanguageAndIPAddress.exec(req.headers['accept-language'])).slice(2, -2);
  let operatingSystem = JSON.stringify(regexOperatingSystem.exec(req.headers['user-agent'])).slice(3, -2);

  user = {ipAddress, language, operatingSystem};
  return user;
}

module.exports = getUser;
