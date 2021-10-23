// package: protos
// file: address.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Address extends jspb.Message { 
    getCountry(): string;
    setCountry(value: string): Address;
    getPostalCode(): string;
    setPostalCode(value: string): Address;
    getCity(): string;
    setCity(value: string): Address;
    getStreet(): string;
    setStreet(value: string): Address;
    getStreetNumber(): string;
    setStreetNumber(value: string): Address;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Address.AsObject;
    static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Address;
    static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
    export type AsObject = {
        country: string,
        postalCode: string,
        city: string,
        street: string,
        streetNumber: string,
    }
}
