import { X } from "lucide-react";
import { useEffect, useState } from "react";

export const useToast = () => {
  const initalValues = {
    message: undefined,
    status: undefined,
  };
  const [toast, setToast] = useState(initalValues);

  const dismissToast = () => {
    setToast(initalValues);
  };

  return { toast, setToast, dismissToast };
};

export const ToatMessage = ({ toast, dismissToast, className }) => {
  if (!toast.message) {
    return;
  }
  const getToastColor = () => {
    switch (toast.status) {
      case "error":
        return "text-red-300 border-red-200";
      case "success":
        return "text-green-700 border-green-200";
    }
  };
  return (
    <div className={className}>
      <div className="border    font-bold rounded-md">
        <div
          className={` ${getToastColor()} flex items-center gap-10 justify-between p-3 capitalize text-center text-sm`}
        >
          {toast.message} hello
          <X size={18} onClick={dismissToast} />
        </div>
      </div>
    </div>
  );
};
