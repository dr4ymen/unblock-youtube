chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = new URL(details.url);
    const videoId = url.searchParams.get("v");
    if (videoId) {
      // Перенаправляем на piped.video с параметром видео ID
      return {
        redirectUrl: `https://piped.video/watch?v=${videoId}`
      };
    }
  },
  { urls: ["*://www.youtube.com/watch*"] },
  ["blocking"]
);

chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed and redirect rules are active.');
});