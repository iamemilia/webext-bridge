import {
  createPersistentPort
} from "./chunk-ODNERRIQ.js";
import "./chunk-G7AOUSAZ.js";
import {
  createEndpointRuntime,
  createStreamWirings
} from "./chunk-4J4II3XU.js";
import "./chunk-YWICFM2F.js";

// src/devtools.ts
import browser from "webextension-polyfill";
var port = createPersistentPort(`devtools@${browser.devtools.inspectedWindow.tabId}`);
var endpointRuntime = createEndpointRuntime(
  "devtools",
  (message) => port.postMessage(message)
);
port.onMessage(endpointRuntime.handleMessage);
var { sendMessage, onMessage } = endpointRuntime;
var { openStream, onOpenStreamChannel } = createStreamWirings(endpointRuntime);
export {
  onMessage,
  onOpenStreamChannel,
  openStream,
  sendMessage
};
