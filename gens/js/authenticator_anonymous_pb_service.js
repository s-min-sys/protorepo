// package: 
// file: proto/user/authenticator_anonymous.proto

var proto_user_authenticator_anonymous_pb = require("../../proto/user/authenticator_anonymous_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AuthenticatorAnonymous = (function () {
  function AuthenticatorAnonymous() {}
  AuthenticatorAnonymous.serviceName = "AuthenticatorAnonymous";
  return AuthenticatorAnonymous;
}());

AuthenticatorAnonymous.SetUserName = {
  methodName: "SetUserName",
  service: AuthenticatorAnonymous,
  requestStream: false,
  responseStream: false,
  requestType: proto_user_authenticator_anonymous_pb.SetUserNameRequest,
  responseType: proto_user_authenticator_anonymous_pb.SetUserNameResponse
};

exports.AuthenticatorAnonymous = AuthenticatorAnonymous;

function AuthenticatorAnonymousClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AuthenticatorAnonymousClient.prototype.setUserName = function setUserName(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticatorAnonymous.SetUserName, {
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

exports.AuthenticatorAnonymousClient = AuthenticatorAnonymousClient;

