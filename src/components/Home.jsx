import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaCubes } from "react-icons/fa";
import axios from "../axios";

const Home = () => {
  const [count, setCount] = useState(1);
  const [deliveryCheck, setDeliveryCheck] = useState(false);

  const [formData, setFormData] = useState({
    isGst: false,
  });

  const handleChange = (e) => {
    let { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: !formData.isGst,
      }));
    } else {
      if (type === "number") {
        value = parseInt(value);
      }
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    axios
      .post("sales", {
        ...formData,
      })
      .then((res) => {
        console.log("response", res.data);
      });
  };

  const data = [
    {
      name: "BILL NO:",
      type: "text",
      value: "billNo",
    },
    {
      name: "BILL DATE:",
      type: "date",
      value: "billDate",
    },
    {
      name: "EWAY BILL NUMBER:",
      type: "number",
      value: "ewayBillNumber",
    },
    {
      name: "DELIVERY DATE:",
      type: "date",
      value: "deliveryDate",
    },
    {
      name: "CUSTOMER NAME:",
      type: "text",
      value: "customerName",
    },
    {
      name: "PHONE NUMBER:",
      type: "number",
      value: "phoneNumber",
    },
    {
      name: "ADDRESS:",
      type: "text_area",
      value: "address",
    },
    {
      name: "DELIVERY ADDRESS:",
      type: "text_area",
      value: "deliveryAddress",
    },
    {
      name: "TRANSACTION MODE:",
      type: "select",
      option: ["Credit", "Debit"],
      value: "transactionMode",
    },
    {
      name: "IS IGST",
      type: "checkbox",
      value: "isGst",
    },
  ];

  const data_two = [
    {
      name: "#",
      width: "2%",
      value: "",
    },
    {
      name: "Code",
      width: "6%",
      value: "code",
      type: "text",
    },
    {
      name: "Item Name",
      width: "8%",
      value: "itemName",
      type: "text",
    },
    {
      name: "Batch code",
      width: "8%",
      value: "batchCode",
      type: "text",
    },
    {
      name: "QTY",
      width: "5%",
      value: "qty",
      type: "number",
    },
    {
      name: "Unit Price",
      width: "6%",
      value: "unitPrice",
      type: "number",
    },
    {
      name: "MRP",
      width: "6%",
      value: "mrp",
      type: "number",
    },
    {
      name: "Tax value",
      width: "8%",
      value: "taxValue",
      type: "number",
    },
    {
      name: "GST %",
      width: "4%",
      value: "gstPercentage",
      type: "number",
    },
    {
      name: "GST Amt",
      width: "8%",
      value: "gstAmt",
      type: "number",
    },
    {
      name: "Total",
      width: "8%",
      value: "total",
      type: "number",
    },
    {
      name: "Staff",
      width: "8%",
      value: "staff",
    },
  ];

  const data_three = [
    {
      name: "NOTE",
      type: "text_area",
      value: "note",
    },
    {
      name: "VEHICLE NUMBER",
      type: "text",
      value: "vehicleNumber",
    },
    {
      name: "DELIVERY CHARGE",
      type: "number",
      value: "deliveryCharge",
    },
    {
      name: "TOTAL AVAILABLE AMOUNT",
      type: "number",
      value: "totalTaxableAmount",
    },
    {
      name: "OUTSTANDING",
      type: "number",
      value: "outstanding",
    },
    {
      name: "DISCOUNT ",
      type: "number",
      value: "discount",
    },
    {
      name: "GST AMOUNT",
      type: "number",
      value: "gstAmount",
    },
  ];

  const data_four = [
    {
      title: "BANK_TRANSFER",
      value: "paymentMode",
    },
    {
      title: "CHEQUE",
      value: "paymentMode",
    },
    {
      title: "BOTH",
      value: "paymentMode",
    },
    {
      title: "BANK",
      value: "paymentMode",
    },
    {
      title: "CASH",
      value: "paymentMode",
    },
  ];

  const data_five = [
    {
      title: "ROUND OF",
      type: "number",
      value: "roundOff",
    },
    {
      title: "GRAND TOTAL",
      type: "number",
      value: "grandTotal",
    },
  ];

  const buttons = [
    {
      title: "HOLD BILL",
      color: "#28e3ea",
    },
    {
      title: "RETURN",
      color: "#ffae00",
    },
    {
      title: "SAVE & PRINT",
      color: "#6600ff",
    },
    {
      title: "SAVE",
      color: "#026429",
      action: handleSubmit,
    },
    {
      title: "VIEW",
      color: "#e4e4e7",
    },
    {
      title: "CLEAR",
      color: "#ffae00",
    },
  ];

  console.log("formData", formData);

  return (
    <div className="w-full h-screen text-[14px]">
      <div className="flex w-full border-b-[5px] justify-between px-4 py-5">
        <h2>Sales Billing Window</h2>
        <span>close</span>
      </div>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-4 gap-5 px-4 py-3">
          {data?.map((item, i) => {
            return (
              <div
                key={i}
                className={`flex ${
                  item.type === "checkbox" ? "gap-2" : "gap-6 "
                } items-center`}
              >
                {item.type === "checkbox" && (
                  <input
                    name={item.value}
                    value={formData[item.value]}
                    onChange={handleChange}
                    type={item.type}
                    className="outline-none px-2 text-[14px] border-[1px] border-[#909090]"
                  />
                )}
                <span className="font-bold text-[12px]">{item.name}</span>
                {item.name === "DELIVERY ADDRESS:" && <input type="checkbox" />}
                {item.type === "text_area" ? (
                  <textarea
                    name={item.value}
                    value={formData[item.value] ? formData[item.value] : ""}
                    onChange={handleChange}
                    className="outline-none px-2 text-[14px] border-[1px] border-[#909090]"
                  />
                ) : item.type === "select" ? (
                  <select
                    name={item.value}
                    value={formData[item.value]}
                    onChange={handleChange}
                    className="outline-none px-2 text-[14px] w-[200px] border-[1px] border-[#909090]"
                  >
                    {item?.option.map((item, i) => (
                      <option value={item} key={i}>
                        {item}
                      </option>
                    ))}
                  </select>
                ) : item.type !== "checkbox" ? (
                  <input
                    type={item.type}
                    name={item.value}
                    value={formData[item.value]}
                    onChange={handleChange}
                    className="outline-none px-2 text-[14px] border-[1px] border-[#909090]"
                  />
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex w-full px-4 gap-4">
            {data_two?.map((item, i) => (
              <span
                style={{
                  minWidth: item.width,
                }}
                key={i}
                className=""
              >
                {item.name}
              </span>
            ))}
          </div>
          <div className="border-b-[3px] w-full"></div>
        </div>

        {Array.from({ length: count }, (value, index) => (
          <div key={index} className="flex w-full px-4 gap-4">
            {data_two?.map((item, i) => {
              return (
                <>
                  {item.name === "#" ? (
                    <span
                      style={{
                        width: item.width, // Set the width here
                        minWidth: "0", // Add this line to override any default minWidth
                      }}
                    >
                      {" "}
                      {index + 1}
                    </span>
                  ) : item.name === "Staff" ? (
                    <select
                      name={item.value}
                      onChange={handleChange}
                      className="outline-none px-2 text-[14px] w-[200px] border-[1px] border-[#909090]"
                    >
                      <option value="">Choose the staff</option>
                      <option value="staff 1">Staff 1</option>
                      <option value="staff 2">Staff 2</option>
                      <option value="staff 3">Staff 3</option>
                    </select>
                  ) : (
                    <input
                      name={item.value}
                      value={formData[item.value]}
                      onChange={handleChange}
                      style={{
                        width: item.width, // Set the width here
                        minWidth: "0", // Add this line to override any default minWidth
                      }}
                      type={item.type}
                      key={i}
                      className="border-[1px]"
                    />
                  )}
                </>
              );
            })}
            <div className="flex gap-5">
              <button>
                <FaCubes />
              </button>
              <button
                onClick={() => {
                  if (count > 1) {
                    setCount((prev) => prev - 1);
                  }
                }}
              >
                <MdDelete />
              </button>
            </div>
          </div>
        ))}
        <div className="px-4">
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="bg-blue-500 text-white px-4 rounded-[5px] py-1"
          >
            {" "}
            Add
          </button>
        </div>
        <div className="grid grid-cols-3 gap-5 px-4 py-3">
          {data_three?.map((item, i) => {
            return (
              <div className="flex gap-6 items-center">
                <span className="font-semibold ">{item.name}</span>
                {item.type === "text_area" ? (
                  <textarea
                    name={item.value}
                    value={formData[item.value] ? formData[item.value] : ""}
                    onChange={handleChange}
                    className="outline-none px-2 text-[14px] border-[1px] border-[#909090]"
                  />
                ) : (
                  <input
                    name={item.value}
                    onChange={handleChange}
                    type={item.type}
                    className="outline-none px-2 text-[14px] border-[1px] border-[#909090]"
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className="flex gap-6 px-4">
          {data_four?.map((item, i) => (
            <div className="flex gap-3">
              <input
                name={item.value}
                value={item.title.toLowerCase()}
                onChange={handleChange}
                type="radio"
                className=""
              />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
        <div className="flex w-full justify-center gap-3">
          <span>Amount</span>
          <input
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            type="number"
            className="outline-none px-2 text-[14px] border-[1px] border-[#909090]"
          />
        </div>

        <div className="flex flex-col gap-3 items-end w-full px-4">
          {data_five?.map((item, i) => {
            return (
              <div className="flex gap-6 items-center">
                <span>{item.title}</span>

                <input
                  name={item.value}
                  value={formData[item.value]}
                  onChange={handleChange}
                  type={item.type}
                  className="outline-none px-2 text-[14px] border-[1px] border-[#909090]"
                />
              </div>
            );
          })}
        </div>

        <div className="flex justify-between px-4 pb-12">
          <div className="flex gap-6 w-full ">
            {buttons?.slice(0, 2).map((item, i) => {
              return (
                <button
                  className="px-4 py-1 rounded-[5px] font-semibold text-white"
                  style={{
                    backgroundColor: item.color,
                  }}
                >
                  {item.title}
                </button>
              );
            })}
          </div>

          <div className="flex justify-between w-full ">
            {buttons?.slice(2).map((item, i) => {
              return (
                <button
                  className={`px-4 py-1 rounded-[5px] font-semibold ${
                    item.title === "VIEW" ? "text-black" : "text-white"
                  }`}
                  onClick={item.action}
                  style={{
                    backgroundColor: item.color,
                  }}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
