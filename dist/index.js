import {
  parseEndpoint
} from "./chunk-YWICFM2F.js";

// src/internal/is-internal-endpoint.ts
var internalEndpoints = ["background", "devtools", "content-script", "options", "popup"];
var isInternalEndpoint = ({ context: ctx }) => internalEndpoints.includes(ctx);
export {
  isInternalEndpoint,
  parseEndpoint
};
