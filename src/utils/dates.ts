import dayjs from 'dayjs';

export const getDurationUntilNow = (startTime: Date): string => {
  if (!startTime) return null;
  let diff = dayjs().diff(dayjs(startTime), 'milliseconds');
  // const millisecs = Math.floor(Math.abs(diff)) % 1000;
  const secondsTotal = Math.floor(Math.abs(diff) / 1000);
  const minsTotal = Math.floor(secondsTotal / 60);
  const hoursTotal = Math.floor(minsTotal / 60);
  // const days = Math.floor(hoursTotal / 24);
  let seconds = secondsTotal % 60;
  let minutes = minsTotal % 60;
  let hours = hoursTotal % 24;
  const secondsFormat = seconds < 10 ? '0' + seconds : seconds;
  const minutesFormat = minutes < 10 ? '0' + minutes : minutes;
  const hoursFormat = hours < 10 ? '0' + hours : hours;
  return `${hoursFormat}:${minutesFormat}:${secondsFormat}`;
};
