// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
    tracks: ["geo"],
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  const data = records[id];
  if (prop != "tracks" && value != "") {
    data[prop] = value;
  } else if (value == "") {
    delete data[prop];
  } else if (prop == "tracks") {
    if (!data.hasOwnProperty("tracks")) {
      data.tracks = [value];
    } else if (value != "") {
      data.tracks.push(value);
    }
  }
  return records;
}

console.log(updateRecords(recordCollection, 5439, "tracks", ""))
