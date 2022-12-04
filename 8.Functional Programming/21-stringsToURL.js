// Only change code below this line
function urlSlug(title) {
  let trim = title.trim();
  let split = trim.split(/\s+/);

  let joined = split.join("-");

  return joined.toLowerCase();
}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
