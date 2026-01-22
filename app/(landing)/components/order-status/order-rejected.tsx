"use client"

import Image from "next/image"
import Button from "../../ui/button"
import { FiAlertCircle, FiRefreshCw } from "react-icons/fi"

const OrderRejected = () => {
    return (
        <div className="bg-white w-160 p-16 flex flex-col justify-center items-center mx-auto">
            <div className="w-20 h-20 bg-primary-light rounded-full mx-auto p-3 flex justify-center items-center text-primary">
                <FiAlertCircle size={36}/>
            </div>
            <h2 className="text-2xl font-semibold">Order Rejected!!</h2>
            <p className="text-center mb-8">I'm sorry your order rejected</p>
        </div>
    )
}

export default OrderRejected