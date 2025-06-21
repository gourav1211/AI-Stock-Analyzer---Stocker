// utils.js
const { parseISO, startOfWeek, endOfWeek, subWeeks, isWithinInterval } = require('date-fns');

/**
 * Given an array of rows and a week-start date,
 * compute the average o,h,l,c,volume for that 7‑day window.
 */
function avgForWeek(rows, weekStart) {
  const weekEnd = endOfWeek(weekStart, { weekStartsOn: 1 }); // Monday→Sunday
  const inWeek = rows.filter(r => {
    const ts = parseISO(r.date);
    return isWithinInterval(ts, { start: weekStart, end: weekEnd });
  });
  if (!inWeek.length) return null;

  const sums = inWeek.reduce((acc, r) => {
    acc.open   += r.open;
    acc.high   += r.high;
    acc.low    += r.low;
    acc.close  += r.close;
    acc.volume += r.volume;
    return acc;
  }, { open: 0, high: 0, low: 0, close: 0, volume: 0 });

  const n = inWeek.length;
  return {
    weekStart: weekStart.toISOString().slice(0,10),
    weekEnd:   weekEnd.toISOString().slice(0,10),
    open:   sums.open   / n,
    high:   sums.high   / n,
    low:    sums.low    / n,
    close:  sums.close  / n,
    volume: sums.volume / n
  };
}

module.exports = { avgForWeek };
