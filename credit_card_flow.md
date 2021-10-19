# Luồng Credit Card
**Start**
[Tạo yêu cầu thanh toán](#tạo-yêu-cầu-thanh-toán)
Chọn phương thức thanh toán thẻ quốc tế
Nhập thông tin thẻ thanh toán trên Payon
[Tạo đơn hàng](#tạo-đơn-hàng)
[Tạo thanh toán](#tạo-thanh-toán) + gọi nhà cung cấp
==Xác thực 3D==
Kiểm tra trạng thái giao dịch
Tạo giao dịch
**End**
==2D==
[Tạo giao dịch](#thanh-toán-với-card-2d)
**End**
## Tạo yêu cầu thanh toán
- CreateRequestPayment
**Start**
Nhập thông tin đơn hàng và gửi lên server
Nhận yêu cầu thông tin đơn hàng
Kiểm tra thông tin:
    1. check merchant active (kích hoạt) hoặc verified (đã xác thực)
    2. merchant_request_id là unique
```
==Thông báo xác thực thất bại==
**End**
```
==Thành công==
Tạo đơn hàng: (request_payment)
Thông báo user thành công
**End**
## Tạo đơn hàng
- CreateOrder
**Start**
Nhập thông tin đơn hàng và gửi lên server
Nhận yêu cầu thông tin đơn hàng
Kiểm tra thông tin: 
    1. validate input 
    2. check trạng thái merchant active hoặc verified
    3. check payment_id (mã thanh toán) trong request_payment (yêu cầu thanh toán) với trạng thái (PROCESSING và NEW)
    4. Check service đã kích hoạt (service_code - mã dịch vụ), service_type (service_type_code - mã loại dịch vụ)
    5. merchant_service (dịch vụ merchant) đã kích hoạt
    6. cấu hình phí merchant, check amount min, max, . . .
```
==Thất bại==
**End**
```
==Thành công==
Build thông tin: transaction_id, time_expired, checksum, order_code
Tạo đơn hàng:
    1. orders
    2. orders_info
Thông báo user thành công
**End**
## Tạo thanh toán
- MakePayment
**Bắt đầu thanh toán**
Nhập thông tin đơn hàng với phương thức thanh toán gửi lên server
Nhận yêu cầu thông tin đơn hàng
Kiểm tra thông tin:
    1. validate input, check order
    2. check merchant active hoặc verified
    3. check payment_id trong request_payment với trạng thái (PROCESSING, NEW)
    4. check service đã kích hoạt (service_code),service_type (service_type_code)
    5. merchant_service đã kích hoạt
    6. cấu hình phí merchant, check amount min, max, . . .
    7. check channel active
```
==thất bại==
thông báo xác thực thất bại
build html form - collection device data
PayWithCard 2D
**Hoàn thành tạo yêu cầu**
```
==thành công==
cập nhật đơn hàng:
    1. cập nhật đơn hàng
    2. request_payment
    3. orders.info (thông tin đơn hàng)
gọi nhà cung cấp:
    1. CheckCardEnviroment (kiểm tra thẻ 2D, 3D), nếu hệ thống bật check thì check step này
    2. SetupV2 (gửi thông tin thẻ thanh toán)
    3. lưu logs yêu cầu và trả về
thông báo user xử lý thành công / thất bại
build html form - collection device data
PayWithCard 2D
**Hoàn thành tạo yêu cầu**
## Thanh toán với card 2D
- PayWithCard2D
**Bắt đầu thanh toán**
nhập thông tin đơn hàng với phương thức thanh toán gửi lên server
nhận yêu cầu thông tin đơn hàng
kiểm tra thông tin:
    1. validate input, check order
    2. check merchant active hoặc verified
    3. check payment_id trong request_payment với trạng thái (PROCESSING, NEW)
    4. check service đã kích hoạt (service_code),service_type (service_type_code)
    5. merchant_service đã kích hoạt
    6. cấu hình phí merchant, check amount min, max, . . .
    7. check channel active
```
==thông báo xác thực thất bại==
FAILED
**hoàn thành yêu cầu**
```
==thành công==
gọi nhà cung cấp: PayWithCard2D
==3D==
thông báo user xử lý thành công / thất bại
tạo form xác thực 3D, điều hướng endpoint
[xác thực thanh toán](#xác-thực-thanh-toán)
**hoàn thành yêu cầu**
==thành công==
cập nhật đơn hàng thành công, tạo giao dịch
**hoàn thành yêu cầu**
```
==lỗi khác (failed)==
update order failed
FAILED
**hoàn thành yêu cầu**
```
## Xác thực thanh toán
- VerifyPayment
**bắt đầu thanh toán**
nhập thông tin đơn hàng và phương thức thanh toán gửi lên server
nhận yêu cầu thông tin đơn hàng
kiểm tra thông tin:
    1. validate input, check order
    2. check merchant active hoặc verified
    3. check payment_id trong request_payment với trạng thái (PROCESSING, NEW)
    4. check service đã kích hoạt (service_code),service_type (service_type_code)
    5. merchant_service đã kích hoạt
    6. cấu hình phí merchant, check amount min, max, . . .
    7. check channel active
```
==thông báo xác thực thất bại==
**hoàn thành tạo yêu cầu**
```
==thành công==
gọi nhà cung cấp
PayerAuthenticationValidation (check authen người thanh toán)
cập nhật đơn hàng, giao dịch
thông báo user xử lý thành công / thất bại
**hoàn thành tạo yêu cầu**