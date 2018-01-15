const getUser = (req, res) => {
  const regexLanguageAndIPAddress = /.*?(?=,)/;
  const regexOperatingSystem = /(?=\().*?(?=;)/; //some problem with regex
  let user;

  const ip = regexLanguageAndIPAddress.exec(req.headers['x-forwarded-for']);
  const lang = regexLanguageAndIPAddress.exec(req.headers['accept-language']);
  let operatingSystem = JSON.stringify(regexOperatingSystem.exec(req.headers['user-agent'])).slice(3, -2);

  user = {ip, lang, operatingSystem};
  return user;
}

module.exports = getUser;
