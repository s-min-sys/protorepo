// package: 
// file: proto/user/user.proto

import * as proto_user_user_pb from "../../proto/user/user_pb";
import {grpc} from "@improbable-eng/grpc-web";

type UserServicerRegisterBegin = {
  readonly methodName: string;
  readonly service: typeof UserServicer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_user_pb.RegisterBeginRequest;
  readonly responseType: typeof proto_user_user_pb.RegisterBeginResponse;
};

type UserServicerRegisterCheck = {
  readonly methodName: string;
  readonly service: typeof UserServicer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_user_pb.RegisterCheckRequest;
  readonly responseType: typeof proto_user_user_pb.RegisterCheckResponse;
};

type UserServicerRegisterEnd = {
  readonly methodName: string;
  readonly service: typeof UserServicer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_user_pb.RegisterEndRequest;
  readonly responseType: typeof proto_user_user_pb.RegisterEndResponse;
};

type UserServicerLoginBegin = {
  readonly methodName: string;
  readonly service: typeof UserServicer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_user_pb.LoginBeginRequest;
  readonly responseType: typeof proto_user_user_pb.LoginBeginResponse;
};

type UserServicerLoginCheck = {
  readonly methodName: string;
  readonly service: typeof UserServicer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_user_pb.LoginCheckRequest;
  readonly responseType: typeof proto_user_user_pb.LoginCheckResponse;
};

type UserServicerLoginEnd = {
  readonly methodName: string;
  readonly service: typeof UserServicer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_user_pb.LoginEndRequest;
  readonly responseType: typeof proto_user_user_pb.LoginEndResponse;
};

type UserServicerChangeBegin = {
  readonly methodName: string;
  readonly service: typeof UserServicer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_user_pb.ChangeBeginRequest;
  readonly responseType: typeof proto_user_user_pb.ChangeBeginResponse;
};

type UserServicerChangeCheck = {
  readonly methodName: string;
  readonly service: typeof UserServicer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_user_pb.ChangeCheckRequest;
  readonly responseType: typeof proto_user_user_pb.ChangeCheckResponse;
};

type UserServicerChangeEnd = {
  readonly methodName: string;
  readonly service: typeof UserServicer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_user_pb.ChangeEndRequest;
  readonly responseType: typeof proto_user_user_pb.ChangeEndResponse;
};

type UserServicerDeleteBegin = {
  readonly methodName: string;
  readonly service: typeof UserServicer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_user_pb.DeleteBeginRequest;
  readonly responseType: typeof proto_user_user_pb.DeleteBeginResponse;
};

type UserServicerDeleteCheck = {
  readonly methodName: string;
  readonly service: typeof UserServicer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_user_pb.DeleteCheckRequest;
  readonly responseType: typeof proto_user_user_pb.DeleteCheckResponse;
};

type UserServicerDeleteEnd = {
  readonly methodName: string;
  readonly service: typeof UserServicer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_user_pb.DeleteEndRequest;
  readonly responseType: typeof proto_user_user_pb.DeleteEndResponse;
};

type UserServicerListUsers = {
  readonly methodName: string;
  readonly service: typeof UserServicer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_user_pb.ListUsersRequest;
  readonly responseType: typeof proto_user_user_pb.ListUsersResponse;
};

type UserServicerCheckToken = {
  readonly methodName: string;
  readonly service: typeof UserServicer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_user_pb.CheckTokenRequest;
  readonly responseType: typeof proto_user_user_pb.CheckTokenResponse;
};

type UserServicerRenewToken = {
  readonly methodName: string;
  readonly service: typeof UserServicer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_user_pb.RenewTokenRequest;
  readonly responseType: typeof proto_user_user_pb.RenewTokenResponse;
};

