"use client"

import { FiCreditCard } from "react-icons/fi"
import CardWithHeader from "../../ui/card-with-header"
import FileUpload from "../../ui/file-upload"
import Button from "../../ui/button"
import priceFormatter from "@/app/utils/price-formatter"
import { useRouter } from "next/navigation"


const PaymentSteps = () => {
    
    const {push} = useRouter();

    const uploadAndConfirm = () => {
        push("/order-status/123726")
    }
    return (
        <CardWithHeader title="Payment Steps">
            <div className="p-5">
                <ol className="list-decimal text-xs pl-2 flex-col gap-4">
                <li>
                    Transfer the total amount of <b>Rp. 1.035.000</b> to your preferred bank account listed under 'Payment Options' (BCA, Mandiri, or BTPN).
                </li>
                <li>
                    After completing the transfer, <b>keep the payment receipt</b> or a screenshot of the transfer confirmation. This will be needed for the next step.
                </li>
                <li>
                    Upload the payment receipt/screenshot using the <b>'Upload Receipt & Confirm'</b> button below to validate your transaction.
                </li>
            </ol>
            <FileUpload/>
            </div>
                <div className="border-t border-gray-200 p-4">
                    <div className="flex justify-between font-semibold">
                        <div className="text-sm">Total</div>
                            <div className="text-primary text-xs">
                                {priceFormatter(4500000)}
                            </div>
                        </div>
                        <Button variant="dark" size="small" className="w-full mt-4" onClick={uploadAndConfirm}>
                            <FiCreditCard />
                            Upload  Receipt & confirm
                        </Button>
                    </div>
        </CardWithHeader>
    )
}

export default PaymentSteps