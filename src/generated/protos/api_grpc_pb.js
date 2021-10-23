// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var shop_pb = require('./shop_pb.js');
var reply_pb = require('./reply_pb.js');

function serialize_protos_Reply(arg) {
  if (!(arg instanceof reply_pb.Reply)) {
    throw new Error('Expected argument of type protos.Reply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_Reply(buffer_arg) {
  return reply_pb.Reply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_Shop(arg) {
  if (!(arg instanceof shop_pb.Shop)) {
    throw new Error('Expected argument of type protos.Shop');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_Shop(buffer_arg) {
  return shop_pb.Shop.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_ShopRequest(arg) {
  if (!(arg instanceof shop_pb.ShopRequest)) {
    throw new Error('Expected argument of type protos.ShopRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_ShopRequest(buffer_arg) {
  return shop_pb.ShopRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ShopServiceService = exports.ShopServiceService = {
  createShop: {
    path: '/protos.ShopService/createShop',
    requestStream: false,
    responseStream: false,
    requestType: shop_pb.Shop,
    responseType: reply_pb.Reply,
    requestSerialize: serialize_protos_Shop,
    requestDeserialize: deserialize_protos_Shop,
    responseSerialize: serialize_protos_Reply,
    responseDeserialize: deserialize_protos_Reply,
  },
  getShop: {
    path: '/protos.ShopService/getShop',
    requestStream: false,
    responseStream: false,
    requestType: shop_pb.ShopRequest,
    responseType: shop_pb.Shop,
    requestSerialize: serialize_protos_ShopRequest,
    requestDeserialize: deserialize_protos_ShopRequest,
    responseSerialize: serialize_protos_Shop,
    responseDeserialize: deserialize_protos_Shop,
  },
};

exports.ShopServiceClient = grpc.makeGenericClientConstructor(ShopServiceService);
