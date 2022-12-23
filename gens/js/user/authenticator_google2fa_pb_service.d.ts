// package: 
// file: proto/user/authenticator_google2fa.proto

import * as proto_user_authenticator_google2fa_pb from "../../proto/user/authenticator_google2fa_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AuthenticatorGoogle2faGetSetupInfo = {
  readonly methodName: string;
  readonly service: typeof AuthenticatorGoogle2fa;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_authenticator_google2fa_pb.GetSetupInfoRequest;
  readonly responseType: typeof proto_user_authenticator_google2fa_pb.GetSetupInfoResponse;
};

type AuthenticatorGoogle2faDoSetup = {
  readonly methodName: string;
  readonly service: typeof AuthenticatorGoogle2fa;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_authenticator_google2fa_pb.DoSetupRequest;
  readonly responseType: typeof proto_user_authenticator_google2fa_pb.DoSetupResponse;
};

type AuthenticatorGoogle2faVerify = {
  readonly methodName: string;
  readonly service: typeof AuthenticatorGoogle2fa;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_authenticator_google2fa_pb.VerifyRequest;
  readonly responseType: typeof proto_user_authenticator_google2fa_pb.VerifyResponse;
};

export class AuthenticatorGoogle2fa {
  static readonly serviceName: string;
  static readonly GetSetupInfo: AuthenticatorGoogle2faGetSetupInfo;
  static readonly DoSetup: AuthenticatorGoogle2faDoSetup;
  static readonly Verify: AuthenticatorGoogle2faVerify;
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

export class AuthenticatorGoogle2faClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getSetupInfo(
    requestMessage: proto_user_authenticator_google2fa_pb.GetSetupInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_authenticator_google2fa_pb.GetSetupInfoResponse|null) => void
  ): UnaryResponse;
  getSetupInfo(
    requestMessage: proto_user_authenticator_google2fa_pb.GetSetupInfoRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_authenticator_google2fa_pb.GetSetupInfoResponse|null) => void
  ): UnaryResponse;
  doSetup(
    requestMessage: proto_user_authenticator_google2fa_pb.DoSetupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_authenticator_google2fa_pb.DoSetupResponse|null) => void
  ): UnaryResponse;
  doSetup(
    requestMessage: proto_user_authenticator_google2fa_pb.DoSetupRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_authenticator_google2fa_pb.DoSetupResponse|null) => void
  ): UnaryResponse;
  verify(
    requestMessage: proto_user_authenticator_google2fa_pb.VerifyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_authenticator_google2fa_pb.VerifyResponse|null) => void
  ): UnaryResponse;
  verify(
    requestMessage: proto_user_authenticator_google2fa_pb.VerifyRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_authenticator_google2fa_pb.VerifyResponse|null) => void
  ): UnaryResponse;
}

