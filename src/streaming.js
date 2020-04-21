const http = require('http');
const fs = require('fs');
const unzipper = require('unzipper');

const lookup = {
  prc: 'dev.potomacriverboatco.com'
};

const run = async () => {
  const site = "prc";
  const zip = "simply-static-1-1587150004.zip";
  if (!site) {
    throw new Error("missing site");
  }
  if (!zip) {
    throw new Error("missing zip");
  }
  const file = fs.createWriteStream("/Users/victor.lee/Desktop/test/test.zip");
  const request = http.get(
    `http://${lookup[site]}/wp-content/plugins/simply-static/static-files/${zip}`,
    response => {
      response
        .pipe(file).on("finish", () => {
        console.log("done");
      });
    }
  );
};

run().then();
