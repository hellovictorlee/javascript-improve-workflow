const fs = require("fs");
const path = require("path");

const run = async () => {
  const dir = "/tmp/prc_97bfbf16-7e94-4400-99a9-ace56f00b90d";

  const walkSync = (currentDirPath, callback) => {
    fs.readdirSync(currentDirPath).forEach(name => {
      const filePath = path.join(currentDirPath, name);
      const stat = fs.statSync(filePath);
      if (stat.isFile()) {
        callback(filePath, stat);
      } else if (stat.isDirectory()) {
        walkSync(filePath, callback);
      }
    });
  };

  walkSync(dir, async filePath => {
    const bucketPath = filePath.substring(dir.length + 1);
    console.log('bucketPath: ', bucketPath)
  });
};

run().then();
