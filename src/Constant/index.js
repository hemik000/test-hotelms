export const API = "http://192.168.0.100:8000/api";

export const createCutomer = `${API}/customer/create/`;
export const joinTableSession = `${API}/customer`;
export const getTable = `${API}/table`;
export const getAllMenu = `${API}/menu`;
export const addToCart = `${API}/order/add-to-cart/`;
export const myOrder = `${API}/order/my/`;
export const updateQuantity = `${API}/order/update-quantity/`;
export const deleteItem = `${API}/order`;
export const addItem = `${API}/order/add-to-cart/`;
export const confirmItem = `${API}/order/confirm/`;
export const addCoupon = `${API}/order/coupon/add`;
export const removeCoupon = `${API}/order/coupon/remove`;
export const listCategory = `${API}/category/`;
export const paymentType = `${API}/order/payment-type/update`;
export const confirmOTP = `${API}/order/check-otp/`;
export const cashPay = `${API}/payment/cash-pay/`;
