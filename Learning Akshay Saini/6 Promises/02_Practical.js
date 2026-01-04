const GITHUB_API = "https://api.github.com/users/Souravroy99";

const userInfo = fetch(GITHUB_API)
    .then((res) => res.json())
    .then((user) => user)
    .catch((err) => console.error(err));

setTimeout(() => {
    console.log(userInfo);
}, 1000);