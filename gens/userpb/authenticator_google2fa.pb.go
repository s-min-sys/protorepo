// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.18.1
// source: proto/user/authenticator_google2fa.proto

package userpb

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type GetSetupInfoRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	BizId string `protobuf:"bytes,1,opt,name=biz_id,json=bizId,proto3" json:"biz_id,omitempty"`
}

func (x *GetSetupInfoRequest) Reset() {
	*x = GetSetupInfoRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_user_authenticator_google2fa_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetSetupInfoRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetSetupInfoRequest) ProtoMessage() {}

func (x *GetSetupInfoRequest) ProtoReflect() protoreflect.Message {
	mi := &file_proto_user_authenticator_google2fa_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetSetupInfoRequest.ProtoReflect.Descriptor instead.
func (*GetSetupInfoRequest) Descriptor() ([]byte, []int) {
	return file_proto_user_authenticator_google2fa_proto_rawDescGZIP(), []int{0}
}

func (x *GetSetupInfoRequest) GetBizId() string {
	if x != nil {
		return x.BizId
	}
	return ""
}

type GetSetupInfoResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status    *Status `protobuf:"bytes,1,opt,name=status,proto3" json:"status,omitempty"`
	SecretKey string  `protobuf:"bytes,2,opt,name=secret_key,json=secretKey,proto3" json:"secret_key,omitempty"`
	QrCode    string  `protobuf:"bytes,3,opt,name=qr_code,json=qrCode,proto3" json:"qr_code,omitempty"`
}

func (x *GetSetupInfoResponse) Reset() {
	*x = GetSetupInfoResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_user_authenticator_google2fa_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetSetupInfoResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetSetupInfoResponse) ProtoMessage() {}

func (x *GetSetupInfoResponse) ProtoReflect() protoreflect.Message {
	mi := &file_proto_user_authenticator_google2fa_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetSetupInfoResponse.ProtoReflect.Descriptor instead.
func (*GetSetupInfoResponse) Descriptor() ([]byte, []int) {
	return file_proto_user_authenticator_google2fa_proto_rawDescGZIP(), []int{1}
}

func (x *GetSetupInfoResponse) GetStatus() *Status {
	if x != nil {
		return x.Status
	}
	return nil
}

func (x *GetSetupInfoResponse) GetSecretKey() string {
	if x != nil {
		return x.SecretKey
	}
	return ""
}

func (x *GetSetupInfoResponse) GetQrCode() string {
	if x != nil {
		return x.QrCode
	}
	return ""
}

type DoSetupRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	BizId string `protobuf:"bytes,1,opt,name=biz_id,json=bizId,proto3" json:"biz_id,omitempty"`
	Code  string `protobuf:"bytes,2,opt,name=code,proto3" json:"code,omitempty"`
}

func (x *DoSetupRequest) Reset() {
	*x = DoSetupRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_user_authenticator_google2fa_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DoSetupRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DoSetupRequest) ProtoMessage() {}

func (x *DoSetupRequest) ProtoReflect() protoreflect.Message {
	mi := &file_proto_user_authenticator_google2fa_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DoSetupRequest.ProtoReflect.Descriptor instead.
func (*DoSetupRequest) Descriptor() ([]byte, []int) {
	return file_proto_user_authenticator_google2fa_proto_rawDescGZIP(), []int{2}
}

func (x *DoSetupRequest) GetBizId() string {
	if x != nil {
		return x.BizId
	}
	return ""
}

func (x *DoSetupRequest) GetCode() string {
	if x != nil {
		return x.Code
	}
	return ""
}

type DoSetupResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status *Status `protobuf:"bytes,1,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *DoSetupResponse) Reset() {
	*x = DoSetupResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_user_authenticator_google2fa_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DoSetupResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DoSetupResponse) ProtoMessage() {}

func (x *DoSetupResponse) ProtoReflect() protoreflect.Message {
	mi := &file_proto_user_authenticator_google2fa_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DoSetupResponse.ProtoReflect.Descriptor instead.
func (*DoSetupResponse) Descriptor() ([]byte, []int) {
	return file_proto_user_authenticator_google2fa_proto_rawDescGZIP(), []int{3}
}

func (x *DoSetupResponse) GetStatus() *Status {
	if x != nil {
		return x.Status
	}
	return nil
}

type VerifyRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	BizId string `protobuf:"bytes,1,opt,name=biz_id,json=bizId,proto3" json:"biz_id,omitempty"`
	Code  string `protobuf:"bytes,2,opt,name=code,proto3" json:"code,omitempty"`
}

func (x *VerifyRequest) Reset() {
	*x = VerifyRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_user_authenticator_google2fa_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *VerifyRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VerifyRequest) ProtoMessage() {}

func (x *VerifyRequest) ProtoReflect() protoreflect.Message {
	mi := &file_proto_user_authenticator_google2fa_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use VerifyRequest.ProtoReflect.Descriptor instead.
func (*VerifyRequest) Descriptor() ([]byte, []int) {
	return file_proto_user_authenticator_google2fa_proto_rawDescGZIP(), []int{4}
}

func (x *VerifyRequest) GetBizId() string {
	if x != nil {
		return x.BizId
	}
	return ""
}

func (x *VerifyRequest) GetCode() string {
	if x != nil {
		return x.Code
	}
	return ""
}

type VerifyResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status *Status `protobuf:"bytes,1,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *VerifyResponse) Reset() {
	*x = VerifyResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_user_authenticator_google2fa_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *VerifyResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VerifyResponse) ProtoMessage() {}

