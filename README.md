# 🍽️ Recipia

**ค้นพบสูตรอาหารใหม่ทุกวัน** — แพลตฟอร์มสูตรอาหารออนไลน์สำหรับนักทำอาหารที่รักการทดลองเมนูใหม่ๆ

![Recipia](public/images/hero.avif)

---

## ✨ ฟีเจอร์หลัก

- 🏠 **หน้าแรก** — แสดงสูตรอาหารยอดนิยมและหมวดหมู่ต่างๆ
- 🔍 **ค้นหาและกรอง** — ค้นหาด้วยชื่อ กรองตามหมวดหมู่ เวลาปรุง และจำนวนเสิร์ฟ
- 📖 **รายละเอียดสูตร** — ดูส่วนผสม ขั้นตอนการทำ ข้อมูลโภชนาการ และรีวิว
- 🔖 **บุ๊กมาร์ก** — บันทึกสูตรอาหารโปรดไว้ดูภายหลัง
- ✍️ **สร้างสูตรของคุณ** — เพิ่มสูตรอาหารส่วนตัวพร้อมรูปภาพ ส่วนผสม และขั้นตอนการทำ

---

## 🛠️ เทคโนโลยีที่ใช้

| เทคโนโลยี | รายละเอียด |
|---|---|
| [React 19](https://react.dev/) | UI Library |
| [Vite 7](https://vitejs.dev/) | Build Tool & Dev Server |
| [React Router DOM 6](https://reactrouter.com/) | Client-side Routing |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first CSS Framework |
| [Material UI 7](https://mui.com/) | UI Component Library |
| [Lucide React](https://lucide.dev/) | Icon Library |
| [React Masonry CSS](https://github.com/paulcollett/react-masonry-css) | Masonry Grid Layout |

---

## 🚀 เริ่มต้นใช้งาน

### ความต้องการของระบบ

- [Node.js](https://nodejs.org/) v18 ขึ้นไป
- npm v9 ขึ้นไป

### ติดตั้งและรันโปรเจกต์

1. **Clone repository**

   ```bash
   git clone https://github.com/OlDeuS1/Recipia.git
   cd Recipia
   ```

2. **ติดตั้ง dependencies**

   ```bash
   npm install
   ```

3. **รัน development server**

   ```bash
   npm run dev
   ```

   เปิดเบราว์เซอร์ที่ `http://localhost:5173`

---

## 📁 โครงสร้างโปรเจกต์

```
Recipia/
├── public/
│   └── images/          # รูปภาพสูตรอาหาร
├── src/
│   ├── components/
│   │   ├── common/      # คอมโพเนนต์ที่ใช้ร่วมกัน (RecipeCard, SearchBar, ฯลฯ)
│   │   └── layout/      # Topbar, Footer
│   ├── data/
│   │   └── recipes.json # ฐานข้อมูลสูตรอาหาร (18 เมนู)
│   ├── pages/
│   │   ├── Home/        # หน้าแรก
│   │   ├── Explore/     # หน้าค้นหาและกรอง
│   │   ├── RecipeDetail/# หน้ารายละเอียดสูตร
│   │   ├── Bookmark/    # หน้าบุ๊กมาร์ก
│   │   └── CreateRecipe/# หน้าสร้างสูตรใหม่
│   ├── services/
│   │   └── recipeService.js # Logic การดึงและกรองข้อมูลสูตรอาหาร
│   ├── App.jsx          # Root layout component
│   └── main.jsx         # Entry point และ Router config
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---
