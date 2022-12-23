// package: 
// file: proto/user/authenticator_google2fa.proto

var proto_user_authenticator_google2fa_pb = require("../../proto/user/authenticator_google2fa_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AuthenticatorGoogle2fa = (function () {
  function AuthenticatorGoogle2fa() {}
  AuthenticatorGoogle2fa.serviceName = "AuthenticatorGoogle2fa";
  return AuthenticatorGoogle2fa;
}());

AuthenticatorGoogle2fa.GetSetupInfo = {
  methodName: "GetSetupInfo",
  service: AuthenticatorGoogle2fa,
  requestStream: false,
  responseStream: false,
  requestType: proto_user_authenticator_google2fa_pb.GetSetupInfoRequest,
  responseType: proto_user_authenticator_google2fa_pb.GetSetupInfoResponse
};

AuthenticatorGoogle2fa.DoSetup = {
  methodName: "DoSetup",
  service: AuthenticatorGoogle2fa,
  requestStream: false,
  responseStream: false,
  requestType: proto_user_authenticator_google2fa_pb.DoSetupRequest,
  responseType: proto_user_authenticator_google2fa_pb.DoSetupResponse
};

AuthenticatorGoogle2fa.Verify = {
  methodName: "Verify",
  service: AuthenticatorGoogle2fa,
  requestStream: false,
  responseStream: false,
  requestType: proto_user_authenticator_google2fa_pb.VerifyRequest,
  responseType: proto_user_authenticator_google2fa_pb.VerifyResponse
};

exports.AuthenticatorGoogle2fa = AuthenticatorGoogle2fa;

function AuthenticatorGoogle2faClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AuthenticatorGoogle2faClient.prototype.getSetupInfo = function getSetupInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticatorGoogle2fa.GetSetupInfo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AuthenticatorGoogle2faClient.prototype.doSetup = function doSetup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticatorGoogle2fa.DoSetup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AuthenticatorGoogle2faClient.prototype.verify = function verify(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticatorGoogle2fa.Verify, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.AuthenticatorGoogle2faClient = AuthenticatorGoogle2faClient;

