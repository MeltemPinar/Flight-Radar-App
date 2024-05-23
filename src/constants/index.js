export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.480658",
    bl_lng: "25.73472",
    tr_lat: "42.527912",
    tr_lng: "44.865926",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "951e708bcamsh8e31c23d62696a8p102b25jsn096709fcd1ae",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
export const headerOpt = {
  headers: {
    "X-RapidAPI-Key": "93ada9ced9msh384f4d3c29d22c6p14e5e7jsne1b14d81e83d",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
