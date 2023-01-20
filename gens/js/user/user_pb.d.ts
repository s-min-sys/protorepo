// package: 
// file: proto/user/user.proto

import * as jspb from "google-protobuf";
import * as proto_user_status_pb from "../../proto/user/status_pb";
import * as proto_validate_validate_pb from "../../proto/validate/validate_pb";

export class AuthenticatorEvent extends jspb.Message {
  getAuthenticator(): AuthenticatorIdentityMap[keyof AuthenticatorIdentityMap];
  setAuthenticator(value: AuthenticatorIdentityMap[keyof AuthenticatorIdentityMap]): void;

  getEvent(): EventMap[keyof EventMap];
  setEvent(value: EventMap[keyof EventMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticatorEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticatorEvent): AuthenticatorEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthenticatorEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticatorEvent;
  static deserializeBinaryFromReader(message: AuthenticatorEvent, reader: jspb.BinaryReader): AuthenticatorEvent;
}

export namespace AuthenticatorEvent {
  export type AsObject = {
    authenticator: AuthenticatorIdentityMap[keyof AuthenticatorIdentityMap],
    event: EventMap[keyof EventMap],
  }
}

export class RegisterBeginRequest extends jspb.Message {
  getSsoJumpUrl(): string;
  setSsoJumpUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterBeginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterBeginRequest): RegisterBeginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterBeginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterBeginRequest;
  static deserializeBinaryFromReader(message: RegisterBeginRequest, reader: jspb.BinaryReader): RegisterBeginRequest;
}

export namespace RegisterBeginRequest {
  export type AsObject = {
    ssoJumpUrl: string,
  }
}

export class RegisterBeginResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_user_status_pb.Status | undefined;
  setStatus(value?: proto_user_status_pb.Status): void;

  getBizId(): string;
  setBizId(value: string): void;

  clearNeededOrEventsList(): void;
  getNeededOrEventsList(): Array<AuthenticatorEvent>;
  setNeededOrEventsList(value: Array<AuthenticatorEvent>): void;
  addNeededOrEvents(value?: AuthenticatorEvent, index?: number): AuthenticatorEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterBeginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterBeginResponse): RegisterBeginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterBeginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterBeginResponse;
  static deserializeBinaryFromReader(message: RegisterBeginResponse, reader: jspb.BinaryReader): RegisterBeginResponse;
}

export namespace RegisterBeginResponse {
  export type AsObject = {
    status?: proto_user_status_pb.Status.AsObject,
    bizId: string,
    neededOrEventsList: Array<AuthenticatorEvent.AsObject>,
  }
}

export class RegisterCheckRequest extends jspb.Message {
  getBizId(): string;
  setBizId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterCheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterCheckRequest): RegisterCheckRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterCheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterCheckRequest;
  static deserializeBinaryFromReader(message: RegisterCheckRequest, reader: jspb.BinaryReader): RegisterCheckRequest;
}

export namespace RegisterCheckRequest {
  export type AsObject = {
    bizId: string,
  }
}

export class RegisterCheckResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_user_status_pb.Status | undefined;
  setStatus(value?: proto_user_status_pb.Status): void;

  clearNeededOrEventsList(): void;
  getNeededOrEventsList(): Array<AuthenticatorEvent>;
  setNeededOrEventsList(value: Array<AuthenticatorEvent>): void;
  addNeededOrEvents(value?: AuthenticatorEvent, index?: number): AuthenticatorEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterCheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterCheckResponse): RegisterCheckResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterCheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterCheckResponse;
  static deserializeBinaryFromReader(message: RegisterCheckResponse, reader: jspb.BinaryReader): RegisterCheckResponse;
}

export namespace RegisterCheckResponse {
  export type AsObject = {
    status?: proto_user_status_pb.Status.AsObject,
    neededOrEventsList: Array<AuthenticatorEvent.AsObject>,
  }
}

export class RegisterEndRequest extends jspb.Message {
  getBizId(): string;
  setBizId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterEndRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterEndRequest): RegisterEndRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterEndRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterEndRequest;
  static deserializeBinaryFromReader(message: RegisterEndRequest, reader: jspb.BinaryReader): RegisterEndRequest;
}

