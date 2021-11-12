export default {
  formatTime(timeSeconds) {
    const minutes = Math.floor(timeSeconds / 60) || 0;
    const seconds = Math.round((timeSeconds - minutes * 60) || 0);

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  },
};
