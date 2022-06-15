import { backendLocation } from './__env'


// Mail Routes
export const sendMail = () => `${backendLocation}/api/mail/send/`


// Payment Routes
export const savePayment = () => `${backendLocation}/api/payment/create/`

export const getPayment = (paymentID) => `${backendLocation}/api/payment/get-one?_id=${paymentID}`

export const getAllPayment = () => `${backendLocation}/api/payment/get-all/`

export const removePayment = (paymentID) => `${backendLocation}/api/payment/delete-one?_id=${paymentID}`