export namespace RegisterEndRequest {
  export type AsObject = {
    bizId: string,
  }
}

export class RegisterEndResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_user_status_pb.Status | undefined;
  setStatus(value?: proto_user_status_pb.Status): void;

  getUserId(): string;
  setUserId(value: string): void;

  getSsoToken(): string;
  setSsoToken(value: string): void;

  getOrigin(): string;
  setOrigin(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterEndResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterEndResponse): RegisterEndResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterEndResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterEndResponse;
  static deserializeBinaryFromReader(message: RegisterEndResponse, reader: jspb.BinaryReader): RegisterEndResponse;
}

export namespace RegisterEndResponse {
  export type AsObject = {
    status?: proto_user_status_pb.Status.AsObject,
    userId: string,
    ssoToken: string,
    origin: string,
  }
}

export class LoginBeginRequest extends jspb.Message {
  getSsoJumpUrl(): string;
  setSsoJumpUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginBeginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginBeginRequest): LoginBeginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginBeginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginBeginRequest;
  static deserializeBinaryFromReader(message: LoginBeginRequest, reader: jspb.BinaryReader): LoginBeginRequest;
}

export namespace LoginBeginRequest {
  export type AsObject = {
    ssoJumpUrl: string,
  }
}

export class LoginBeginResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_user_status_pb.Status | undefined;
  setStatus(value?: proto_user_status_pb.Status): void;

  getBizId(): string;
  setBizId(value: string): void;

  clearNeededOrEventsList(): void;
  getNeededOrEventsList(): Array<AuthenticatorEvent>;
  setNeededOrEventsList(value: Array<AuthenticatorEvent>): void;
  addNeededOrEvents(value?: AuthenticatorEvent, index?: number): AuthenticatorEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginBeginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginBeginResponse): LoginBeginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginBeginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginBeginResponse;
  static deserializeBinaryFromReader(message: LoginBeginResponse, reader: jspb.BinaryReader): LoginBeginResponse;
}

export namespace LoginBeginResponse {
  export type AsObject = {
    status?: proto_user_status_pb.Status.AsObject,
    bizId: string,
    neededOrEventsList: Array<AuthenticatorEvent.AsObject>,
  }
}

export class LoginCheckRequest extends jspb.Message {
  getBizId(): string;
  setBizId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginCheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginCheckRequest): LoginCheckRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginCheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginCheckRequest;
  static deserializeBinaryFromReader(message: LoginCheckRequest, reader: jspb.BinaryReader): LoginCheckRequest;
}

export namespace LoginCheckRequest {
  export type AsObject = {
    bizId: string,
  }
}

export class LoginCheckResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_user_status_pb.Status | undefined;
  setStatus(value?: proto_user_status_pb.Status): void;

  clearNeededOrEventsList(): void;
  getNeededOrEventsList(): Array<AuthenticatorEvent>;
  setNeededOrEventsList(value: Array<AuthenticatorEvent>): void;
  addNeededOrEvents(value?: AuthenticatorEvent, index?: number): AuthenticatorEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginCheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginCheckResponse): LoginCheckResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginCheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginCheckResponse;
  static deserializeBinaryFromReader(message: LoginCheckResponse, reader: jspb.BinaryReader): LoginCheckResponse;
}

export namespace LoginCheckResponse {
  export type AsObject = {
    status?: proto_user_status_pb.Status.AsObject,
    neededOrEventsList: Array<AuthenticatorEvent.AsObject>,
  }
}

export class LoginEndRequest extends jspb.Message {
  getBizId(): string;
  setBizId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginEndRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginEndRequest): LoginEndRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginEndRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginEndRequest;
  static deserializeBinaryFromReader(message: LoginEndRequest, reader: jspb.BinaryReader): LoginEndRequest;
}

export namespace LoginEndRequest {
  export type AsObject = {
    bizId: string,
  }
}

