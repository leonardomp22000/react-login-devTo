const API_URL = "https://apidevto.onrender.com";

export function loginFunction({ name, email, password }) {
  return  fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      profilePic: "RefFoto",
      email: email,
      password: password,
    })
  })
  .then(response => response.json())
}

