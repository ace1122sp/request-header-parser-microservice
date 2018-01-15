const getUser = (req, res) => {
  const regexLanguageAndIPAddress = /.*?(?=,)/;
  const regexOperatingSystem = /(?<=\().*?(?=;)/;
  let user;

  const ip = regexLanguageAndIPAddress.exec(req.headers['x-forwarded-for']);
  const lang = regexLanguageAndIPAddress.exec(req.headers['accept-language']);
  const operatingSystem = regexOperatingSystem.exec(req.headers['user-agent']);

  user = {ip, lang, operatingSystem};
  return user;
}

module.exports = getUser;
