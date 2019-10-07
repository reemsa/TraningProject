export const getUser=()=>{
    return localStorage.getItem("user")
}
export const setCurrentUser=(data:any)=>{
    localStorage.setItem("user", JSON.stringify(data));
}