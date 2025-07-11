# 🛡️ SOI SCAM – Website Tố Cáo Lừa Đảo Trực Tuyến

> Kiểm tra và tra cứu thông tin những đối tượng lừa đảo qua tài khoản ngân hàng, số điện thoại, hình ảnh và các phương thức lừa đảo phổ biến.

---

## 📌 Mục tiêu

- Lưu trữ và hiển thị các thông tin tố cáo lừa đảo từ cộng đồng
- Tìm kiếm nhanh theo số tài khoản ngân hàng
- Hiển thị các cảnh báo hôm nay và các kiểu lừa đảo phổ biến
- Cung cấp giao diện đơn giản, dễ sử dụng, tối ưu cho thiết bị di động

---
## 📌 Tính năng chính
🔍 **Tra cứu thông tin** theo số tài khoản ngân hàng hoặc số điện thoại.
- 🧾 **Hiển thị danh sách tố cáo**: gồm tên người bị tố, tài khoản, ngân hàng, người tố cáo, trạng thái và nội dung tố cáo.
- 📸 **Xem hình ảnh bằng chứng** bằng thư viện `LightGallery`.
- 📝 **Gửi đơn tố cáo** thông qua form (trong file `report.html` ).
- 📱 **Responsive** – giao diện đẹp, hoạt động tốt trên cả mobile và desktop.

## ⚙️ Công nghệ sử dụng

| Thành phần     | Công nghệ                                                                 |
|----------------|--------------------------------------------------------------------------|
| **Frontend**   | HTML5, CSS3, JavaScript (Vanilla)                                        |
| **Thư viện**   | [Axios](https://axios-http.com/), [LightGallery](https://www.lightgalleryjs.com/) |
| **Fonts**      | Google Fonts – [Montserrat](https://fonts.google.com/specimen/Montserrat) |
| **Icon**       | SVG files                                                                |
| **API**        | Dữ liệu giả lập từ MockAPI hoặc endpoint tùy chỉnh qua `axios`           |

---

## 🖼️ Giao diện chính

- Trang chủ: Tìm kiếm, xem danh sách scammer hôm nay, cảnh báo các hình thức lừa đảo
- Trang `scammers.html`: Danh sách kết quả tìm kiếm theo từ khóa (số tài khoản)
- Trang `report.html`: Gửi đơn tố cáo scammer (chưa hiển thị trong đoạn code mẫu)
- Modal: Chi tiết người bị tố và người tố cáo

---
🧠 Mô tả hoạt động
Người dùng vào index.html, có thể tra cứu số tài khoản/ngân hàng để kiểm tra.

Các dữ liệu tố cáo được lấy từ MockAPI và hiển thị dưới dạng danh sách.

Khi người dùng click vào 1 mục, modal hiện ra chi tiết người tố cáo, kẻ bị tố, hình ảnh liên quan,...

Dữ liệu hình ảnh được hiển thị bằng thư viện LightGallery.

⚠️ Lưu ý
Dự án này chưa có backend thật sự – tất cả dữ liệu là demo.

Có thể nâng cấp lên sử dụng Node.js + MongoDB hoặc Firebase để làm backend thật.

Các thông tin tố cáo chỉ mang tính minh họa.


## 🚀 Cài đặt & chạy local

### 1. Clone project

```bash
git clone https://github.com/your-username/soi-scam.git
cd soi-scam
```
2. Mở bằng Live Server (VS Code extension)
Bạn có thể mở file index.html trực tiếp bằng Live Server (cài trong VS Code) hoặc sử dụng bất kỳ server cục bộ nào.


## Giao diện Web
1.Trang chủ

<img width="1919" height="879" alt="image" src="https://github.com/user-attachments/assets/d7b1a76b-3f71-48c3-8aee-f3a02b1498a6" />

2.Danh sách Scam

<img width="1919" height="896" alt="image" src="https://github.com/user-attachments/assets/d63bb835-d507-491c-9361-9bb51b1ede62" />

3. Chi tiết tố cáo

<img width="1163" height="887" alt="image" src="https://github.com/user-attachments/assets/bd86a908-4078-4326-a151-b08c63794fb4" />

4.Xem ảnh bằng chứng

<img width="1918" height="876" alt="image" src="https://github.com/user-attachments/assets/97966825-3e65-4b0f-a93e-e779ff3be756" />

4. Trang gửi tố cáo

<img width="1893" height="891" alt="image" src="https://github.com/user-attachments/assets/d3dd17e4-fa78-446f-b914-047499c7be2a" />

5.Trang Admin Quản lý  đơn tố cáo

<img width="1904" height="876" alt="image" src="https://github.com/user-attachments/assets/0fb354d0-7bec-4142-831d-e6f8e41b6588" />


Lưu ý: ## 🔗 Tham khảo & Cảm hứng

Dự án này được thực hiện với mục đích học tập và tham khảo, có sử dụng ý tưởng hoặc tài nguyên từ nhiều nguồn khác nhau trên internet như:

- Các trang web cảnh báo lừa đảo trên mạng xã hội.
- Một số mẫu thiết kế UI trên Dribbble, Behance.
- Các bài viết hướng dẫn về LightGallery, Fetch API, DOM.
- Các đoạn mã tham khảo từ StackOverflow và cộng đồng GitHub.

Mọi tài liệu, hình ảnh và thư viện được sử dụng đều tuân thủ mục đích học tập, phi thương mại. Xin chân thành cảm ơn những nguồn cảm hứng và tài liệu quý giá từ cộng đồng.




