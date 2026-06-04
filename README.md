Hive — A Modern Social Buzz Platform

Hive is a modern social media-inspired web application where users can share posts, interact with content, and connect with other users in a clean and responsive interface.
Built with Next.js, TypeScript, Tailwind CSS, and Firebase.

* Features:-

🔐 Authentication
Secure user authentication using Firebase Authentication
Sign Up and Login functionality
Protected routes for authenticated users
Guest viewing support

📝 Social Feed
Create and publish posts ("Bumbles")
Real-time content updates
User profile information displayed with each post
Responsive feed layout

❤️ User Interactions
Like posts
Comment on posts
Engagement tracking

👥 User Profiles
Personalized user profiles
Username and profile information
User activity display

📱 Responsive Design
Mobile-first design approach
Fully responsive across devices
Clean and modern UI inspired by contemporary social platforms

🛠️ Tech Stack
Frontend:
  Next.js
  TypeScript
  Tailwind CSS
  Redux Toolkit (State Management)
  
Backend & Services:
  Firebase Authentication
  Cloud Firestore
  Firebase Storage

Deployment:
  Vercel

* Firebase Setup
1] Create a Firebase project.
2] Enable Authentication.
3] Configure supported sign-in methods.
4] Create a Cloud Firestore database.
5] Enable Firebase Storage.
6] Add your Firebase credentials to .env.local.

-- Configure Environment Variables --
Create a .env.local file in the root directory:
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain

NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket

NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id

NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id


🎯Future Improvements:
Real-time chat system
Follow / Unfollow functionality
Notifications
Media uploads (images & videos)
Direct messaging
Dark mode
Bookmark system
Advanced search and filtering
User verification badges
AI-powered content recommendations

* Project Vision
Hive aims to provide a lightweight and engaging social platform where users can share ideas, discover trends, and interact with a growing community through a clean and modern user experience

🤝Contribution:
Contributions, issues, and feature requests are welcome.
Fork the project
Create your feature branch
git checkout -b feature/your-feature

Commit your changes
git commit -m "Add your feature"

Push to the branch
git push origin feature/your-feature
Open a Pull Request

📄 License
This project is licensed under the MIT License.
