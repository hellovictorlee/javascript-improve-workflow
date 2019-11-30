const connSetting = require("./connSetting");
const Client = require("ssh2").Client; // https://github.com/mscdex/ssh2

const upload = sftp => ({ filename, content }) =>
  new Promise((resolve, reject) => {
    sftp.writeFile(filename, content, err => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });

const list = sftp => ({ path }) =>
  new Promise((resolve, reject) => {
    sftp.readdir(path, (err, list) => {
      if (err) {
        reject(err);
      }
      resolve(list);
    });
  });

module.exports = () => {
  const conn = new Client();
  return new Promise((resolve, reject) => {
    conn
      .on("ready", () => {
        conn.sftp((err, sftp) => {
          if (err) {
            reject(err);
          }
          resolve({
            upload: upload(sftp),
            list: list(sftp),
            endConnection: async() => conn.end()
          });
        });
      })
      .connect(connSetting);
  });
};