export class UserServicer {
  static readonly serviceName: string;
  static readonly RegisterBegin: UserServicerRegisterBegin;
  static readonly RegisterCheck: UserServicerRegisterCheck;
  static readonly RegisterEnd: UserServicerRegisterEnd;
  static readonly LoginBegin: UserServicerLoginBegin;
  static readonly LoginCheck: UserServicerLoginCheck;
  static readonly LoginEnd: UserServicerLoginEnd;
  static readonly ChangeBegin: UserServicerChangeBegin;
  static readonly ChangeCheck: UserServicerChangeCheck;
  static readonly ChangeEnd: UserServicerChangeEnd;
  static readonly DeleteBegin: UserServicerDeleteBegin;
  static readonly DeleteCheck: UserServicerDeleteCheck;
  static readonly DeleteEnd: UserServicerDeleteEnd;
  static readonly ListUsers: UserServicerListUsers;
  static readonly CheckToken: UserServicerCheckToken;
  static readonly RenewToken: UserServicerRenewToken;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class UserServicerClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  registerBegin(
    requestMessage: proto_user_user_pb.RegisterBeginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.RegisterBeginResponse|null) => void
  ): UnaryResponse;
  registerBegin(
    requestMessage: proto_user_user_pb.RegisterBeginRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.RegisterBeginResponse|null) => void
  ): UnaryResponse;
  registerCheck(
    requestMessage: proto_user_user_pb.RegisterCheckRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.RegisterCheckResponse|null) => void
  ): UnaryResponse;
  registerCheck(
    requestMessage: proto_user_user_pb.RegisterCheckRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.RegisterCheckResponse|null) => void
  ): UnaryResponse;
  registerEnd(
    requestMessage: proto_user_user_pb.RegisterEndRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.RegisterEndResponse|null) => void
  ): UnaryResponse;
  registerEnd(
    requestMessage: proto_user_user_pb.RegisterEndRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.RegisterEndResponse|null) => void
  ): UnaryResponse;
  loginBegin(
    requestMessage: proto_user_user_pb.LoginBeginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.LoginBeginResponse|null) => void
  ): UnaryResponse;
  loginBegin(
    requestMessage: proto_user_user_pb.LoginBeginRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.LoginBeginResponse|null) => void
  ): UnaryResponse;
  loginCheck(
    requestMessage: proto_user_user_pb.LoginCheckRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.LoginCheckResponse|null) => void
  ): UnaryResponse;
  loginCheck(
    requestMessage: proto_user_user_pb.LoginCheckRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.LoginCheckResponse|null) => void
  ): UnaryResponse;
  loginEnd(
    requestMessage: proto_user_user_pb.LoginEndRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.LoginEndResponse|null) => void
  ): UnaryResponse;
  loginEnd(
    requestMessage: proto_user_user_pb.LoginEndRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.LoginEndResponse|null) => void
  ): UnaryResponse;
  changeBegin(
    requestMessage: proto_user_user_pb.ChangeBeginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.ChangeBeginResponse|null) => void
  ): UnaryResponse;
  changeBegin(
    requestMessage: proto_user_user_pb.ChangeBeginRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.ChangeBeginResponse|null) => void
  ): UnaryResponse;
  changeCheck(
    requestMessage: proto_user_user_pb.ChangeCheckRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.ChangeCheckResponse|null) => void
  ): UnaryResponse;
  changeCheck(
    requestMessage: proto_user_user_pb.ChangeCheckRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.ChangeCheckResponse|null) => void
  ): UnaryResponse;
  changeEnd(
    requestMessage: proto_user_user_pb.ChangeEndRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.ChangeEndResponse|null) => void
  ): UnaryResponse;
  changeEnd(
    requestMessage: proto_user_user_pb.ChangeEndRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.ChangeEndResponse|null) => void
  ): UnaryResponse;
  deleteBegin(
    requestMessage: proto_user_user_pb.DeleteBeginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.DeleteBeginResponse|null) => void
  ): UnaryResponse;
  deleteBegin(
    requestMessage: proto_user_user_pb.DeleteBeginRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.DeleteBeginResponse|null) => void
  ): UnaryResponse;
  deleteCheck(
    requestMessage: proto_user_user_pb.DeleteCheckRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.DeleteCheckResponse|null) => void
  ): UnaryResponse;
  deleteCheck(
    requestMessage: proto_user_user_pb.DeleteCheckRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.DeleteCheckResponse|null) => void
  ): UnaryResponse;
  deleteEnd(
    requestMessage: proto_user_user_pb.DeleteEndRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.DeleteEndResponse|null) => void
  ): UnaryResponse;
  deleteEnd(
    requestMessage: proto_user_user_pb.DeleteEndRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.DeleteEndResponse|null) => void
  ): UnaryResponse;
  listUsers(
    requestMessage: proto_user_user_pb.ListUsersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.ListUsersResponse|null) => void
  ): UnaryResponse;
  listUsers(
    requestMessage: proto_user_user_pb.ListUsersRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.ListUsersResponse|null) => void
  ): UnaryResponse;
  checkToken(
    requestMessage: proto_user_user_pb.CheckTokenRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.CheckTokenResponse|null) => void
  ): UnaryResponse;
  checkToken(
    requestMessage: proto_user_user_pb.CheckTokenRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.CheckTokenResponse|null) => void
  ): UnaryResponse;
  renewToken(
    requestMessage: proto_user_user_pb.RenewTokenRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.RenewTokenResponse|null) => void
  ): UnaryResponse;
  renewToken(
    requestMessage: proto_user_user_pb.RenewTokenRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_user_pb.RenewTokenResponse|null) => void
  ): UnaryResponse;
}

