const event1 = undefined;
const payload1 = JSON.parse((event1 && event1.body) || "{}");
console.log(payload1);

const event2 = {};
const payload2 = JSON.parse((event2 && event2.body) || "{}");
console.log(payload2);

const content = JSON.stringify('[]');
const event3 = { body: content};
console.log((event3 && event3.body) || "{}");
const payload3 = JSON.parse((event3 && event3.body) || "{}");
console.log(payload3);