export class LoginEndResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_user_status_pb.Status | undefined;
  setStatus(value?: proto_user_status_pb.Status): void;

  getUserId(): string;
  setUserId(value: string): void;

  getSsoToken(): string;
  setSsoToken(value: string): void;

  getOrigin(): string;
  setOrigin(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginEndResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginEndResponse): LoginEndResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginEndResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginEndResponse;
  static deserializeBinaryFromReader(message: LoginEndResponse, reader: jspb.BinaryReader): LoginEndResponse;
}

export namespace LoginEndResponse {
  export type AsObject = {
    status?: proto_user_status_pb.Status.AsObject,
    userId: string,
    ssoToken: string,
    origin: string,
  }
}

export class SSOLoginRequest extends jspb.Message {
  getSsoToken(): string;
  setSsoToken(value: string): void;

  getSetCookieFlag(): boolean;
  setSetCookieFlag(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSOLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SSOLoginRequest): SSOLoginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SSOLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSOLoginRequest;
  static deserializeBinaryFromReader(message: SSOLoginRequest, reader: jspb.BinaryReader): SSOLoginRequest;
}

export namespace SSOLoginRequest {
  export type AsObject = {
    ssoToken: string,
    setCookieFlag: boolean,
  }
}

export class SSOLoginResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_user_status_pb.Status | undefined;
  setStatus(value?: proto_user_status_pb.Status): void;

  getUserId(): string;
  setUserId(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  getTokenExpirationSeconds(): number;
  setTokenExpirationSeconds(value: number): void;

  getOrigin(): string;
  setOrigin(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSOLoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SSOLoginResponse): SSOLoginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SSOLoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSOLoginResponse;
  static deserializeBinaryFromReader(message: SSOLoginResponse, reader: jspb.BinaryReader): SSOLoginResponse;
}

export namespace SSOLoginResponse {
  export type AsObject = {
    status?: proto_user_status_pb.Status.AsObject,
    userId: string,
    token: string,
    tokenExpirationSeconds: number,
    origin: string,
  }
}

export class ChangeBeginRequest extends jspb.Message {
  clearAuthenticatorsList(): void;
  getAuthenticatorsList(): Array<AuthenticatorIdentityMap[keyof AuthenticatorIdentityMap]>;
  setAuthenticatorsList(value: Array<AuthenticatorIdentityMap[keyof AuthenticatorIdentityMap]>): void;
  addAuthenticators(value: AuthenticatorIdentityMap[keyof AuthenticatorIdentityMap], index?: number): AuthenticatorIdentityMap[keyof AuthenticatorIdentityMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeBeginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeBeginRequest): ChangeBeginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeBeginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeBeginRequest;
  static deserializeBinaryFromReader(message: ChangeBeginRequest, reader: jspb.BinaryReader): ChangeBeginRequest;
}

export namespace ChangeBeginRequest {
  export type AsObject = {
    authenticatorsList: Array<AuthenticatorIdentityMap[keyof AuthenticatorIdentityMap]>,
  }
}

export class ChangeBeginResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_user_status_pb.Status | undefined;
  setStatus(value?: proto_user_status_pb.Status): void;

  getBizId(): string;
  setBizId(value: string): void;

  clearNeededOrEventsList(): void;
  getNeededOrEventsList(): Array<AuthenticatorEvent>;
  setNeededOrEventsList(value: Array<AuthenticatorEvent>): void;
  addNeededOrEvents(value?: AuthenticatorEvent, index?: number): AuthenticatorEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeBeginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeBeginResponse): ChangeBeginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeBeginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeBeginResponse;
  static deserializeBinaryFromReader(message: ChangeBeginResponse, reader: jspb.BinaryReader): ChangeBeginResponse;
}

export namespace ChangeBeginResponse {
  export type AsObject = {
    status?: proto_user_status_pb.Status.AsObject,
    bizId: string,
    neededOrEventsList: Array<AuthenticatorEvent.AsObject>,
  }
}

export class ChangeCheckRequest extends jspb.Message {
  getBizId(): string;
  setBizId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeCheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeCheckRequest): ChangeCheckRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeCheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeCheckRequest;
  static deserializeBinaryFromReader(message: ChangeCheckRequest, reader: jspb.BinaryReader): ChangeCheckRequest;
}

