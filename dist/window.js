import {
  usePostMessaging
} from "./chunk-QYJXY7GZ.js";
import {
  createEndpointRuntime,
  createStreamWirings
} from "./chunk-4J4II3XU.js";
import "./chunk-YWICFM2F.js";

// src/window.ts
var win = usePostMessaging("window");
var endpointRuntime = createEndpointRuntime(
  "window",
  (message) => win.postMessage(message)
);
win.onMessage((msg) => {
  if ("type" in msg && "transactionID" in msg)
    endpointRuntime.endTransaction(msg.transactionID);
  else
    endpointRuntime.handleMessage(msg);
});
function setNamespace(nsps) {
  win.setNamespace(nsps);
  win.enable();
}
var { sendMessage, onMessage } = endpointRuntime;
var { openStream, onOpenStreamChannel } = createStreamWirings(endpointRuntime);
export {
  onMessage,
  onOpenStreamChannel,
  openStream,
  sendMessage,
  setNamespace
};
