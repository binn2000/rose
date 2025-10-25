# 🎂 Website Sinh Nhật - Hướng dẫn chạy trên VSCode

## 📋 Yêu cầu hệ thống

- **Node.js** phiên bản 18 trở lên
- **VSCode** (Visual Studio Code)
- **npm** hoặc **yarn**

## 🚀 Cách chạy dự án

### Bước 1: Cài đặt Node.js

Nếu chưa cài Node.js, tải và cài đặt tại: https://nodejs.org/

Kiểm tra đã cài đặt thành công:
```bash
node --version
npm --version
```

### Bước 2: Mở dự án trong VSCode

1. Mở VSCode
2. Chọn **File > Open Folder** 
3. Chọn thư mục chứa dự án này

### Bước 3: Cấu trúc thư mục cần thiết

Đảm bảo cấu trúc thư mục như sau:

```
birthday-website/
├── package.json
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── components/
│   │   ├── FallingHearts.tsx
│   │   ├── BirthdayMessage.tsx
│   │   ├── YouTubePlayer.tsx
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx
│   │   └── ui/
│   │       └── (các file UI components)
│   └── styles/
│       └── globals.css
```

**LƯU Ý:** Nếu các file đang ở ngoài thư mục `src`, bạn cần di chuyển:
- `App.tsx` → `src/App.tsx`
- `components/` → `src/components/`
- `styles/` → `src/styles/`

### Bước 4: Mở Terminal trong VSCode

Nhấn `` Ctrl + ` `` (hoặc **View > Terminal**)

### Bước 5: Cài đặt dependencies

Chạy lệnh:
```bash
npm install
```

Quá trình này sẽ tải về tất cả các thư viện cần thiết (React, Tailwind, Motion, v.v.). Có thể mất 2-5 phút.

### Bước 6: Chạy server phát triển

Sau khi cài đặt xong, chạy:
```bash
npm run dev
```

### Bước 7: Mở trình duyệt

Terminal sẽ hiển thị:
```
VITE v6.x.x ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

Mở trình duyệt và truy cập: **http://localhost:5173/**

## 🎵 Thay đổi nhạc YouTube

1. Mở file `src/App.tsx`
2. Tìm dòng: `const videoId = "NGe0hHvAGkc";`
3. Thay bằng Video ID của bài bạn muốn

**Cách lấy YouTube Video ID:**
- Mở video YouTube
- URL có dạng: `https://www.youtube.com/watch?v=ABC123`
- Copy phần `ABC123` (sau dấu `=`)
- Thay vào: `const videoId = "ABC123";`

## 🛠️ Các lệnh hữu ích

```bash
# Chạy server phát triển
npm run dev

# Build cho production
npm run build

# Xem bản build
npm run preview

# Dừng server
Ctrl + C (trong terminal)
```

## ❗ Xử lý lỗi thường gặp

### Lỗi: "Cannot find module"
**Giải pháp:** Chạy lại `npm install`

### Lỗi: "Port 5173 is already in use"
**Giải pháp:** 
- Đóng terminal đang chạy server cũ
- Hoặc chạy: `npm run dev -- --port 3000`

### Lỗi TypeScript
**Giải pháp:** Đảm bảo tất cả file `.tsx` đang ở trong thư mục `src/`

### YouTube không phát nhạc
**Giải pháp:** 
- Kiểm tra Video ID có đúng không
- Video có thể bị chặn nhúng (copyright)
- Thử video khác

## 📱 Responsive

Website tự động responsive trên:
- Desktop (1920px+)
- Tablet (768px - 1920px)  
- Mobile (< 768px)

## 🎨 Tùy chỉnh

- **Màu sắc:** Sửa trong file `src/styles/globals.css`
- **Lời chúc:** Sửa trong Dialog popup ở `src/App.tsx`
- **Ảnh slider:** Thay URL trong mảng `photos` ở `src/App.tsx`

## 📦 Deploy lên Internet

Sau khi build (`npm run build`), thư mục `dist/` chứa file tĩnh.

Upload lên:
- **Vercel:** https://vercel.com
- **Netlify:** https://netlify.com
- **GitHub Pages:** https://pages.github.com

## 💡 Tips

- Giữ terminal luôn mở khi phát triển
- Lưu file tự động reload trình duyệt
- Dùng DevTools (F12) để debug

---

❤️ Chúc bạn thành công!
