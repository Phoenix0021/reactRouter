// githubLoader.js
const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Phooenix0021');
    return response.json();
}

export default githubInfoLoader