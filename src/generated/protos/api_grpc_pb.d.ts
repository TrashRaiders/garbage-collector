// package: protos
// file: api.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as api_pb from "./api_pb";
import * as shop_pb from "./shop_pb";
import * as reply_pb from "./reply_pb";

interface IShopServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createShop: IShopServiceService_IcreateShop;
    getShop: IShopServiceService_IgetShop;
}

interface IShopServiceService_IcreateShop extends grpc.MethodDefinition<shop_pb.Shop, reply_pb.Reply> {
    path: "/protos.ShopService/createShop";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<shop_pb.Shop>;
    requestDeserialize: grpc.deserialize<shop_pb.Shop>;
    responseSerialize: grpc.serialize<reply_pb.Reply>;
    responseDeserialize: grpc.deserialize<reply_pb.Reply>;
}
interface IShopServiceService_IgetShop extends grpc.MethodDefinition<shop_pb.ShopRequest, shop_pb.Shop> {
    path: "/protos.ShopService/getShop";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<shop_pb.ShopRequest>;
    requestDeserialize: grpc.deserialize<shop_pb.ShopRequest>;
    responseSerialize: grpc.serialize<shop_pb.Shop>;
    responseDeserialize: grpc.deserialize<shop_pb.Shop>;
}

export const ShopServiceService: IShopServiceService;

export interface IShopServiceServer {
    createShop: grpc.handleUnaryCall<shop_pb.Shop, reply_pb.Reply>;
    getShop: grpc.handleUnaryCall<shop_pb.ShopRequest, shop_pb.Shop>;
}

export interface IShopServiceClient {
    createShop(request: shop_pb.Shop, callback: (error: grpc.ServiceError | null, response: reply_pb.Reply) => void): grpc.ClientUnaryCall;
    createShop(request: shop_pb.Shop, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: reply_pb.Reply) => void): grpc.ClientUnaryCall;
    createShop(request: shop_pb.Shop, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: reply_pb.Reply) => void): grpc.ClientUnaryCall;
    getShop(request: shop_pb.ShopRequest, callback: (error: grpc.ServiceError | null, response: shop_pb.Shop) => void): grpc.ClientUnaryCall;
    getShop(request: shop_pb.ShopRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: shop_pb.Shop) => void): grpc.ClientUnaryCall;
    getShop(request: shop_pb.ShopRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: shop_pb.Shop) => void): grpc.ClientUnaryCall;
}

export class ShopServiceClient extends grpc.Client implements IShopServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createShop(request: shop_pb.Shop, callback: (error: grpc.ServiceError | null, response: reply_pb.Reply) => void): grpc.ClientUnaryCall;
    public createShop(request: shop_pb.Shop, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: reply_pb.Reply) => void): grpc.ClientUnaryCall;
    public createShop(request: shop_pb.Shop, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: reply_pb.Reply) => void): grpc.ClientUnaryCall;
    public getShop(request: shop_pb.ShopRequest, callback: (error: grpc.ServiceError | null, response: shop_pb.Shop) => void): grpc.ClientUnaryCall;
    public getShop(request: shop_pb.ShopRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: shop_pb.Shop) => void): grpc.ClientUnaryCall;
    public getShop(request: shop_pb.ShopRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: shop_pb.Shop) => void): grpc.ClientUnaryCall;
}
