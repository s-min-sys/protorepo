// package: 
// file: proto/user/authenticator_admin.proto

import * as jspb from "google-protobuf";
import * as proto_user_status_pb from "../../proto/user/status_pb";

export class SetAdminFlagRequest extends jspb.Message {
  getBizId(): string;
  setBizId(value: string): void;

  getUserId(): number;
  setUserId(value: number): void;

  getAdminFlag(): boolean;
  setAdminFlag(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAdminFlagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetAdminFlagRequest): SetAdminFlagRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetAdminFlagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAdminFlagRequest;
  static deserializeBinaryFromReader(message: SetAdminFlagRequest, reader: jspb.BinaryReader): SetAdminFlagRequest;
}

export namespace SetAdminFlagRequest {
  export type AsObject = {
    bizId: string,
    userId: number,
    adminFlag: boolean,
  }
}

export class SetAdminFlagResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_user_status_pb.Status | undefined;
  setStatus(value?: proto_user_status_pb.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAdminFlagResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetAdminFlagResponse): SetAdminFlagResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetAdminFlagResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAdminFlagResponse;
  static deserializeBinaryFromReader(message: SetAdminFlagResponse, reader: jspb.BinaryReader): SetAdminFlagResponse;
}

export namespace SetAdminFlagResponse {
  export type AsObject = {
    status?: proto_user_status_pb.Status.AsObject,
  }
}

