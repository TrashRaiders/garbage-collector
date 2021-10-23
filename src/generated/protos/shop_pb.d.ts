// package: protos
// file: shop.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as address_pb from "./address_pb";
import * as contact_pb from "./contact_pb";
import * as coordinates_pb from "./coordinates_pb";

export class Shop extends jspb.Message { 
    getId(): string;
    setId(value: string): Shop;
    getOwnerId(): string;
    setOwnerId(value: string): Shop;
    getName(): string;
    setName(value: string): Shop;
    getDescription(): string;
    setDescription(value: string): Shop;
    getType(): string;
    setType(value: string): Shop;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): address_pb.Address | undefined;
    setAddress(value?: address_pb.Address): Shop;

    hasCoordinates(): boolean;
    clearCoordinates(): void;
    getCoordinates(): coordinates_pb.Coordinates | undefined;
    setCoordinates(value?: coordinates_pb.Coordinates): Shop;

    hasContact(): boolean;
    clearContact(): void;
    getContact(): contact_pb.Contact | undefined;
    setContact(value?: contact_pb.Contact): Shop;
    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): Shop;
    addTags(value: string, index?: number): string;
    getWebsite(): string;
    setWebsite(value: string): Shop;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Shop.AsObject;
    static toObject(includeInstance: boolean, msg: Shop): Shop.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Shop, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Shop;
    static deserializeBinaryFromReader(message: Shop, reader: jspb.BinaryReader): Shop;
}

export namespace Shop {
    export type AsObject = {
        id: string,
        ownerId: string,
        name: string,
        description: string,
        type: string,
        address?: address_pb.Address.AsObject,
        coordinates?: coordinates_pb.Coordinates.AsObject,
        contact?: contact_pb.Contact.AsObject,
        tagsList: Array<string>,
        website: string,
    }
}

export class ShopRequest extends jspb.Message { 
    getShoId(): string;
    setShoId(value: string): ShopRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShopRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ShopRequest): ShopRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShopRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShopRequest;
    static deserializeBinaryFromReader(message: ShopRequest, reader: jspb.BinaryReader): ShopRequest;
}

export namespace ShopRequest {
    export type AsObject = {
        shoId: string,
    }
}
