// package: 
// file: proto/user/authenticator_userpass.proto

var proto_user_authenticator_userpass_pb = require("../../proto/user/authenticator_userpass_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AuthenticatorUserPass = (function () {
  function AuthenticatorUserPass() {}
  AuthenticatorUserPass.serviceName = "AuthenticatorUserPass";
  return AuthenticatorUserPass;
}());

AuthenticatorUserPass.Register = {
  methodName: "Register",
  service: AuthenticatorUserPass,
  requestStream: false,
  responseStream: false,
  requestType: proto_user_authenticator_userpass_pb.RegisterRequest,
  responseType: proto_user_authenticator_userpass_pb.RegisterResponse
};

AuthenticatorUserPass.Login = {
  methodName: "Login",
  service: AuthenticatorUserPass,
  requestStream: false,
  responseStream: false,
  requestType: proto_user_authenticator_userpass_pb.LoginRequest,
  responseType: proto_user_authenticator_userpass_pb.LoginResponse
};

AuthenticatorUserPass.VerifyPassword = {
  methodName: "VerifyPassword",
  service: AuthenticatorUserPass,
  requestStream: false,
  responseStream: false,
  requestType: proto_user_authenticator_userpass_pb.VerifyPasswordRequest,
  responseType: proto_user_authenticator_userpass_pb.VerifyPasswordResponse
};

AuthenticatorUserPass.ChangePassword = {
  methodName: "ChangePassword",
  service: AuthenticatorUserPass,
  requestStream: false,
  responseStream: false,
  requestType: proto_user_authenticator_userpass_pb.ChangePasswordRequest,
  responseType: proto_user_authenticator_userpass_pb.ChangePasswordResponse
};

exports.AuthenticatorUserPass = AuthenticatorUserPass;

function AuthenticatorUserPassClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AuthenticatorUserPassClient.prototype.register = function register(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticatorUserPass.Register, {
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

AuthenticatorUserPassClient.prototype.login = function login(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticatorUserPass.Login, {
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

AuthenticatorUserPassClient.prototype.verifyPassword = function verifyPassword(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticatorUserPass.VerifyPassword, {
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

AuthenticatorUserPassClient.prototype.changePassword = function changePassword(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticatorUserPass.ChangePassword, {
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

exports.AuthenticatorUserPassClient = AuthenticatorUserPassClient;