func (x *VerifyResponse) ProtoReflect() protoreflect.Message {
	mi := &file_proto_user_authenticator_google2fa_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use VerifyResponse.ProtoReflect.Descriptor instead.
func (*VerifyResponse) Descriptor() ([]byte, []int) {
	return file_proto_user_authenticator_google2fa_proto_rawDescGZIP(), []int{5}
}

func (x *VerifyResponse) GetStatus() *Status {
	if x != nil {
		return x.Status
	}
	return nil
}

var File_proto_user_authenticator_google2fa_proto protoreflect.FileDescriptor

var file_proto_user_authenticator_google2fa_proto_rawDesc = []byte{
	0x0a, 0x28, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x75, 0x73, 0x65, 0x72, 0x2f, 0x61, 0x75, 0x74,
	0x68, 0x65, 0x6e, 0x74, 0x69, 0x63, 0x61, 0x74, 0x6f, 0x72, 0x5f, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x32, 0x66, 0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x17, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x2f, 0x75, 0x73, 0x65, 0x72, 0x2f, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x22, 0x2c, 0x0a, 0x13, 0x47, 0x65, 0x74, 0x53, 0x65, 0x74, 0x75, 0x70, 0x49,
	0x6e, 0x66, 0x6f, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x15, 0x0a, 0x06, 0x62, 0x69,
	0x7a, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x62, 0x69, 0x7a, 0x49,
	0x64, 0x22, 0x6f, 0x0a, 0x14, 0x47, 0x65, 0x74, 0x53, 0x65, 0x74, 0x75, 0x70, 0x49, 0x6e, 0x66,
	0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x1f, 0x0a, 0x06, 0x73, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x07, 0x2e, 0x53, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x1d, 0x0a, 0x0a, 0x73, 0x65,
	0x63, 0x72, 0x65, 0x74, 0x5f, 0x6b, 0x65, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09,
	0x73, 0x65, 0x63, 0x72, 0x65, 0x74, 0x4b, 0x65, 0x79, 0x12, 0x17, 0x0a, 0x07, 0x71, 0x72, 0x5f,
	0x63, 0x6f, 0x64, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x71, 0x72, 0x43, 0x6f,
	0x64, 0x65, 0x22, 0x3b, 0x0a, 0x0e, 0x44, 0x6f, 0x53, 0x65, 0x74, 0x75, 0x70, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x15, 0x0a, 0x06, 0x62, 0x69, 0x7a, 0x5f, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x62, 0x69, 0x7a, 0x49, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x63,
	0x6f, 0x64, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x22,
	0x32, 0x0a, 0x0f, 0x44, 0x6f, 0x53, 0x65, 0x74, 0x75, 0x70, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x1f, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x07, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x22, 0x3a, 0x0a, 0x0d, 0x56, 0x65, 0x72, 0x69, 0x66, 0x79, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x15, 0x0a, 0x06, 0x62, 0x69, 0x7a, 0x5f, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x62, 0x69, 0x7a, 0x49, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x63,
	0x6f, 0x64, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x22,
	0x31, 0x0a, 0x0e, 0x56, 0x65, 0x72, 0x69, 0x66, 0x79, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x1f, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x07, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x32, 0xb4, 0x01, 0x0a, 0x16, 0x41, 0x75, 0x74, 0x68, 0x65, 0x6e, 0x74, 0x69, 0x63,
	0x61, 0x74, 0x6f, 0x72, 0x47, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x32, 0x66, 0x61, 0x12, 0x3d, 0x0a,
	0x0c, 0x47, 0x65, 0x74, 0x53, 0x65, 0x74, 0x75, 0x70, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x14, 0x2e,
	0x47, 0x65, 0x74, 0x53, 0x65, 0x74, 0x75, 0x70, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x15, 0x2e, 0x47, 0x65, 0x74, 0x53, 0x65, 0x74, 0x75, 0x70, 0x49, 0x6e,
	0x66, 0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x2e, 0x0a, 0x07,
	0x44, 0x6f, 0x53, 0x65, 0x74, 0x75, 0x70, 0x12, 0x0f, 0x2e, 0x44, 0x6f, 0x53, 0x65, 0x74, 0x75,
	0x70, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x10, 0x2e, 0x44, 0x6f, 0x53, 0x65, 0x74,
	0x75, 0x70, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x2b, 0x0a, 0x06,
	0x56, 0x65, 0x72, 0x69, 0x66, 0x79, 0x12, 0x0e, 0x2e, 0x56, 0x65, 0x72, 0x69, 0x66, 0x79, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x0f, 0x2e, 0x56, 0x65, 0x72, 0x69, 0x66, 0x79, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x51, 0x0a, 0x0f, 0x63, 0x6f, 0x6d,
	0x2e, 0x70, 0x61, 0x74, 0x64, 0x7a, 0x62, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x42, 0x09, 0x55, 0x73,
	0x65, 0x72, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x31, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x2d, 0x6d, 0x69, 0x6e, 0x2d, 0x73, 0x79, 0x73, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x72, 0x65, 0x70, 0x6f, 0x2f, 0x67, 0x65, 0x6e, 0x73, 0x2f, 0x75,
	0x73, 0x65, 0x72, 0x70, 0x62, 0x3b, 0x75, 0x73, 0x65, 0x72, 0x70, 0x62, 0x62, 0x06, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_user_authenticator_google2fa_proto_rawDescOnce sync.Once
	file_proto_user_authenticator_google2fa_proto_rawDescData = file_proto_user_authenticator_google2fa_proto_rawDesc
)

func file_proto_user_authenticator_google2fa_proto_rawDescGZIP() []byte {
	file_proto_user_authenticator_google2fa_proto_rawDescOnce.Do(func() {
		file_proto_user_authenticator_google2fa_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_user_authenticator_google2fa_proto_rawDescData)
	})
	return file_proto_user_authenticator_google2fa_proto_rawDescData
}