export namespace ChangeCheckRequest {
  export type AsObject = {
    bizId: string,
  }
}

export class ChangeCheckResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_user_status_pb.Status | undefined;
  setStatus(value?: proto_user_status_pb.Status): void;

  clearNeededOrEventsList(): void;
  getNeededOrEventsList(): Array<AuthenticatorEvent>;
  setNeededOrEventsList(value: Array<AuthenticatorEvent>): void;
  addNeededOrEvents(value?: AuthenticatorEvent, index?: number): AuthenticatorEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeCheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeCheckResponse): ChangeCheckResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeCheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeCheckResponse;
  static deserializeBinaryFromReader(message: ChangeCheckResponse, reader: jspb.BinaryReader): ChangeCheckResponse;
}

export namespace ChangeCheckResponse {
  export type AsObject = {
    status?: proto_user_status_pb.Status.AsObject,
    neededOrEventsList: Array<AuthenticatorEvent.AsObject>,
  }
}

export class ChangeEndRequest extends jspb.Message {
  getBizId(): string;
  setBizId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeEndRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeEndRequest): ChangeEndRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeEndRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeEndRequest;
  static deserializeBinaryFromReader(message: ChangeEndRequest, reader: jspb.BinaryReader): ChangeEndRequest;
}

export namespace ChangeEndRequest {
  export type AsObject = {
    bizId: string,
  }
}

export class ChangeEndResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_user_status_pb.Status | undefined;
  setStatus(value?: proto_user_status_pb.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeEndResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeEndResponse): ChangeEndResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeEndResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeEndResponse;
  static deserializeBinaryFromReader(message: ChangeEndResponse, reader: jspb.BinaryReader): ChangeEndResponse;
}

export namespace ChangeEndResponse {
  export type AsObject = {
    status?: proto_user_status_pb.Status.AsObject,
  }
}

export class DeleteBeginRequest extends jspb.Message {
  clearAuthenticatorsList(): void;
  getAuthenticatorsList(): Array<AuthenticatorIdentityMap[keyof AuthenticatorIdentityMap]>;
  setAuthenticatorsList(value: Array<AuthenticatorIdentityMap[keyof AuthenticatorIdentityMap]>): void;
  addAuthenticators(value: AuthenticatorIdentityMap[keyof AuthenticatorIdentityMap], index?: number): AuthenticatorIdentityMap[keyof AuthenticatorIdentityMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBeginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBeginRequest): DeleteBeginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteBeginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBeginRequest;
  static deserializeBinaryFromReader(message: DeleteBeginRequest, reader: jspb.BinaryReader): DeleteBeginRequest;
}

export namespace DeleteBeginRequest {
  export type AsObject = {
    authenticatorsList: Array<AuthenticatorIdentityMap[keyof AuthenticatorIdentityMap]>,
  }
}

export class DeleteBeginResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_user_status_pb.Status | undefined;
  setStatus(value?: proto_user_status_pb.Status): void;

  getBizId(): string;
  setBizId(value: string): void;

  clearNeededOrEventsList(): void;
  getNeededOrEventsList(): Array<AuthenticatorEvent>;
  setNeededOrEventsList(value: Array<AuthenticatorEvent>): void;
  addNeededOrEvents(value?: AuthenticatorEvent, index?: number): AuthenticatorEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBeginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBeginResponse): DeleteBeginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteBeginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBeginResponse;
  static deserializeBinaryFromReader(message: DeleteBeginResponse, reader: jspb.BinaryReader): DeleteBeginResponse;
}

export namespace DeleteBeginResponse {
  export type AsObject = {
    status?: proto_user_status_pb.Status.AsObject,
    bizId: string,
    neededOrEventsList: Array<AuthenticatorEvent.AsObject>,
  }
}

export class DeleteCheckRequest extends jspb.Message {
  getBizId(): string;
  setBizId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCheckRequest): DeleteCheckRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCheckRequest;
  static deserializeBinaryFromReader(message: DeleteCheckRequest, reader: jspb.BinaryReader): DeleteCheckRequest;
}

