// package: 
// file: proto/user/user.proto

var proto_user_user_pb = require("../../proto/user/user_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var UserServicer = (function () {
  function UserServicer() {}
  UserServicer.serviceName = "UserServicer";
  return UserServicer;
}());

UserServicer.RegisterBegin = {
  methodName: "RegisterBegin",
  service: UserServicer,
  requestStream: false,
  responseStream: false,
  requestType: proto_user_user_pb.RegisterBeginRequest,
  responseType: proto_user_user_pb.RegisterBeginResponse
};

UserServicer.RegisterCheck = {
  methodName: "RegisterCheck",
  service: UserServicer,
  requestStream: false,
  responseStream: false,
  requestType: proto_user_user_pb.RegisterCheckRequest,
  responseType: proto_user_user_pb.RegisterCheckResponse
};

UserServicer.RegisterEnd = {
  methodName: "RegisterEnd",
  service: UserServicer,
  requestStream: false,
  responseStream: false,
  requestType: proto_user_user_pb.RegisterEndRequest,
  responseType: proto_user_user_pb.RegisterEndResponse
};

UserServicer.LoginBegin = {
  methodName: "LoginBegin",
  service: UserServicer,
  requestStream: false,
  responseStream: false,
  requestType: proto_user_user_pb.LoginBeginRequest,
  responseType: proto_user_user_pb.LoginBeginResponse
};

UserServicer.LoginCheck = {
  methodName: "LoginCheck",
  service: UserServicer,
  requestStream: false,
  responseStream: false,
  requestType: proto_user_user_pb.LoginCheckRequest,
  responseType: proto_user_user_pb.LoginCheckResponse
};

UserServicer.LoginEnd = {
  methodName: "LoginEnd",
  service: UserServicer,
  requestStream: false,
  responseStream: false,
  requestType: proto_user_user_pb.LoginEndRequest,
  responseType: proto_user_user_pb.LoginEndResponse
};

UserServicer.SSOLogin = {
  methodName: "SSOLogin",
  service: UserServicer,
  requestStream: false,
  responseStream: false,
  requestType: proto_user_user_pb.SSOLoginRequest,
  responseType: proto_user_user_pb.SSOLoginResponse
};

UserServicer.ChangeBegin = {
  methodName: "ChangeBegin",
  service: UserServicer,
  requestStream: false,
  responseStream: false,
  requestType: proto_user_user_pb.ChangeBeginRequest,
  responseType: proto_user_user_pb.ChangeBeginResponse
};

UserServicer.ChangeCheck = {
  methodName: "ChangeCheck",
  service: UserServicer,
  requestStream: false,
  responseStream: false,
  requestType: proto_user_user_pb.ChangeCheckRequest,
  responseType: proto_user_user_pb.ChangeCheckResponse
};

UserServicer.ChangeEnd = {
  methodName: "ChangeEnd",
  service: UserServicer,
  requestStream: false,
  responseStream: false,
  requestType: proto_user_user_pb.ChangeEndRequest,
  responseType: proto_user_user_pb.ChangeEndResponse
};

UserServicer.DeleteBegin = {
  methodName: "DeleteBegin",
  service: UserServicer,
  requestStream: false,
  responseStream: false,
  requestType: proto_user_user_pb.DeleteBeginRequest,
  responseType: proto_user_user_pb.DeleteBeginResponse
};

UserServicer.DeleteCheck = {
  methodName: "DeleteCheck",
  service: UserServicer,
  requestStream: false,
  responseStream: false,
  requestType: proto_user_user_pb.DeleteCheckRequest,
  responseType: proto_user_user_pb.DeleteCheckResponse
};

UserServicer.DeleteEnd = {
  methodName: "DeleteEnd",
  service: UserServicer,
  requestStream: false,
  responseStream: false,
  requestType: proto_user_user_pb.DeleteEndRequest,
  responseType: proto_user_user_pb.DeleteEndResponse
};

UserServicer.ListUsers = {
  methodName: "ListUsers",
  service: UserServicer,
  requestStream: false,
  responseStream: false,
  requestType: proto_user_user_pb.ListUsersRequest,
  responseType: proto_user_user_pb.ListUsersResponse
};

UserServicer.CheckToken = {
  methodName: "CheckToken",
  service: UserServicer,
  requestStream: false,
  responseStream: false,
  requestType: proto_user_user_pb.CheckTokenRequest,
  responseType: proto_user_user_pb.CheckTokenResponse
};

UserServicer.RenewToken = {
  methodName: "RenewToken",
  service: UserServicer,
  requestStream: false,
  responseStream: false,
  requestType: proto_user_user_pb.RenewTokenRequest,
  responseType: proto_user_user_pb.RenewTokenResponse
};

UserServicer.Logout = {
  methodName: "Logout",
  service: UserServicer,
  requestStream: false,
  responseStream: false,
  requestType: proto_user_user_pb.LogoutRequest,
  responseType: proto_user_user_pb.LogoutResponse
};

exports.UserServicer = UserServicer;

function UserServicerClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

UserServicerClient.prototype.registerBegin = function registerBegin(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserServicer.RegisterBegin, {
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

UserServicerClient.prototype.registerCheck = function registerCheck(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserServicer.RegisterCheck, {
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

UserServicerClient.prototype.registerEnd = function registerEnd(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserServicer.RegisterEnd, {
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

UserServicerClient.prototype.loginBegin = function loginBegin(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserServicer.LoginBegin, {
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

UserServicerClient.prototype.loginCheck = function loginCheck(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserServicer.LoginCheck, {
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

UserServicerClient.prototype.loginEnd = function loginEnd(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserServicer.LoginEnd, {
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

UserServicerClient.prototype.sSOLogin = function sSOLogin(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserServicer.SSOLogin, {
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

UserServicerClient.prototype.changeBegin = function changeBegin(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserServicer.ChangeBegin, {
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

UserServicerClient.prototype.changeCheck = function changeCheck(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserServicer.ChangeCheck, {
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

UserServicerClient.prototype.changeEnd = function changeEnd(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserServicer.ChangeEnd, {
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

UserServicerClient.prototype.deleteBegin = function deleteBegin(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserServicer.DeleteBegin, {
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

UserServicerClient.prototype.deleteCheck = function deleteCheck(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserServicer.DeleteCheck, {
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

UserServicerClient.prototype.deleteEnd = function deleteEnd(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserServicer.DeleteEnd, {
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

UserServicerClient.prototype.listUsers = function listUsers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserServicer.ListUsers, {
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

UserServicerClient.prototype.checkToken = function checkToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserServicer.CheckToken, {
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

UserServicerClient.prototype.renewToken = function renewToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserServicer.RenewToken, {
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

UserServicerClient.prototype.logout = function logout(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserServicer.Logout, {
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

exports.UserServicerClient = UserServicerClient;

