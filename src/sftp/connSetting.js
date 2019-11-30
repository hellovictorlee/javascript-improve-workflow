const connSetting = {
  host: "host",
  username: "username",
  privateKey: require("fs").readFileSync(
    "my/private/key/path"
  )
};

module.exports = connSetting;
