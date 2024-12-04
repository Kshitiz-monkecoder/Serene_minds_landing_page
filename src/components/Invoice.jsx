import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { toPng } from "html-to-image"; // Correct import
import jsPDF from "jspdf";

const generateRandomId = () => Math.random().toString(36).substr(2, 9).toUpperCase();

const Invoice = () => {
  const [invoiceId, setInvoiceId] = useState(generateRandomId());
  const [customerName, setCustomerName] = useState("");
  const [amount, setAmount] = useState("");

  const downloadPDF = () => {
    const element = document.getElementById("invoice");
    toPng(element).then((imgData) => {
      const pdf = new jsPDF();
      const imgWidth = 190;
      const imgHeight = (element.offsetHeight * imgWidth) / element.offsetWidth;
      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save(`Invoice-${invoiceId}.pdf`);
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-lg">
        <div id="invoice" className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Invoice</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">Invoice ID</label>
            <p className="mt-1 text-lg font-semibold">{invoiceId}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Customer Name</label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Enter customer name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">QR Code</label>
            <QRCodeCanvas
              value={`Invoice ID: ${invoiceId}, Customer: ${customerName}, Amount: ${amount}`}
              size={120}
              className="mt-2"
            />
          </div>
        </div>
        <div className="p-6 bg-gray-50 text-right">
          <button
            onClick={() => setInvoiceId(generateRandomId())}
            className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
          >
            Generate New ID
          </button>
          <button
            onClick={downloadPDF}
            className="px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
