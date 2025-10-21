import {
  createPersistentPort
} from "./chunk-ODNERRIQ.js";
import "./chunk-G7AOUSAZ.js";
import {
  createEndpointRuntime,
  createStreamWirings
} from "./chunk-4J4II3XU.js";
import "./chunk-YWICFM2F.js";

// src/side-panel.ts
function createSidePanel(tabId) {
  const port = createPersistentPort(`side-panel@${tabId}`);
  const endpointRuntime = createEndpointRuntime(
    "side-panel",
    (message) => port.postMessage(message)
  );
  port.onMessage(endpointRuntime.handleMessage);
  const { sendMessage, onMessage } = endpointRuntime;
  const { openStream, onOpenStreamChannel } = createStreamWirings(endpointRuntime);
  return {
    sendMessage,
    onMessage,
    openStream,
    onOpenStreamChannel
  };
}
export {
  createSidePanel
};
