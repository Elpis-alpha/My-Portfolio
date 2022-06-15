import { useState } from "react"

import styled from "styled-components"

import { PayPalButton } from "react-paypal-button-v2"

import { sendMiniMessage } from "../../controllers/MessageCtrl"

import { postApiJson } from "../../controllers/APICtrl"

import { savePayment } from "../../api"

import { clientID, paymentPassword } from "../../__env"


const PaymentPage = () => {

  const [amountValue, setAmountValue] = useState("")

  const [description, setDescription] = useState("")

  const [paymentStage, setPaymentStage] = useState("elpis")

  const submitPayment = e => {

    e.preventDefault()

    if (description.trim().split(' ').filter(x => x !== '').length < 5) {

      return sendMiniMessage({

        icon: { name: "times", style: {} },

        content: { text: `Description is too short: ${description.trim().split(' ').filter(x => x !== '').length} word(s)!`, style: {} },

      }, 2000)

    } else if (isNaN(amountValue)) {

      return sendMiniMessage({

        icon: { name: "times", style: {} },

        content: { text: "Invalid Amount", style: {} },

      }, 2000)

    } else if (!parseFloat(amountValue) > .009) {

      return sendMiniMessage({

        icon: { name: "times", style: {} },

        content: { text: "Amount too low!", style: {} },

      }, 2000)

    } else {

      setPaymentStage("paypal")

    }

  }

  return (

    <PaymentPageStyle>

      {paymentStage === "elpis" ?

        <form onSubmit={submitPayment}>

          <h1>Make payment to Elpis</h1>

          <div className="form-pack">

            <label htmlFor="">Amount (USD): </label>

            <div className="inp-hol">

              <div className="curr">$</div>

              <input type="number" placeholder="150.00" required value={amountValue} onInput={e => setAmountValue(e.target.value)} onBlur={e => setAmountValue(parseFloat(e.target.value).toFixed(2))} />

            </div>

          </div>

          <div className="form-pack">

            <label htmlFor="">Description: </label>

            <textarea placeholder="Payment for a certain work" required value={description} onInput={e => setDescription(e.target.value)}></textarea>

          </div>

          <button>Make Payment</button>

        </form>

        :

        <div>

          <h1>Making payment of ${parseFloat(amountValue).toFixed(2)} to Elpis</h1>

          <PayPalButton

            amount={parseFloat(amountValue).toFixed(2)}

            currency="USD"

            shippingPreference="NO_SHIPPING"

            onSuccess={async (details, data) => {

              console.log({ details, data });

              sendMiniMessage({

                icon: { name: "loading", style: {} },

                content: { text: "Saving Payment!", style: {} },

              })

              const saved = await postApiJson(savePayment(), {

                name: details.payer.name.given_name,

                description: description,

                amount: parseFloat(amountValue).toFixed(2),

                orderID: data.orderID,

                password: paymentPassword

              })

              if (saved.error) {

                sendMiniMessage({

                  icon: { name: "ok", style: {} },

                  content: { text: "Payment Sent!", style: {} },

                }, 2000)

              } else {

                sendMiniMessage({

                  icon: { name: "ok", style: {} },

                  content: { text: "Payment Sent and Saved!", style: {} },

                }, 2000)

              }

              setPaymentStage("elpis")

            }}

            options={{

              clientId: clientID,

              currency: "USD"

            }}

          />

        </div>}

    </PaymentPageStyle>

  )

}

const PaymentPageStyle = styled.div`
  
  flex: 1;
  height: 100%;
  width: 100%;
  padding: 0 0.5rem;
  animation: opacity 1s 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .form-pack{
    margin-bottom: .75rem;
  }

  h1{
    font-size: 1.5rem;
    padding: 1rem;
    padding-bottom: 0.5rem;
  }

  label{
    display: flex;
    font-weight: bold;
  }

  .inp-hol{

    .curr{
      z-index: 20;
      position: absolute;
      top: 0; bottom: 0;
      width: 1.8rem;
      border-radius: .4rem 0 .0 .4rem;
      background: #f2f4f5;
      box-shadow: inset 8px 8px 31px #8f8f8f, inset -8px -8px 31px #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    input{
      padding-left: 2.1rem;
    }
  }
  
  input, textarea{
    z-index: 10;
    width: 100%;
    border: 0 none;
    outline: 0 none;
    padding: 0 .5rem;
    background: #f2f4f5;
    box-shadow: inset 8px 8px 31px #c2c3c4, inset -8px -8px 31px #ffffff;
    border-radius: .4rem;
    display: block;
  }

  textarea{
    height: 6rem;
  }
  
  button{
    border-radius: .4rem;
    margin-bottom: 1rem;
    border: 0 none;
    width: 100%;
    background: linear-gradient(145deg, #cfcfcf, #a5a5a5);
    box-shadow:  8px 8px 31px #c2c3c4, -8px -8px 31px #ffffff;
    color: inherit;
    transform: scale(1);
    transition: transform .5s;

    &:hover{
      transform: scale(1.1);
    }
  }

`

export default PaymentPage
