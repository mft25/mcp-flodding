import axios from "axios";

export async function getRiverHeight(stationCode: string, callback: any) {
  const dataUrl = `https://environment.data.gov.uk/flood-monitoring/id/measures/${stationCode}-level-stage-i-15_min-mASD/readings?_sorted&_limit=10`;

  return axios
    .get(dataUrl)
    .then(callback);
}

export function getReadingStationUrl(stationId: number) {
  return `https://check-for-flooding.service.gov.uk/station/${stationId}`;
}
