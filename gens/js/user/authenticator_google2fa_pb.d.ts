// package: 
// file: proto/user/authenticator_google2fa.proto

import * as jspb from "google-protobuf";
import * as proto_user_status_pb from "../../proto/user/status_pb";
import * as proto_validate_validate_pb from "../../proto/validate/validate_pb";

export class GetSetupInfoRequest extends jspb.Message {
  getBizId(): string;
  setBizId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSetupInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSetupInfoRequest): GetSetupInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSetupInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSetupInfoRequest;
  static deserializeBinaryFromReader(message: GetSetupInfoRequest, reader: jspb.BinaryReader): GetSetupInfoRequest;
}

export namespace GetSetupInfoRequest {
  export type AsObject = {
    bizId: string,
  }
}

export class GetSetupInfoResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_user_status_pb.Status | undefined;
  setStatus(value?: proto_user_status_pb.Status): void;

  getSecretKey(): string;
  setSecretKey(value: string): void;

  getQrCode(): string;
  setQrCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSetupInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSetupInfoResponse): GetSetupInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSetupInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSetupInfoResponse;
  static deserializeBinaryFromReader(message: GetSetupInfoResponse, reader: jspb.BinaryReader): GetSetupInfoResponse;
}

export namespace GetSetupInfoResponse {
  export type AsObject = {
    status?: proto_user_status_pb.Status.AsObject,
    secretKey: string,
    qrCode: string,
  }
}

export class DoSetupRequest extends jspb.Message {
  getBizId(): string;
  setBizId(value: string): void;

  getCode(): string;
  setCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoSetupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DoSetupRequest): DoSetupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DoSetupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoSetupRequest;
  static deserializeBinaryFromReader(message: DoSetupRequest, reader: jspb.BinaryReader): DoSetupRequest;
}

export namespace DoSetupRequest {
  export type AsObject = {
    bizId: string,
    code: string,
  }
}

export class DoSetupResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_user_status_pb.Status | undefined;
  setStatus(value?: proto_user_status_pb.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoSetupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DoSetupResponse): DoSetupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DoSetupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoSetupResponse;
  static deserializeBinaryFromReader(message: DoSetupResponse, reader: jspb.BinaryReader): DoSetupResponse;
}

export namespace DoSetupResponse {
  export type AsObject = {
    status?: proto_user_status_pb.Status.AsObject,
  }
}

export class VerifyRequest extends jspb.Message {
  getBizId(): string;
  setBizId(value: string): void;

  getCode(): string;
  setCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyRequest): VerifyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyRequest;
  static deserializeBinaryFromReader(message: VerifyRequest, reader: jspb.BinaryReader): VerifyRequest;
}

export namespace VerifyRequest {
  export type AsObject = {
    bizId: string,
    code: string,
  }
}

export class VerifyResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_user_status_pb.Status | undefined;
  setStatus(value?: proto_user_status_pb.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyResponse): VerifyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyResponse;
  static deserializeBinaryFromReader(message: VerifyResponse, reader: jspb.BinaryReader): VerifyResponse;
}

export namespace VerifyResponse {
  export type AsObject = {
    status?: proto_user_status_pb.Status.AsObject,
  }
}

