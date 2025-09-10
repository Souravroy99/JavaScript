const GITHUB_API = "https://github.com/Souravroy99"

const user = fetch(GITHUB_API)
.then((res) => console.log(res))
.catch((err) => console.log(err))

setTimeout(() => {
    console.log(user);
}, 5000);