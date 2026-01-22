import { FiCreditCard } from "react-icons/fi";
import CardWithHeader from "../../ui/card-with-header";

const paymentList = [
    {
        bankName: "BCA",
        accountNumber: "1883838",
        accountName: "PT SportOn Digital",
    },
    {
        bankName: "BRI",
        accountNumber: "82998718",
        accountName: "PT SportOn Digital",
    },
    {
        bankName: "Mandiri",
        accountNumber: "1019836",
        accountName: "PT SportOn Digital",
    },
];

const getAllBanks = async () => {
    return paymentList;
};

const PaymentOptions = async () => {
    const banks = await getAllBanks();

    return (
        <CardWithHeader title="Payment Options">
            {banks.map((payment, index) => (
                <div
                    key={index}
                    className="flex gap-5 p-5 border-b border-gray-100"
                >
                    <div className="bg-blue-50 p-4 text-blue-500 h-fit self-center">
                        <FiCreditCard size={24} />
                    </div>

                    <div className="self-center">
                        <div className="font-bold">{payment.bankName}</div>
                        <div className="text-sm">{payment.accountNumber}</div>
                        <div className="text-sm opacity-70">{payment.accountName}</div>
                    </div>

                    <div className="ml-auto bg-blue-50 text-gray-800 text-xs h-fit self-center px-2 py-1">
                        Bank Transfer
                    </div>
                </div>
            ))}
        </CardWithHeader>
    );
};

export default PaymentOptions;
