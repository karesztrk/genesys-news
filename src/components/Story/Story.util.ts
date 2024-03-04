/**
 * Format the story time according to how much elapsed.
 */
export const elapsed = (elapsed: number) => {
  let unit = "minutes";
  if (elapsed > 24 * 60) {
    elapsed = Math.floor(elapsed / (24 * 60));
    unit = `day${elapsed > 1 ? "s" : ""}`;
  } else if (elapsed > 60) {
    elapsed = Math.floor(elapsed / 60);
    unit = `hour${elapsed > 1 ? "s" : ""}`;
  }
  return `${elapsed} ${unit} ago`;
};
