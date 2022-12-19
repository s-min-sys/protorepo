// package: 
// file: proto/user/status.proto

import * as jspb from "google-protobuf";

export class Status extends jspb.Message {
  getCode(): CodeMap[keyof CodeMap];
  setCode(value: CodeMap[keyof CodeMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    code: CodeMap[keyof CodeMap],
    message: string,
  }
}

export interface CodeMap {
  CODE_UNSPECIFIED: 0;
  CODE_OK: 1;
  CODE_NEED_AUTHENTICATOR: 2;
  CODE_NOT_COMPLETED: 3;
  CODE_NO_DATA_ERROR: 4;
  CODE_INVALID_ARGS_ERROR: 5;
  CODE_INTERNAL_ERROR: 6;
  CODE_EXISTS_ERROR: 7;
  CODE_NOT_IMPLEMENT_ERROR: 8;
  CODE_CONFLICT_ERROR: 9;
  CODE_EXPIRED_ERROR: 10;
  CODE_LOGIC_ERROR: 11;
  CODE_DUP_ERROR: 12;
  CODE_VERIFY_ERROR: 13;
  CODE_BAD_DATA_ERROR: 14;
  CODE_PERMISSION_ERROR: 15;
}

export const Code: CodeMap;

