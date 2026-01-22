function getNextSong(requests) {
  return requests
    .filter((item) => !item.isPlayed)
    .sort((a, b) => a.orderIndex - b.orderIndex)[0] || null;
}

function applyReorder(requests, orderedIds) {
  const byId = new Map(requests.map((item) => [item.id, item]));
  return orderedIds.map((id, index) => {
    const item = byId.get(id);
    if (!item) {
      throw new Error(`Unknown request-song id: ${id}`);
    }
    return {
      ...item,
      orderIndex: index,
    };
  });
}

module.exports = {
  getNextSong,
  applyReorder,
};
