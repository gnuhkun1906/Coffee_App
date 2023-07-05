import instances from "./axios"
export const get_user_service = async () => {
    let res= await instances.get("users")
    return res.data
}
export const act_post_service = async (newUser) => {
    await instances.post("users",newUser)
}
