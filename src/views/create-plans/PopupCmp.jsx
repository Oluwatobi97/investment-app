import { Copy, X } from "lucide-react";
import photo4 from "./../../assets/image/photo4.jpeg";
import React, { useEffect, useState } from "react";

const walletAddress = "1JGyoU5FD9yUHUuiSWGVMYgPGav8zJVaAc ";

const CopiedToClipBoardMessage = ({ isCopied }) => {
  if (!isCopied) return null;
  return (
    <span className="absolute top-[85%] left-[57%] text-sm bg-background p-2 rounded-lg z-50 text-textSecondary font-bold">
      Copied to Clipboard
    </span>
  );
};

const CopyToClipBoard = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  }, [handleCopy]);
  return (
    <button onClick={handleCopy}>
      <Copy size={20} />
      <CopiedToClipBoardMessage isCopied={isCopied} />
    </button>
  );
};

const PopupCmp = ({ showPopUp, setPopUp, popUpfunc }) => {
  if (!showPopUp) return null;
  return (
    <div className="fixed inset-0 z-50 transion-all duration-75 ease-in-out flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-surface rounded-lg shadow-lg w-[90%] max-w-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-primary">SCAN QR CODE</h2>
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => setPopUp(false)}
          >
            <X />
          </button>
        </div>
        <div className="flex flex-col ">
          <img src={photo4} />
          <div className="text-secondary flex items-center gap-4 bg-gray-100 p-4 rounded-lg text-center break-all">
            <span className="px-5">{walletAddress} </span>
            <div className="">
              <CopyToClipBoard textToCopy={walletAddress} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={popUpfunc}
            className="bg-textSecondary text-surface px-4 py-2 rounded-lg font-bold hover:bg-gray-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupCmp;
