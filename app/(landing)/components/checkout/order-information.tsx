"use client";

import React from "react";
import CardWithHeader from "../../ui/card-with-header";
import { CustomerInfo } from "@/app/hooks/use-cart-store";

type TOrderInformation = {
    formData: CustomerInfo;
    setFormData: React.Dispatch<React.SetStateAction<CustomerInfo>>;
};

const OrderInformation = ({ formData, setFormData }: TOrderInformation) => {
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <CardWithHeader title="Order Information">
            <div className="bg-white">
                <div className="px-5 py-4 border-b border-gray-200">
                    <h2 className="font-bold text-lg">Order Information</h2>
                </div>

                <div className="p-5">
                    <div className="input-group">
                        <label htmlFor="customerName">Full Name</label>
                        <input
                            type="text"
                            id="customerName"
                            name="customerName"
                            value={formData.customerName}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="customerContact">Whatsapp Number</label>
                        <input
                            type="text"
                            id="customerContact"
                            name="customerContact"
                            value={String(formData.customerContact ?? "")}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="customerAddress">Shipping Address</label>
                        <textarea
                            id="customerAddress"
                            name="customerAddress"
                            value={formData.customerAddress}
                            onChange={handleInputChange}
                            rows={7}
                        />
                    </div>
                </div>
            </div>
        </CardWithHeader>
    );
};

export default OrderInformation;
