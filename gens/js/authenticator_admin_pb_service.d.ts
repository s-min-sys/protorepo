// package: 
// file: proto/user/authenticator_admin.proto

import * as proto_user_authenticator_admin_pb from "../../proto/user/authenticator_admin_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AuthenticatorAdminSetAdminFlag = {
  readonly methodName: string;
  readonly service: typeof AuthenticatorAdmin;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_authenticator_admin_pb.SetAdminFlagRequest;
  readonly responseType: typeof proto_user_authenticator_admin_pb.SetAdminFlagResponse;
};

export class AuthenticatorAdmin {
  static readonly serviceName: string;
  static readonly SetAdminFlag: AuthenticatorAdminSetAdminFlag;
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

export class AuthenticatorAdminClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  setAdminFlag(
    requestMessage: proto_user_authenticator_admin_pb.SetAdminFlagRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_authenticator_admin_pb.SetAdminFlagResponse|null) => void
  ): UnaryResponse;
  setAdminFlag(
    requestMessage: proto_user_authenticator_admin_pb.SetAdminFlagRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_authenticator_admin_pb.SetAdminFlagResponse|null) => void
  ): UnaryResponse;
}

