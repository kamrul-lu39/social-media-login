# Social Media Login Project

This project implements a **social media login system** using Google and Facebook OAuth 2.0. It features secure authentication, session management, and redirects users to a homepage upon successful login.

## Features
- Social media login options (Google, Facebook).
- OAuth 2.0 integration for secure authentication.
- Session management with `express-session`.
- A clean login screen with options to log in using Google or Facebook.
- Redirection to the homepage upon successful login.

---

## Prerequisites
Ensure the following are installed on your system:
- Node.js (v16+ recommended)
- MongoDB (local or Atlas for cloud-based database)
- Git (for version control)

---

## Project Setup

### 1. Clone the Repository
```sh
git clone https://github.com/your-username/social-media-login.git
cd social-media-login
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```env
GOOGLE_CLIENT_ID=881833187150-knl47gpfr04vnnc3554hh1do67pmsk6m.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
MONGO_URI=mongodb://127.0.0.1:27017/loginpag
```
Replace the placeholders (`881833187150-knl47gpfr04vnnc3554hh1do67pmsk6m.apps.googleusercontent.com`, etc.) with your actual credentials.

### 4. Start MongoDB
- **For local MongoDB:**
  ```sh
  mongod
  ```

### 5. Run the Application
```sh
node app.js
```

Access the app at `http://localhost:3000`.

---

## Application Structure

```
/social-media-login
├── config
│   └── passport.js          # Passport strategy configurations
├── routes
│   └── auth.js              # Authentication routes
├── .env                     # Environment variables (excluded in .gitignore)
├── .gitignore               # Ignore sensitive files and directories
├── app.js                   # Main application entry point
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation
```

---

## How It Works

### Login Screen
The app initially shows a login screen with options:
- **Login with Google**
- **Login with Facebook**

### Authentication Flow
1. When a user clicks on a login option, they are redirected to the OAuth provider (Google or Facebook).
2. After successful authentication, the provider redirects the user back to the app's callback URL.
3. The app handles the user's session and redirects them to the homepage.

### Routes
- `/`: Displays the login screen.
- `/auth/google`: Initiates Google login.
- `/auth/facebook`: Initiates Facebook login.
- `/home`: Displays the homepage after successful login.
- `/auth/logout`: Logs the user out and redirects to the login screen.

---

## Deployment

### Push to GitHub
1. Initialize Git:
   ```sh
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/social-media-login.git
   git push -u origin main
   ```

2. Ensure `.env` is excluded by adding it to `.gitignore`:
   ```plaintext
   .env
   ```

### Use GitHub Secrets
For deployments, store sensitive credentials in **GitHub Secrets** instead of `.env`:
- Go to your repository on GitHub.
- Navigate to **Settings > Secrets and variables > Actions > New repository secret**.

Add the following secrets:

## Security Considerations
- Do not expose sensitive data (e.g., `.env`) in the repository.
- Use HTTPS for secure data transmission.
- Validate and sanitize all user inputs.
- Store session data securely using `express-session`.

---

## License
This project is licensed under the MIT License.

---

## Author
**Kamrul**
- GitHub: [kamrul-lu39](https://github.com/kamrul-lu39)
