function knightTravails(start, end) {
  let queue = [[start, [start]]];
  let visited = new Set([start.toString()]);

  while (queue.length > 0) {
    const [currentPos, path] = queue.shift();

    if (currentPos[0] === end[0] && currentPos[1] === end[1]) {
      return path;
    }

    let moves = findMove(currentPos);
    for (let move of moves) {
      if (invalidPosition(move)) {
        continue; // Skip invalid moves
      } else if (!visited.has(move.toString())) {
        visited.add(move.toString());
        queue.push([move, [...path, move]]);
      }
    }
  }

  return "Path not found";
}

function findMove(start) {
  return [
    [start[0] + 1, start[1] + 2],
    [start[0] + 1, start[1] - 2],
    [start[0] + 2, start[1] + 1],
    [start[0] + 2, start[1] - 1],
    [start[0] - 1, start[1] + 2],
    [start[0] - 1, start[1] - 2],
    [start[0] - 2, start[1] + 1],
    [start[0] - 2, start[1] - 1],
  ];
}

function invalidPosition(pos) {
  return pos[0] < 0 || pos[1] < 0 || pos[0] > 7 || pos[1] > 7;
}
console.log(knightTravails([0, 0], [3, 3]));
