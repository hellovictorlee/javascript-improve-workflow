const moment = require("moment-timezone");

const unixToDate = ({ unixTimestamp, timezone }) =>
  moment
    .unix(+unixTimestamp)
    .tz(timezone)
    .format("l");
const unixTimestamp = "1572660000";
const timezone = "America/Los_Angeles";
console.log(unixToDate({ unixTimestamp, timezone }));

const getTimezoneOffset = ({ dateTime, timezone }) => {
  return moment(dateTime)
    .tz(timezone)
    .format("Z");
};

const dateTimeToUnix = ({ dateTime, timezone }) => {
  const timezoneOffset = getTimezoneOffset({ dateTime, timezone });
  const dateTimeWithOffset = dateTime + timezoneOffset;
  return moment(dateTimeWithOffset).unix();
};

const dateTime = "2019-10-31T18:30:00";
console.log(getTimezoneOffset({ dateTime, timezone }));
console.log(dateTimeToUnix({ dateTime, timezone }));
