# Yes-We-Kanban
## ✅ Setup
- [ ] **Download & unzip the starter code**
- [ ] **Create a new GitHub repository** and push the starter code

## ✅ Backend (Server)
- [ ] **Create a `.env` file in the `server` directory` with:**
  - [ ] `DB_USERNAME=<your_database_username>`
  - [ ] `DB_PASSWORD=<your_database_password>`
  - [ ] `JWT_SECRET=<your_random_secret_key>`
- [ ] **Complete `authenticateToken` method** in `server/src/middleware/auth.ts`
- [ ] **Complete `login` method** in `server/src/routes/auth-routes.ts`
- [ ] **Add authentication middleware** to API routes in `server/src/routes/index.ts`
- [ ] **Use Insomnia to test API endpoints**

## ✅ Frontend (Client)
- [ ] **Complete the login function** in `client/src/api/authAPI.tsx`
- [ ] **Complete methods in `AuthService`** in `client/src/utils/auth.ts`
- [ ] **Ensure JWT is stored in `localStorage` after login**
- [ ] **Ensure JWT is removed from `localStorage` after logout**
- [ ] **Redirect unauthenticated users to the login page**

## ✅ Authentication Features
- [ ] **Login page has username and password inputs**
- [ ] **Valid credentials authenticate the user & redirect to Kanban board**
- [ ] **Invalid credentials show an error message**
- [ ] **JWT stored in `localStorage` after successful login**
- [ ] **JWT removed when logging out**
- [ ] **Redirect unauthorized users from Kanban board to login page**
- [ ] **Session expires after inactivity (JWT invalidation)**

## ✅ Deployment
- [ ] **Deploy to Render (backend & frontend)**
- [ ] **Set environment variables on Render**
- [ ] **Ensure application loads with no errors**

## ✅ Bonus Features
- [ ] **Sorting for Kanban tickets**
- [ ] **Filtering for Kanban tickets**

## ✅ Final Submission
- [ ] **Push final code to GitHub**
- [ ] **Ensure a clear and well-formatted `README.md` with:**
  - [ ] Project description
  - [ ] Screenshot(s) of the app
  - [ ] Live deployment link
  - [ ] GitHub repository link
- [ ] **Submit both the deployed app URL & GitHub repo URL**
