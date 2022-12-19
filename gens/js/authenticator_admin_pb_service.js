// package: 
// file: proto/user/authenticator_admin.proto

var proto_user_authenticator_admin_pb = require("../../proto/user/authenticator_admin_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AuthenticatorAdmin = (function () {
  function AuthenticatorAdmin() {}
  AuthenticatorAdmin.serviceName = "AuthenticatorAdmin";
  return AuthenticatorAdmin;
}());

AuthenticatorAdmin.SetAdminFlag = {
  methodName: "SetAdminFlag",
  service: AuthenticatorAdmin,
  requestStream: false,
  responseStream: false,
  requestType: proto_user_authenticator_admin_pb.SetAdminFlagRequest,
  responseType: proto_user_authenticator_admin_pb.SetAdminFlagResponse
};

exports.AuthenticatorAdmin = AuthenticatorAdmin;

function AuthenticatorAdminClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AuthenticatorAdminClient.prototype.setAdminFlag = function setAdminFlag(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticatorAdmin.SetAdminFlag, {
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

exports.AuthenticatorAdminClient = AuthenticatorAdminClient;

