import instances from "./axios";

export const get_order_service = async () => {
 let res=  await instances.get("orderProducts")
 return res.data
}
export const post_order_service = async (cartOrder) => {
   await instances.post("orderProducts", cartOrder)
}
export const delete_order_service = async (orderId) => {
   await instances.post("orderProducts/"+ orderId)
}