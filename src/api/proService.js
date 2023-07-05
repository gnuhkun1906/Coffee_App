import instances from "./axios";
export const get_pro_service = async () => {
    let res = await instances.get("products")
    return res.data
}
export const post_pro_service = async (newProduct) => {
    await instances.post("products", newProduct)
}
export const del_pro_service = async (proDel) => {
   
    await instances.delete("products/" + proDel)
}
export const update_pro_service = async (proUpdate) => {
    await instances.put("products/" + proUpdate.id,proUpdate)
}