export namespace DeleteCheckRequest {
  export type AsObject = {
    bizId: string,
  }
}

export class DeleteCheckResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_user_status_pb.Status | undefined;
  setStatus(value?: proto_user_status_pb.Status): void;

  clearNeededOrEventsList(): void;
  getNeededOrEventsList(): Array<AuthenticatorEvent>;
  setNeededOrEventsList(value: Array<AuthenticatorEvent>): void;
  addNeededOrEvents(value?: AuthenticatorEvent, index?: number): AuthenticatorEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCheckResponse): DeleteCheckResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCheckResponse;
  static deserializeBinaryFromReader(message: DeleteCheckResponse, reader: jspb.BinaryReader): DeleteCheckResponse;
}

export namespace DeleteCheckResponse {
  export type AsObject = {
    status?: proto_user_status_pb.Status.AsObject,
    neededOrEventsList: Array<AuthenticatorEvent.AsObject>,
  }
}

export class DeleteEndRequest extends jspb.Message {
  getBizId(): string;
  setBizId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEndRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEndRequest): DeleteEndRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteEndRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEndRequest;
  static deserializeBinaryFromReader(message: DeleteEndRequest, reader: jspb.BinaryReader): DeleteEndRequest;
}

export namespace DeleteEndRequest {
  export type AsObject = {
    bizId: string,
  }
}

export class DeleteEndResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_user_status_pb.Status | undefined;
  setStatus(value?: proto_user_status_pb.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEndResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEndResponse): DeleteEndResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteEndResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEndResponse;
  static deserializeBinaryFromReader(message: DeleteEndResponse, reader: jspb.BinaryReader): DeleteEndResponse;
}

export namespace DeleteEndResponse {
  export type AsObject = {
    status?: proto_user_status_pb.Status.AsObject,
  }
}

export class ListUsersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsersRequest): ListUsersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersRequest;
  static deserializeBinaryFromReader(message: ListUsersRequest, reader: jspb.BinaryReader): ListUsersRequest;
}

export namespace ListUsersRequest {
  export type AsObject = {
  }
}

export class UserInfo extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getUserName(): string;
  setUserName(value: string): void;

  getHasGoogle2fa(): boolean;
  setHasGoogle2fa(value: boolean): void;

  getAdmin(): boolean;
  setAdmin(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserInfo): UserInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInfo;
  static deserializeBinaryFromReader(message: UserInfo, reader: jspb.BinaryReader): UserInfo;
}

export namespace UserInfo {
  export type AsObject = {
    id: number,
    userName: string,
    hasGoogle2fa: boolean,
    admin: boolean,
  }
}

export class ListUsersResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_user_status_pb.Status | undefined;
  setStatus(value?: proto_user_status_pb.Status): void;

  clearUserInfosList(): void;
  getUserInfosList(): Array<UserInfo>;
  setUserInfosList(value: Array<UserInfo>): void;
  addUserInfos(value?: UserInfo, index?: number): UserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsersResponse): ListUsersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersResponse;
  static deserializeBinaryFromReader(message: ListUsersResponse, reader: jspb.BinaryReader): ListUsersResponse;
}

export namespace ListUsersResponse {
  export type AsObject = {
    status?: proto_user_status_pb.Status.AsObject,
    userInfosList: Array<UserInfo.AsObject>,
  }
}

export class CheckTokenRequest extends jspb.Message {
  getSsoJumpUrl(): string;
  setSsoJumpUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckTokenRequest): CheckTokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckTokenRequest;
  static deserializeBinaryFromReader(message: CheckTokenRequest, reader: jspb.BinaryReader): CheckTokenRequest;
}

export namespace CheckTokenRequest {
  export type AsObject = {
    ssoJumpUrl: string,
  }
}

