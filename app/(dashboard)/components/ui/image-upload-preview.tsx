import Image from "next/image";
import { useRef } from "react";
import { FiUploadCloud } from "react-icons/fi";

type TImageUploadPreviewProps = {
    label?: string;
    value?: string | null;
    onChange: (file: File) => void;
    className?: string;
}

const ImageUploadPreview = ({label, value, onChange, className}: TImageUploadPreviewProps) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const handleImageClick = () => {
        fileInputRef?.current.click();
    }
    return (
        <div className="{className}">
            <div onClick={handleImageClick} className="border-2 border-dashed border-primary bg-primary/5 rounded-lg h-50 flex-col justify-center items-center">
            {
                value? (
                    <Image src={value} alt="preview produst" className="w-fulll h-full object-cover" />
                ): (
                <>
                <FiUploadCloud/>)
            }
            </div>
        </div>
    )
}

export default ImageUploadPreview;