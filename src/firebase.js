import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Đây là file config cá nhân được khởi tạo dự trên firebase
const firebaseConfig = {
  apiKey: "AIzaSyCcjFJb4myM2xnF5-VcWr1V-mvKKjrdXak",
  authDomain: "project-md2-d4d9e.firebaseapp.com",
  projectId: "project-md2-d4d9e",
  storageBucket: "project-md2-d4d9e.appspot.com",
  messagingSenderId: "434102599318",
  appId: "1:434102599318:web:85d31831d9538ac1770cb7",
  measurementId: "G-86EB8HEY9B"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Storage and get a reference to the service
// Nhận tham chiếu đến dịch vụ lưu trữ, được sử dụng để tạo tham chiếu trong bộ chứa lưu trữ của bạn

export const storage = getStorage(app);