export class UserTokenInfo extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getUserName(): string;
  setUserName(value: string): void;

  getStartAt(): number;
  setStartAt(value: number): void;

  getAge(): number;
  setAge(value: number): void;

  getOrigin(): string;
  setOrigin(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserTokenInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserTokenInfo): UserTokenInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserTokenInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserTokenInfo;
  static deserializeBinaryFromReader(message: UserTokenInfo, reader: jspb.BinaryReader): UserTokenInfo;
}

export namespace UserTokenInfo {
  export type AsObject = {
    id: number,
    userName: string,
    startAt: number,
    age: number,
    origin: string,
  }
}

export class CheckTokenResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_user_status_pb.Status | undefined;
  setStatus(value?: proto_user_status_pb.Status): void;

  hasTokenInfo(): boolean;
  clearTokenInfo(): void;
  getTokenInfo(): UserTokenInfo | undefined;
  setTokenInfo(value?: UserTokenInfo): void;

  getSsoToken(): string;
  setSsoToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckTokenResponse): CheckTokenResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckTokenResponse;
  static deserializeBinaryFromReader(message: CheckTokenResponse, reader: jspb.BinaryReader): CheckTokenResponse;
}

export namespace CheckTokenResponse {
  export type AsObject = {
    status?: proto_user_status_pb.Status.AsObject,
    tokenInfo?: UserTokenInfo.AsObject,
    ssoToken: string,
  }
}

export class RenewTokenRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenewTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RenewTokenRequest): RenewTokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RenewTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenewTokenRequest;
  static deserializeBinaryFromReader(message: RenewTokenRequest, reader: jspb.BinaryReader): RenewTokenRequest;
}

export namespace RenewTokenRequest {
  export type AsObject = {
  }
}

export class RenewTokenResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_user_status_pb.Status | undefined;
  setStatus(value?: proto_user_status_pb.Status): void;

  getNewToken(): string;
  setNewToken(value: string): void;

  hasTokenInfo(): boolean;
  clearTokenInfo(): void;
  getTokenInfo(): UserTokenInfo | undefined;
  setTokenInfo(value?: UserTokenInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenewTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RenewTokenResponse): RenewTokenResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RenewTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenewTokenResponse;
  static deserializeBinaryFromReader(message: RenewTokenResponse, reader: jspb.BinaryReader): RenewTokenResponse;
}

export namespace RenewTokenResponse {
  export type AsObject = {
    status?: proto_user_status_pb.Status.AsObject,
    newToken: string,
    tokenInfo?: UserTokenInfo.AsObject,
  }
}

export class LogoutRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutRequest): LogoutRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutRequest;
  static deserializeBinaryFromReader(message: LogoutRequest, reader: jspb.BinaryReader): LogoutRequest;
}

export namespace LogoutRequest {
  export type AsObject = {
  }
}

export class LogoutResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_user_status_pb.Status | undefined;
  setStatus(value?: proto_user_status_pb.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutResponse): LogoutResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutResponse;
  static deserializeBinaryFromReader(message: LogoutResponse, reader: jspb.BinaryReader): LogoutResponse;
}

export namespace LogoutResponse {
  export type AsObject = {
    status?: proto_user_status_pb.Status.AsObject,
  }
}

export interface AuthenticatorIdentityMap {
  AUTHENTICATOR_IDENTITY_UNSPECIFIED: 0;
  AUTHENTICATOR_IDENTITY_USER: 1;
  AUTHENTICATOR_IDENTITY_ANONYMOUS: 2;
  AUTHENTICATOR_IDENTITY_USER_PASS: 3;
  AUTHENTICATOR_IDENTITY_USER_PASS_PASS: 4;
  AUTHENTICATOR_IDENTITY_PHONE: 5;
  AUTHENTICATOR_IDENTITY_EMAIL: 6;
  AUTHENTICATOR_IDENTITY_GOOGLE_2FA: 7;
  AUTHENTICATOR_IDENTITY_ADMIN_FLAG: 8;
}

export const AuthenticatorIdentity: AuthenticatorIdentityMap;

export interface EventMap {
  EVENT_UNSPECIFIED: 0;
  EVENT_SETUP: 1;
  EVENT_VERIFY: 2;
  EVENT_DELETE: 3;
}

export const Event: EventMap;

