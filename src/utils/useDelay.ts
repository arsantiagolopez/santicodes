// Waits for the amount of ms passed

const useDelay = (ms: number): Promise<typeof setTimeout> =>
  new Promise((res) => setTimeout(res, ms));

export { useDelay };
