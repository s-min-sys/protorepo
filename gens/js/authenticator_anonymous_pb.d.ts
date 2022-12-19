// package: 
// file: proto/user/authenticator_anonymous.proto

import * as jspb from "google-protobuf";
import * as proto_user_status_pb from "../../proto/user/status_pb";

export class SetUserNameRequest extends jspb.Message {
  getBizId(): string;
  setBizId(value: string): void;

  getUserName(): string;
  setUserName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetUserNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetUserNameRequest): SetUserNameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetUserNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetUserNameRequest;
  static deserializeBinaryFromReader(message: SetUserNameRequest, reader: jspb.BinaryReader): SetUserNameRequest;
}

export namespace SetUserNameRequest {
  export type AsObject = {
    bizId: string,
    userName: string,
  }
}

export class SetUserNameResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_user_status_pb.Status | undefined;
  setStatus(value?: proto_user_status_pb.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetUserNameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetUserNameResponse): SetUserNameResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetUserNameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetUserNameResponse;
  static deserializeBinaryFromReader(message: SetUserNameResponse, reader: jspb.BinaryReader): SetUserNameResponse;
}

export namespace SetUserNameResponse {
  export type AsObject = {
    status?: proto_user_status_pb.Status.AsObject,
  }
}

