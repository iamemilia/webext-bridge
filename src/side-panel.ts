import browser from 'webextension-polyfill'
import { createEndpointRuntime } from './internal/endpoint-runtime'
import { createStreamWirings } from './internal/stream'
import { createPersistentPort } from './internal/persistent-port'

// const port = createPersistentPort(`devtools@${browser.devtools.inspectedWindow.tabId}`)

const port = createPersistentPort(`side-panel@${tabId}`)
const endpointRuntime = createEndpointRuntime(
  'side-panel',
  message => port.postMessage(message),
)

port.onMessage(endpointRuntime.handleMessage)

export const { sendMessage, onMessage } = endpointRuntime
export const { openStream, onOpenStreamChannel } = createStreamWirings(endpointRuntime)