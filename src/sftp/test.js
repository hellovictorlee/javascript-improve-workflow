const sftp = require("./sftp");
const trace = label => content =>
  console.log(`>>> ${label}:\n ${JSON.stringify(content, null, 2)}`);

const filename = "/home/ec2-user/text.txt";
const content = "hello world";
const path = "/home/ec2-user";

const run = async () => {
  const { upload, list, endConnection } = await sftp();

  // upsert file
  // upload({ filename, content }).then();
  await upload({ filename, content });

  await list({ path })
    .then(data => data.map(({ filename }) => filename))
    .then(trace("sftp list files"));

  endConnection();
};

run().then();
