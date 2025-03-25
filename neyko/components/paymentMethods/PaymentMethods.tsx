import { View } from "react-native";
import TextView from "../textView/TextView";
import CitiIcon from '../../assets/payments/citi.svg';
import PayPalIcon from '../../assets/payments/paypal.svg';
import MaestroIcon from '../../assets/payments/maestro.svg';
import VisaIcon from '../../assets/payments/visa.svg';
import styles from "./paymentMethods.styles";

const PaymentMethods = () => {
    return (
        <View style={styles.container}>
            <TextView style={styles.title}>Accepted Payment Methods</TextView>
            <View style={styles.paymentMethods}>
                <View style={styles.payment}>
                    <PayPalIcon width={40} height={30} />
                </View>
                <View style={styles.payment}>
                    <CitiIcon width={40} height={30} />
                </View>
                <View style={styles.payment}>
                    <MaestroIcon width={40} height={30} />
                </View>
                <View style={styles.payment}>
                    <VisaIcon width={40} height={30} />
                </View>
            </View>
        </View>
    );
};

export default PaymentMethods;