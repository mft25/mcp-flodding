import axios from "axios";

export async function getRiverHeight(callback: any) {
  const dataUrl = "https://environment.data.gov.uk/flood-monitoring/id/measures/1491TH-level-stage-i-15_min-mASD/readings?_sorted&_limit=10";

  return axios
    .get(dataUrl)
    .then(callback);
}
