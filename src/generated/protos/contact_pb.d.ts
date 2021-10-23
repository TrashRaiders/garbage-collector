// package: protos
// file: contact.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Contact extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): Contact;
    getPhone(): string;
    setPhone(value: string): Contact;
    getWhatsApp(): string;
    setWhatsApp(value: string): Contact;
    getFacebook(): string;
    setFacebook(value: string): Contact;
    getTwitter(): string;
    setTwitter(value: string): Contact;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Contact.AsObject;
    static toObject(includeInstance: boolean, msg: Contact): Contact.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Contact, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Contact;
    static deserializeBinaryFromReader(message: Contact, reader: jspb.BinaryReader): Contact;
}

export namespace Contact {
    export type AsObject = {
        email: string,
        phone: string,
        whatsApp: string,
        facebook: string,
        twitter: string,
    }
}
