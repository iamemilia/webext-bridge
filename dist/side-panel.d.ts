import { S as Stream } from './stream-910da5f6.js';
import { G as GetDataType, D as Destination, c as GetReturnType, O as OnMessageCallback, E as Endpoint } from './types-89cdc557.js';
import * as type_fest from 'type-fest';

declare function createSidePanel(tabId: any): {
    sendMessage: <ReturnType_1 extends type_fest.JsonValue, K extends string = string>(messageID: K, data: GetDataType<K, type_fest.JsonValue>, destination?: Destination) => Promise<GetReturnType<K, ReturnType_1>>;
    onMessage: <Data extends type_fest.JsonValue, K_1 extends string = string>(messageID: K_1, callback: OnMessageCallback<GetDataType<K_1, Data>, GetReturnType<K_1, any>>) => () => void;
    openStream: (channel: string, destination: string | Endpoint) => Promise<Stream>;
    onOpenStreamChannel: (channel: string, callback: (stream: Stream) => void) => void;
};

export { createSidePanel };
