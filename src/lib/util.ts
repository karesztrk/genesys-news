/**
 * Calcalates the elapsed time in minutes since the given timestamp.
 */
export const elapsedMinutes = (sinceSeconds?: number) => {
  if (!sinceSeconds) {
    return 0;
  }
  const since = new Date(sinceSeconds * 1000);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - since.getTime();
  return Math.floor(timeDifference / (1000 * 60));
};
