// package: protos
// file: coordinates.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Coordinates extends jspb.Message { 
    getLatitude(): string;
    setLatitude(value: string): Coordinates;
    getLongitude(): string;
    setLongitude(value: string): Coordinates;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Coordinates.AsObject;
    static toObject(includeInstance: boolean, msg: Coordinates): Coordinates.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Coordinates, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Coordinates;
    static deserializeBinaryFromReader(message: Coordinates, reader: jspb.BinaryReader): Coordinates;
}

export namespace Coordinates {
    export type AsObject = {
        latitude: string,
        longitude: string,
    }
}
