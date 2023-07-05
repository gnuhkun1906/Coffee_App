
import instances from "./axios";
export const get_cart_service = async (id) => {
    let res = await instances.get("cart")

    return res.data;
}
export const get_cart_byId = async (id) => {
    await instances.get("cart/productId=" + id)
}
export const post_cart_service = async (newProduct) => {

    await instances.post("cart", newProduct);
}
export const delete_cart_service = async (delCart) => {
    await instances.delete("cart/" + delCart);
}
export const update_cart_service = async (updateCart) => {
    await instances.patch("cart/" + updateCart.id, updateCart);
}