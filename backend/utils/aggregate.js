// aggregate.js
const fs = require("fs");
const csv = require("csv-parser");
const path = require("path");
const { parseISO, startOfWeek, subWeeks } = require("date-fns");
const { avgForWeek } = require("./utils");

async function loadCsv(path) {
  return new Promise((resolve, reject) => {
    const rows = [];
    fs.createReadStream(path)
      .pipe(csv())
      .on("data", (r) => {
        rows.push({
          date: r.date,
          open: parseFloat(r.open),
          high: parseFloat(r.high),
          low: parseFloat(r.low),
          close: parseFloat(r.close),
          volume: parseFloat(r.volume),
        });
      })
      .on("end", () => resolve(rows))
      .on("error", reject);
  });
}

async function getResults(filename) {
  if (!filename) filename = "ABBOTINDIA";
  let brief = "";
  if (filename == "ABBOTINDIA") {
    brief =
      "Abbott India Ltd., Mumbai-based arm of Abbott Labs, markets 400+ trusted brands across pharmaceuticals, nutrition, devices and diagnostics. Rising healthcare spending and India's pharma market projected to more than double to US$120-130 bn by 2030 signal robust long-term growth.";
  } else if (filename == "ADANIGREEN") {
    brief =
      "Adani Green Energy Ltd, founded in 2015 and based in Ahmedabad, operates 14 GW of solar and wind capacity in India. With plans to expand to 50 GW by 2030 and major investments ahead, it is well-positioned for strong growth in the renewable energy sector.";
  } else if (filename == "ADANIPORTS") {
    brief =
      "Adani Ports & Special Economic Zone Ltd. is India's largest private port operator, managing 15 ports—including Mundra, Vizhinjam, Gopalpur and overseas sites like Haifa. Handling close to 450 MMT cargo in FY25, it's expanding marine, logistics and international footprint, with almost 15-20% revenue growth projected.";
  } else if (filename == "CIPLA") {
    brief =
      "Cipla Ltd., a leading Indian pharma company, exports to 80+ countries and focuses on respiratory, oncology, and chronic care. With upcoming innovations in peptides, inhalers, and biosimilars, it is well-positioned for global growth in affordable healthcare and generics.";
  }
  const csvPath = path.join(
    __dirname,
    "../resources",
    `${filename}_minute.csv`
  );
  const allRows = await loadCsv(csvPath);
  // const allRows = await loadCsv(
  //   "E:/VIT/React/AI Stock Analyzer/backend/resources/ABBOTINDIA_minute.csv"
  // );

  const maxDate = allRows
    .map((r) => parseISO(r.date.replace(" ", "T")))
    .reduce((a, b) => (a > b ? a : b));

  const weeks = [];
  for (let i = 0; i < 4; i++) {
    const weekStart = subWeeks(startOfWeek(maxDate, { weekStartsOn: 1 }), i);
    weeks.push(weekStart);
  }

  const results = weeks
    .map((ws) => avgForWeek(allRows, ws))
    .filter((r) => r !== null)
    .sort((a, b) => a.weekStart.localeCompare(b.weekStart));
  console.log(results);
  return {results, brief};
}

// getResults();
module.exports = { getResults };
