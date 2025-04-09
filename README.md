# 🛒 ProductVerse

ProductVerse is a full-stack product management application with a **NestJS backend** and a **React + TypeScript frontend**. The backend was the primary focus for this project as I explored and learned NestJS, while the frontend was assembled quickly using templates for layout.

---

## 🚀 Project Structure

productverse/ ├── product-verse/ → Backend (NestJS) └── fe/ → Frontend (React + TypeScript)


---

## 📦 Backend (NestJS)

The backend is located in the `product-verse/` folder. It includes various API endpoints to manage users and products.

### ▶️ To Run Backend:

```bash
cd productverse/product-verse
npm install
npm run dev:watch


📌 Available API Endpoints:
🔐 User Endpoints
POST /user – Create new user

POST /user/login – Login

POST /user/signup – Signup

GET /user/:id – Get user by ID

📦 Product Endpoints
GET /product – Get all products

POST /product/create – Create a product

PUT /product/update/:id – Update product by ID

DELETE /product/delete/:id – Delete product by ID

Base URL: http://localhost:3000
```

### 🎨 Frontend (React + TypeScript)
The frontend is located in the fe/ folder. While not fully complete, it includes UI components and some structure to eventually interact with the backend.

### ▶️ To Run Frontend:
```bash
cd productverse/fe
npm install
npm run dev

Note: Due to time constraints, the frontend was assembled using multiple UI templates. Logic for connecting APIs is planned but not fully implemented.


🤝 Acknowledgements
While the frontend lacks polish, the backend is fully functional. This project was a great learning experience, especially in rapidly understanding and applying NestJS thanks to my prior backend development experience in other frameworks.

📌 Future Improvements
✅ Fully integrate backend with frontend

🔄 Replace template fragments with consistent UI components

🛡️ Add validation, error handling, and role-based permissions

📦 Deploy both frontend and backend with environment configurations
```
### 📬 Contact
Feel free to reachout if you’d like to collaborate or know more about this project!
```







