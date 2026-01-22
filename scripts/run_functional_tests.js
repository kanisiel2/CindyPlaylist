const assert = require("node:assert/strict");
const { applyReorder, getNextSong } = require("../backend/src/request-song/request-song.logic");

const sample = [
  { id: 10, orderIndex: 2, isPlayed: false },
  { id: 11, orderIndex: 0, isPlayed: true },
  { id: 12, orderIndex: 1, isPlayed: false },
];

const nextSong = getNextSong(sample);
assert.equal(nextSong.id, 12, "next song should be smallest unplayed orderIndex");

const reordered = applyReorder(sample, [12, 10, 11]);
assert.deepEqual(
  reordered.map((item) => item.orderIndex),
  [0, 1, 2],
  "orderIndex should be reassigned sequentially"
);

assert.throws(
  () => applyReorder(sample, [999]),
  /Unknown request-song id/,
  "unknown ids should throw"
);

console.log("Functional logic tests passed.");
