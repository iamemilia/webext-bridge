// src/internal/endpoint.ts
var ENDPOINT_RE = /^((?:background$)|devtools|popup|options|content-script|window)(?:@(\d+)(?:\.(\d+))?)?$/;
var parseEndpoint = (endpoint) => {
  const [, context, tabId, frameId] = endpoint.match(ENDPOINT_RE) || [];
  return {
    context,
    tabId: +tabId,
    frameId: frameId ? +frameId : void 0
  };
};
var formatEndpoint = ({ context, tabId, frameId }) => {
  if (["background", "popup", "options"].includes(context))
    return context;
  return `${context}@${tabId}${frameId ? `.${frameId}` : ""}`;
};

export {
  parseEndpoint,
  formatEndpoint
};
