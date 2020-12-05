import { PayPalButton } from "react-paypal-button-v2";
import React from 'react';
export function PayPalBtn(props) {
    const { amount, currency, createSubscription, onApprove, catchError,onError, onCancel} = props;
    const paypalKey = "AVYQ-SNpdBvT1WQ6DdCfykGjVVC_IpK2KX207THiHML6VnoTsKQ3y0R8H3M5PCScX9el-SVew3-eLt2W";   //client-id
    return (
        <PayPalButton
            amount={amount}
            currency={currency}
            createSubscription={(data, details) => createSubscription(data, details)}
            onApprove={(data, details) => onApprove(data, details)}
            onError={(err) => onError(err)}
            catchError={(err) => catchError(err)}
            onCancel={(err) => onCancel(err)}
            options={{
                clientId: paypalKey,
                vault:true
            }}
            style={{
                shape: 'rect',
                color: 'gold',
                layout: 'horizontal',
            }}
        />
    );
}
export default PayPalBtn;
