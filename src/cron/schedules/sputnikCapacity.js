const { saveSputnikCapacity } = require('../../scripts');

const DST_START = '03-29';
const DST_END = '10-25';

const date = new Date();
const now = `${date.getMonth()+1}-${date.getDay()}`;
const DST = now > DST_START && now < DST_END;

// UTC + offset
const start = 7 + (DST ? 2 : 1);
const end = 22 + (DST ? 2 : 1);

module.exports = [ `*/15 ${start}-${end} * * *`, saveSputnikCapacity];