var file_proto_user_authenticator_google2fa_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_proto_user_authenticator_google2fa_proto_goTypes = []interface{}{
	(*GetSetupInfoRequest)(nil),  // 0: GetSetupInfoRequest
	(*GetSetupInfoResponse)(nil), // 1: GetSetupInfoResponse
	(*DoSetupRequest)(nil),       // 2: DoSetupRequest
	(*DoSetupResponse)(nil),      // 3: DoSetupResponse
	(*VerifyRequest)(nil),        // 4: VerifyRequest
	(*VerifyResponse)(nil),       // 5: VerifyResponse
	(*Status)(nil),               // 6: Status
}
var file_proto_user_authenticator_google2fa_proto_depIdxs = []int32{
	6, // 0: GetSetupInfoResponse.status:type_name -> Status
	6, // 1: DoSetupResponse.status:type_name -> Status
	6, // 2: VerifyResponse.status:type_name -> Status
	0, // 3: AuthenticatorGoogle2fa.GetSetupInfo:input_type -> GetSetupInfoRequest
	2, // 4: AuthenticatorGoogle2fa.DoSetup:input_type -> DoSetupRequest
	4, // 5: AuthenticatorGoogle2fa.Verify:input_type -> VerifyRequest
	1, // 6: AuthenticatorGoogle2fa.GetSetupInfo:output_type -> GetSetupInfoResponse
	3, // 7: AuthenticatorGoogle2fa.DoSetup:output_type -> DoSetupResponse
	5, // 8: AuthenticatorGoogle2fa.Verify:output_type -> VerifyResponse
	6, // [6:9] is the sub-list for method output_type
	3, // [3:6] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_proto_user_authenticator_google2fa_proto_init() }
func file_proto_user_authenticator_google2fa_proto_init() {
	if File_proto_user_authenticator_google2fa_proto != nil {
		return
	}
	file_proto_user_status_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_proto_user_authenticator_google2fa_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetSetupInfoRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_user_authenticator_google2fa_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetSetupInfoResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_user_authenticator_google2fa_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DoSetupRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_user_authenticator_google2fa_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DoSetupResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_user_authenticator_google2fa_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*VerifyRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_user_authenticator_google2fa_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*VerifyResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_proto_user_authenticator_google2fa_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_proto_user_authenticator_google2fa_proto_goTypes,
		DependencyIndexes: file_proto_user_authenticator_google2fa_proto_depIdxs,
		MessageInfos:      file_proto_user_authenticator_google2fa_proto_msgTypes,
	}.Build()
	File_proto_user_authenticator_google2fa_proto = out.File
	file_proto_user_authenticator_google2fa_proto_rawDesc = nil
	file_proto_user_authenticator_google2fa_proto_goTypes = nil
	file_proto_user_authenticator_google2fa_proto_depIdxs = nil
}
