// package: protos
// file: reply.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Reply extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): string;
    setId(value: string): Reply;

    hasErr(): boolean;
    clearErr(): void;
    getErr(): string;
    setErr(value: string): Reply;

    getReplyCase(): Reply.ReplyCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Reply.AsObject;
    static toObject(includeInstance: boolean, msg: Reply): Reply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Reply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Reply;
    static deserializeBinaryFromReader(message: Reply, reader: jspb.BinaryReader): Reply;
}

export namespace Reply {
    export type AsObject = {
        id: string,
        err: string,
    }

    export enum ReplyCase {
        REPLY_NOT_SET = 0,
        ID = 1,
        ERR = 2,
    }

}
