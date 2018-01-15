const getUser = (req, res) => {
  const regexLanguageAndIPAddress = /.*?(?=,)/;
  const regexOperatingSystem = /(?=\().*?(?=;)/; //some problem with regex
  let user;

  const ip = JSON.stringify(regexLanguageAndIPAddress.exec(req.headers['x-forwarded-for'])).slice(2, -2);
  const lang = JSON.stringify(regexLanguageAndIPAddress.exec(req.headers['accept-language'])).slice(2, -2);
  let operatingSystem = JSON.stringify(regexOperatingSystem.exec(req.headers['user-agent'])).slice(3, -2);

  user = {ip, lang, operatingSystem};
  return user;
}

module.exports = getUser;
