const userInfoBtn = () => {
    const url = `https://randomuser.me/api/?gender=female`
    fetch(url)
        .then(res => res.json())
        .then(data => displayUserInfo(data.results[0]));


}

const loadUserAsync = async function () {
    const url = `https://randomuser.me/api/?gender=female`;


    try {
        const res = await fetch(url);
        const data = await res.json();
        displayUserInfo(data.results[0]);
    }
    catch (Error) {
        console.log(Error)
    }



}


const displayUserInfo = (userInfo) => {
    console.log(userInfo)
}