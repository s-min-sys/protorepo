// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.18.1
// source: proto/user/authenticator_anonymous.proto

package userpb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// AuthenticatorAnonymousClient is the client API for AuthenticatorAnonymous service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type AuthenticatorAnonymousClient interface {
	SetUserName(ctx context.Context, in *SetUserNameRequest, opts ...grpc.CallOption) (*SetUserNameResponse, error)
}

type authenticatorAnonymousClient struct {
	cc grpc.ClientConnInterface
}

func NewAuthenticatorAnonymousClient(cc grpc.ClientConnInterface) AuthenticatorAnonymousClient {
	return &authenticatorAnonymousClient{cc}
}

func (c *authenticatorAnonymousClient) SetUserName(ctx context.Context, in *SetUserNameRequest, opts ...grpc.CallOption) (*SetUserNameResponse, error) {
	out := new(SetUserNameResponse)
	err := c.cc.Invoke(ctx, "/AuthenticatorAnonymous/SetUserName", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AuthenticatorAnonymousServer is the server API for AuthenticatorAnonymous service.
// All implementations must embed UnimplementedAuthenticatorAnonymousServer
// for forward compatibility
type AuthenticatorAnonymousServer interface {
	SetUserName(context.Context, *SetUserNameRequest) (*SetUserNameResponse, error)
	mustEmbedUnimplementedAuthenticatorAnonymousServer()
}

// UnimplementedAuthenticatorAnonymousServer must be embedded to have forward compatible implementations.
type UnimplementedAuthenticatorAnonymousServer struct {
}

func (UnimplementedAuthenticatorAnonymousServer) SetUserName(context.Context, *SetUserNameRequest) (*SetUserNameResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetUserName not implemented")
}
func (UnimplementedAuthenticatorAnonymousServer) mustEmbedUnimplementedAuthenticatorAnonymousServer() {
}

// UnsafeAuthenticatorAnonymousServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to AuthenticatorAnonymousServer will
// result in compilation errors.
type UnsafeAuthenticatorAnonymousServer interface {
	mustEmbedUnimplementedAuthenticatorAnonymousServer()
}

func RegisterAuthenticatorAnonymousServer(s grpc.ServiceRegistrar, srv AuthenticatorAnonymousServer) {
	s.RegisterService(&AuthenticatorAnonymous_ServiceDesc, srv)
}

func _AuthenticatorAnonymous_SetUserName_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SetUserNameRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthenticatorAnonymousServer).SetUserName(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/AuthenticatorAnonymous/SetUserName",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthenticatorAnonymousServer).SetUserName(ctx, req.(*SetUserNameRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// AuthenticatorAnonymous_ServiceDesc is the grpc.ServiceDesc for AuthenticatorAnonymous service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var AuthenticatorAnonymous_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "AuthenticatorAnonymous",
	HandlerType: (*AuthenticatorAnonymousServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "SetUserName",
			Handler:    _AuthenticatorAnonymous_SetUserName_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/user/authenticator_anonymous.proto",
}
