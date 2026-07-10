import { auth, db } from "./firebase-config.js";

import {
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const btn = document.getElementById("signupBtn");

btn.addEventListener("click", async () => {

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!name || !email || !password || !confirmPassword) {
    alert("يرجى تعبئة جميع الحقول");
    return;
  }

  if (password !== confirmPassword) {
    alert("كلمتا المرور غير متطابقتين");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await setDoc(doc(db, "users", userCredential.user.uid), {
      name: name,
      email: email,
      points: 0
    });

    alert("تم إنشاء الحساب بنجاح");
    window.location.href = "login.html";

  } catch (error) {
    alert(error.message);
  }

});
