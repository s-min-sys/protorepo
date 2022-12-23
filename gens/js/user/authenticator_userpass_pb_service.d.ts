// package: 
// file: proto/user/authenticator_userpass.proto

import * as proto_user_authenticator_userpass_pb from "../../proto/user/authenticator_userpass_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AuthenticatorUserPassRegister = {
  readonly methodName: string;
  readonly service: typeof AuthenticatorUserPass;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_authenticator_userpass_pb.RegisterRequest;
  readonly responseType: typeof proto_user_authenticator_userpass_pb.RegisterResponse;
};

type AuthenticatorUserPassLogin = {
  readonly methodName: string;
  readonly service: typeof AuthenticatorUserPass;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_authenticator_userpass_pb.LoginRequest;
  readonly responseType: typeof proto_user_authenticator_userpass_pb.LoginResponse;
};

type AuthenticatorUserPassVerifyPassword = {
  readonly methodName: string;
  readonly service: typeof AuthenticatorUserPass;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_authenticator_userpass_pb.VerifyPasswordRequest;
  readonly responseType: typeof proto_user_authenticator_userpass_pb.VerifyPasswordResponse;
};

type AuthenticatorUserPassChangePassword = {
  readonly methodName: string;
  readonly service: typeof AuthenticatorUserPass;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_authenticator_userpass_pb.ChangePasswordRequest;
  readonly responseType: typeof proto_user_authenticator_userpass_pb.ChangePasswordResponse;
};

export class AuthenticatorUserPass {
  static readonly serviceName: string;
  static readonly Register: AuthenticatorUserPassRegister;
  static readonly Login: AuthenticatorUserPassLogin;
  static readonly VerifyPassword: AuthenticatorUserPassVerifyPassword;
  static readonly ChangePassword: AuthenticatorUserPassChangePassword;
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

export class AuthenticatorUserPassClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  register(
    requestMessage: proto_user_authenticator_userpass_pb.RegisterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_authenticator_userpass_pb.RegisterResponse|null) => void
  ): UnaryResponse;
  register(
    requestMessage: proto_user_authenticator_userpass_pb.RegisterRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_authenticator_userpass_pb.RegisterResponse|null) => void
  ): UnaryResponse;
  login(
    requestMessage: proto_user_authenticator_userpass_pb.LoginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_authenticator_userpass_pb.LoginResponse|null) => void
  ): UnaryResponse;
  login(
    requestMessage: proto_user_authenticator_userpass_pb.LoginRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_authenticator_userpass_pb.LoginResponse|null) => void
  ): UnaryResponse;
  verifyPassword(
    requestMessage: proto_user_authenticator_userpass_pb.VerifyPasswordRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_authenticator_userpass_pb.VerifyPasswordResponse|null) => void
  ): UnaryResponse;
  verifyPassword(
    requestMessage: proto_user_authenticator_userpass_pb.VerifyPasswordRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_authenticator_userpass_pb.VerifyPasswordResponse|null) => void
  ): UnaryResponse;
  changePassword(
    requestMessage: proto_user_authenticator_userpass_pb.ChangePasswordRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_authenticator_userpass_pb.ChangePasswordResponse|null) => void
  ): UnaryResponse;
  changePassword(
    requestMessage: proto_user_authenticator_userpass_pb.ChangePasswordRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_authenticator_userpass_pb.ChangePasswordResponse|null) => void
  ): UnaryResponse;
}

