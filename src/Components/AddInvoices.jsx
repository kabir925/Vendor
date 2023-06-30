import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FaceIcon from "@mui/icons-material/Face";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import TailwindSidebar from "./TailwindSidebar";

const AddInvoices = () => {
  const token = localStorage.getItem("jwttoken");
  const navigate = useNavigate();
  const [userData, setuserData] = useState({
    data: {
      vendor:
      {
        PrimaryEmailID:""
      }
    }
  })
  useEffect(() => {
    const userDetailsCookie = Cookies.get("signincookie");
    if (!userDetailsCookie) {
      navigate("/login");
    }
    else {
      setuserData(JSON.parse(userDetailsCookie));
    }
    
  }, [navigate]);




  const [CompanyCode, setCompanyCode] = useState()
  const [CompanyName, setCompanyName] = useState();
  const [Gross, setGross] = useState(0);
  const [Tax1, setTax1] = useState(0)
  const [Tax2, setTax2] = useState(0)
  const [Tax3, setTax3] = useState(0);
  const [discount, setdiscount] = useState(0);
  const [description, setdescription] = useState()
  const [date, setdate] = useState();
  const [currency, setcurrency] = useState("AFN");
  const [Quantity, setQuantity] = useState();
  const [Attachment, setAttachment] = useState();
  const [PONumber, setPONumber] = useState();
  const [InvoiceNumber, setInvoiceNumber] = useState();


  // formData
  // const [invoiceData, setInvoiceData] = useState({
  //   description: "",
  //   date: "",
  //   currency: "",
  //   quantity: 0,
  //   attachment: "", 
  //   netAmount: 0,
  // });

 

  const submitInvoice = async (event) => {
    const net = Number(Gross)+Number(Tax1)+Number(Tax2)+Number(Tax3)-Number(discount)
    event.preventDefault();
    let formData = new FormData();
    formData.append("CompanyCode", CompanyCode);
    formData.append("CompanyName", CompanyName);
    formData.append("Gross", Gross);
    formData.append("Tax1", Tax1);
    formData.append("Tax2", Tax2);
    formData.append("Tax3", Tax3);
    formData.append("discount", discount);
    formData.append("description", description);
    formData.append("date", date);
    formData.append("currency", currency);
    formData.append("quantity", Quantity);
    formData.append("attachment", Attachment, `${InvoiceNumber}`);
    formData.append("netAmount", net);
    formData.append("PONumber", PONumber);
    formData.append("invoicenumber", InvoiceNumber);
    console.log(formData);

    const id = toast.loading("Please wait...");
    await axios
      .post("/vendors/addInvoice", formData, {
        headers: {
          authorization: `${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        // const jwtToken = res.data.token;
        // axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
        toast.update(id, {
          render: "Invoice Created",
          type: "success",
          isLoading: false,
          closeOnClick: true,
          autoClose: 4000,
        });
        // navigate("/allinvoice");
      })
      .catch((res) => {
        console.log(res.message);
        toast.update(id, {
          render: res.message,
          type: "error",
          isLoading: false,
          closeOnClick: true,
          autoClose: 5000,
        });
      });

  };

   return (
     <>
       <div className="flex flex-col lg:flex-row bg-gray-200">
         <TailwindSidebar />
         <div className="bg-gray-200 w-full   ">
           <div className="bg-white w-full lg:h-12">
             <div className="lg:float-right pt-2">
               <span className="name">
                 {userData.data.vendor.PrimaryEmailID}
               </span>
               <div className="icon">
                 <FaceIcon />
               </div>
             </div>
           </div>

           <div className="w-[85%] mx-auto mt-5 ">
             <div className="w-full  flex items-center bg-[#1C2434] text-white px-5 py-2">
               <h2 className="font-[500] text-lg">Add Invoice</h2>
             </div>
             <div className="bg-white px-12 py-8 border text-[#1C2434]">
               <h2 className="font-bold text-lg">Vender Registration</h2>
               <form action="" onSubmit={submitInvoice} id="invoiceForm">
                 <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 my-6">
                   <div className="m">
                     <label
                       htmlFor="CompanyCode"
                       className="block mb-2 text-sm  text-left"
                     >
                       Company Code
                     </label>
                     <input
                       type="text"
                       id="CompanyCode"
                       className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       //  placeholder="XJ1248"
                       onChange={(e) => {
                         setCompanyCode(e.target.value);
                       }}
                       required
                     />
                   </div>
                   <div className="">
                     <label
                       htmlFor="CompanyName"
                       className="block mb-2 text-sm  text-left"
                     >
                       Company Name
                     </label>
                     <input
                       type="text"
                       id="CompanyName"
                       className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 e dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       required
                       onChange={(e) => {
                         setCompanyName(e.target.value);
                       }}
                     />
                   </div>
                   <div className="mb-2">
                     <label
                       htmlFor="InvoiceDate"
                       className="block mb-2 text-sm  text-left"
                     >
                       Invoice Date
                     </label>
                     <input
                       type="date"
                       id="InvoiceDate"
                       className=" border border-gray-300 text-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       required
                       onChange={(e) => {
                         setdate(e.target.value);
                       }}
                     />
                   </div>
                   <div className="mb-2">
                     <label
                       htmlFor="InvoiceNumber"
                       className="block mb-2 text-sm  text-left"
                     >
                       Invoice Number
                     </label>
                     <input
                       type="number"
                       id="InvoiceNumber"
                       className=" border border-gray-300 text-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       required
                       onChange={(e) => {
                         setInvoiceNumber(e.target.value);
                       }}
                     />
                   </div>
                   <div className="mb-2">
                     <label
                       htmlFor="PONumber"
                       className="block mb-2 text-sm  text-left"
                     >
                       PO Number
                     </label>
                     <input
                       type="number"
                       id="PONumber"
                       className=" border border-gray-300 text-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       required
                       onChange={(e) => {
                         setPONumber(e.target.value);
                       }}
                     />
                   </div>
                   <div className="mb-2">
                     <label
                       htmlFor="description"
                       className="block mb-2 text-sm  text-left"
                     >
                       Description
                     </label>
                     <input
                       type="text"
                       id="description"
                       className=" border border-gray-300 text-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       required
                       onChange={(e) => {
                         setdescription(e.target.value);
                       }}
                     />
                   </div>
                   <div className="mb-2">
                     <label
                       htmlFor="Quantity"
                       className="block mb-2 text-sm  text-left"
                     >
                       Quantity
                     </label>
                     <input
                       type="number"
                       id="Quantity"
                       className=" border border-gray-300 text-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       required
                       onChange={(e) => {
                         setQuantity(e.target.value);
                       }}
                     />
                   </div>
                   <div className="mb-2">
                     <label
                       htmlFor="currency"
                       className="block mb-2 text-sm  text-left"
                     >
                       Currency
                     </label>
                     <select
                       className="border border-gray-300 text-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       id="currency"
                       name="currency"
                       onChange={(e) => {
                         setcurrency(e.target.value);
                       }}
                       
                     >
                       <option value="AFN">AFN - Afghan Afghani - ؋</option>
                       <option value="ALL">ALL - Albanian Lek - Lek</option>
                       <option value="DZD">DZD - Algerian Dinar - دج</option>
                       <option value="AOA">AOA - Angolan Kwanza - Kz</option>
                       <option value="ARS">ARS - Argentine Peso - $</option>
                       <option value="AMD">AMD - Armenian Dram - ֏</option>
                       <option value="AWG">AWG - Aruban Florin - ƒ</option>
                       <option value="AUD">AUD - Australian Dollar - $</option>
                       <option value="AZN">AZN - Azerbaijani Manat - m</option>
                       <option value="BSD">BSD - Bahamian Dollar - B$</option>
                       <option value="BHD">BHD - Bahraini Dinar - .د.ب</option>
                       <option value="BDT">BDT - Bangladeshi Taka - ৳</option>
                       <option value="BBD">
                         BBD - Barbadian Dollar - Bds$
                       </option>
                       <option value="BYR">BYR - Belarusian Ruble - Br</option>
                       <option value="BEF">BEF - Belgian Franc - fr</option>
                       <option value="BZD">BZD - Belize Dollar - $</option>
                       <option value="BMD">BMD - Bermudan Dollar - $</option>
                       <option value="BTN">
                         BTN - Bhutanese Ngultrum - Nu.
                       </option>
                       <option value="BTC">BTC - Bitcoin - ฿</option>
                       <option value="BOB">
                         BOB - Bolivian Boliviano - Bs.
                       </option>
                       <option value="BAM">
                         BAM - Bosnia-Herzegovina Convertible Mark - KM
                       </option>
                       <option value="BWP">BWP - Botswanan Pula - P</option>
                       <option value="BRL">BRL - Brazilian Real - R$</option>
                       <option value="GBP">
                         GBP - British Pound Sterling - £
                       </option>
                       <option value="BND">BND - Brunei Dollar - B$</option>
                       <option value="BGN">BGN - Bulgarian Lev - Лв.</option>
                       <option value="BIF">BIF - Burundian Franc - FBu</option>
                       <option value="KHR">KHR - Cambodian Riel - KHR</option>
                       <option value="CAD">CAD - Canadian Dollar - $</option>
                       <option value="CVE">
                         CVE - Cape Verdean Escudo - $
                       </option>
                       <option value="KYD">
                         KYD - Cayman Islands Dollar - $
                       </option>
                       <option value="XOF">XOF - CFA Franc BCEAO - CFA</option>
                       <option value="XAF">XAF - CFA Franc BEAC - FCFA</option>
                       <option value="XPF">XPF - CFP Franc - ₣</option>
                       <option value="CLP">CLP - Chilean Peso - $</option>
                       <option value="CNY">CNY - Chinese Yuan - ¥</option>
                       <option value="COP">COP - Colombian Peso - $</option>
                       <option value="KMF">KMF - Comorian Franc - CF</option>
                       <option value="CDF">CDF - Congolese Franc - FC</option>
                       <option value="CRC">CRC - Costa Rican ColÃ³n - ₡</option>
                       <option value="HRK">HRK - Croatian Kuna - kn</option>
                       <option value="CUC">
                         CUC - Cuban Convertible Peso - $, CUC
                       </option>
                       <option value="CZK">
                         CZK - Czech Republic Koruna - Kč
                       </option>
                       <option value="DKK">DKK - Danish Krone - Kr.</option>
                       <option value="DJF">DJF - Djiboutian Franc - Fdj</option>
                       <option value="DOP">DOP - Dominican Peso - $</option>
                       <option value="XCD">
                         XCD - East Caribbean Dollar - $
                       </option>
                       <option value="EGP">EGP - Egyptian Pound - ج.م</option>
                       <option value="ERN">ERN - Eritrean Nakfa - Nfk</option>
                       <option value="EEK">EEK - Estonian Kroon - kr</option>
                       <option value="ETB">ETB - Ethiopian Birr - Nkf</option>
                       <option value="EUR">EUR - Euro - €</option>
                       <option value="FKP">
                         FKP - Falkland Islands Pound - £
                       </option>
                       <option value="FJD">FJD - Fijian Dollar - FJ$</option>
                       <option value="GMD">GMD - Gambian Dalasi - D</option>
                       <option value="GEL">GEL - Georgian Lari - ლ</option>
                       <option value="DEM">DEM - German Mark - DM</option>
                       <option value="GHS">GHS - Ghanaian Cedi - GH₵</option>
                       <option value="GIP">GIP - Gibraltar Pound - £</option>
                       <option value="GRD">
                         GRD - Greek Drachma - ₯, Δρχ, Δρ
                       </option>
                       <option value="GTQ">GTQ - Guatemalan Quetzal - Q</option>
                       <option value="GNF">GNF - Guinean Franc - FG</option>
                       <option value="GYD">GYD - Guyanaese Dollar - $</option>
                       <option value="HTG">HTG - Haitian Gourde - G</option>
                       <option value="HNL">HNL - Honduran Lempira - L</option>
                       <option value="HKD">HKD - Hong Kong Dollar - $</option>
                       <option value="HUF">HUF - Hungarian Forint - Ft</option>
                       <option value="ISK">ISK - Icelandic KrÃ³na - kr</option>
                       <option value="INR">INR - Indian Rupee - ₹</option>
                       <option value="IDR">IDR - Indonesian Rupiah - Rp</option>
                       <option value="IRR">IRR - Iranian Rial - ﷼</option>
                       <option value="IQD">IQD - Iraqi Dinar - د.ع</option>
                       <option value="ILS">ILS - Israeli New Sheqel - ₪</option>
                       <option value="ITL">ITL - Italian Lira - L,£</option>
                       <option value="JMD">JMD - Jamaican Dollar - J$</option>
                       <option value="JPY">JPY - Japanese Yen - ¥</option>
                       <option value="JOD">JOD - Jordanian Dinar - ا.د</option>
                       <option value="KZT">KZT - Kazakhstani Tenge - лв</option>
                       <option value="KES">KES - Kenyan Shilling - KSh</option>
                       <option value="KWD">KWD - Kuwaiti Dinar - ك.د</option>
                       <option value="KGS">KGS - Kyrgystani Som - лв</option>
                       <option value="LAK">LAK - Laotian Kip - ₭</option>
                       <option value="LVL">LVL - Latvian Lats - Ls</option>
                       <option value="LBP">LBP - Lebanese Pound - £</option>
                       <option value="LSL">LSL - Lesotho Loti - L</option>
                       <option value="LRD">LRD - Liberian Dollar - $</option>
                       <option value="LYD">LYD - Libyan Dinar - د.ل</option>
                       <option value="LTL">LTL - Lithuanian Litas - Lt</option>
                       <option value="MOP">MOP - Macanese Pataca - $</option>
                       <option value="MKD">MKD - Macedonian Denar - ден</option>
                       <option value="MGA">MGA - Malagasy Ariary - Ar</option>
                       <option value="MWK">MWK - Malawian Kwacha - MK</option>
                       <option value="MYR">MYR - Malaysian Ringgit - RM</option>
                       <option value="MVR">MVR - Maldivian Rufiyaa - Rf</option>
                       <option value="MRO">
                         MRO - Mauritanian Ouguiya - MRU
                       </option>
                       <option value="MUR">MUR - Mauritian Rupee - ₨</option>
                       <option value="MXN">MXN - Mexican Peso - $</option>
                       <option value="MDL">MDL - Moldovan Leu - L</option>
                       <option value="MNT">MNT - Mongolian Tugrik - ₮</option>
                       <option value="MAD">MAD - Moroccan Dirham - MAD</option>
                       <option value="MZM">
                         MZM - Mozambican Metical - MT
                       </option>
                       <option value="MMK">MMK - Myanmar Kyat - K</option>
                       <option value="NAD">NAD - Namibian Dollar - $</option>
                       <option value="NPR">NPR - Nepalese Rupee - ₨</option>
                       <option value="ANG">
                         ANG - Netherlands Antillean Guilder - ƒ
                       </option>
                       <option value="TWD">TWD - New Taiwan Dollar - $</option>
                       <option value="NZD">NZD - New Zealand Dollar - $</option>
                       <option value="NIO">
                         NIO - Nicaraguan CÃ³rdoba - C$
                       </option>
                       <option value="NGN">NGN - Nigerian Naira - ₦</option>
                       <option value="KPW">KPW - North Korean Won - ₩</option>
                       <option value="NOK">NOK - Norwegian Krone - kr</option>
                       <option value="OMR">OMR - Omani Rial - .ع.ر</option>
                       <option value="PKR">PKR - Pakistani Rupee - ₨</option>
                       <option value="PAB">
                         PAB - Panamanian Balboa - B/.
                       </option>
                       <option value="PGK">
                         PGK - Papua New Guinean Kina - K
                       </option>
                       <option value="PYG">PYG - Paraguayan Guarani - ₲</option>
                       <option value="PEN">
                         PEN - Peruvian Nuevo Sol - S/.
                       </option>
                       <option value="PHP">PHP - Philippine Peso - ₱</option>
                       <option value="PLN">PLN - Polish Zloty - zł</option>
                       <option value="QAR">QAR - Qatari Rial - ق.ر</option>
                       <option value="RON">RON - Romanian Leu - lei</option>
                       <option value="RUB">RUB - Russian Ruble - ₽</option>
                       <option value="RWF">RWF - Rwandan Franc - FRw</option>
                       <option value="SVC">SVC - Salvadoran ColÃ³n - ₡</option>
                       <option value="WST">WST - Samoan Tala - SAT</option>
                       <option value="SAR">SAR - Saudi Riyal - ﷼</option>
                       <option value="RSD">RSD - Serbian Dinar - din</option>
                       <option value="SCR">
                         SCR - Seychellois Rupee - SRe
                       </option>
                       <option value="SLL">
                         SLL - Sierra Leonean Leone - Le
                       </option>
                       <option value="SGD">SGD - Singapore Dollar - $</option>
                       <option value="SKK">SKK - Slovak Koruna - Sk</option>
                       <option value="SBD">
                         SBD - Solomon Islands Dollar - Si$
                       </option>
                       <option value="SOS">
                         SOS - Somali Shilling - Sh.so.
                       </option>
                       <option value="ZAR">ZAR - South African Rand - R</option>
                       <option value="KRW">KRW - South Korean Won - ₩</option>
                       <option value="XDR">
                         XDR - Special Drawing Rights - SDR
                       </option>
                       <option value="LKR">LKR - Sri Lankan Rupee - Rs</option>
                       <option value="SHP">SHP - St. Helena Pound - £</option>
                       <option value="SDG">SDG - Sudanese Pound - .س.ج</option>
                       <option value="SRD">SRD - Surinamese Dollar - $</option>
                       <option value="SZL">SZL - Swazi Lilangeni - E</option>
                       <option value="SEK">SEK - Swedish Krona - kr</option>
                       <option value="CHF">CHF - Swiss Franc - CHf</option>
                       <option value="SYP">SYP - Syrian Pound - LS</option>
                       <option value="STD">
                         STD - São Tomé and Príncipe Dobra - Db
                       </option>
                       <option value="TJS">
                         TJS - Tajikistani Somoni - SM
                       </option>
                       <option value="TZS">
                         TZS - Tanzanian Shilling - TSh
                       </option>
                       <option value="THB">THB - Thai Baht - ฿</option>
                       <option value="TOP">TOP - Tongan pa'anga - $</option>
                       <option value="TTD">
                         TTD - Trinidad & Tobago Dollar - $
                       </option>
                       <option value="TND">TND - Tunisian Dinar - ت.د</option>
                       <option value="TRY">TRY - Turkish Lira - ₺</option>
                       <option value="TMT">
                         TMT - Turkmenistani Manat - T
                       </option>
                       <option value="UGX">UGX - Ugandan Shilling - USh</option>
                       <option value="UAH">UAH - Ukrainian Hryvnia - ₴</option>
                       <option value="AED">
                         AED - United Arab Emirates Dirham - إ.د
                       </option>
                       <option value="UYU">UYU - Uruguayan Peso - $</option>
                       <option value="USD">USD - US Dollar - $</option>
                       <option value="UZS">UZS - Uzbekistan Som - лв</option>
                       <option value="VUV">VUV - Vanuatu Vatu - VT</option>
                       <option value="VEF">
                         VEF - Venezuelan BolÃ­var - Bs
                       </option>
                       <option value="VND">VND - Vietnamese Dong - ₫</option>
                       <option value="YER">YER - Yemeni Rial - ﷼</option>
                       <option value="ZMK">ZMK - Zambian Kwacha - ZK</option>
                     </select>
                   </div>
                   <div className="mb-2">
                     <label
                       htmlFor="GrossInvoiceAmount"
                       className="block mb-2 text-sm  text-left"
                     >
                       Gross Invoice Amount
                     </label>
                     <input
                       type="number"
                       id="GrossInvoiceAmount"
                        value={Gross}
                       className=" border border-gray-300 text-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       required
                       onChange={(e) => {
                         setGross(e.target.value);
                          
                       }}
                     />
                   </div>
                   <div className="mb-2">
                     <label htmlFor="TAX1" className="block mb-2 text-sm  text-left">
                       TAX1
                     </label>
                     <input
                       type="number"
                       id="TAX1"
                       value={Tax1}
                       className=" border border-gray-300 text-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       required
                       onChange={(e) => {
                         setTax1(e.target.value);
                          
                       }}
                     />
                   </div>
                   <div className="mb-2">
                     <label htmlFor="TAX2" className="block mb-2 text-sm  text-left">
                       TAX2
                     </label>
                     <input
                       type="number"
                       id="TAX2"
                       value={Tax2}
                       className=" border border-gray-300 text-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       required
                       onChange={(e) => {
                         setTax2(e.target.value);
                         
                       }}
                     />
                   </div>
                   <div className="mb-2">
                     <label htmlFor="TAX3" className="block mb-2 text-sm  text-left">
                       TAX3
                     </label>
                     <input
                       type="number"
                       id="TAX3"
                       value={Tax3}
                       className=" border border-gray-300 text-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       required
                       onChange={(e) => {
                         setTax3(e.target.value);
                          
                       }}
                     />
                   </div>
                   <div className="mb-2">
                     <label
                       htmlFor="discount"
                       className="block mb-2 text-sm  text-left"
                     >
                       Discount
                     </label>
                     <input
                       type="number"
                       id="discount"
                       value={discount}
                       className=" border border-gray-300 text-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       required
                       onChange={(e) => {
                         setdiscount(e.target.value);
                          
                       }}
                     />
                   </div>
                   <div className="mb-2">
                     <label
                       htmlFor="NetAmount"
                       className="block mb-2 text-sm  text-left"
                     >
                       Net Amount
                     </label>
                     <input
                       type="number"
                       id="NetAmount"
                       value={
                         Number(Gross) +
                         Number(Tax1) +
                         Number(Tax2) +
                         Number(Tax3) -
                         Number(discount)
                       }
                       className=" border border-gray-300 text-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       disabled
                       
                     />
                   </div>
                   <div className="mb-2">
                     <label
                       htmlFor="attachments"
                       className="block mb-2 text-sm  text-left"
                     >
                       Attachments
                     </label>
                     <input
                       type="file"
                       id="attachments"
                       multiple
                       className=" border border-gray-300 text-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       required
                       onChange={(e) => {
                         setAttachment(e.target.files[0]);
                       }}
                     />
                   </div>
                   <div className="mb-2">
                     <label
                       htmlFor="CompanyContactPerson"
                       className="block mb-2 text-sm  text-left"
                     >
                       Company Contact Person
                     </label>
                     <input
                       type="text"
                       id="CompanyContactPerson"
                       disabled
                       placeholder={userData.data.vendor.PrimaryEmailID}
                       multiple
                       className=" border border-gray-300 text-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       
                     />
                   </div>
                   <div className="mb-2">
                     <label
                       htmlFor="CompanyContactEmail"
                       className="block mb-2 text-sm  text-left"
                     >
                       Company Contact Email
                     </label>
                     <input
                       type="text"
                       id="CompanyContactEmail"
                       disabled
                       placeholder={userData.data.vendor.PrimaryEmailID}
                       multiple
                       className=" border border-gray-300 text-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      
                     />
                   </div>
                   <div className="mb-2">
                     <label
                       htmlFor="CompanyContactNumber"
                       className="block mb-2 text-sm  text-left"
                     >
                       Company Contact number
                     </label>
                     <input
                       type="text"
                       id="CompanyContactNumber"
                       disabled
                       placeholder={userData.data.vendor.SecondaryMobileNumber}
                       multiple
                       className=" border border-gray-300 text-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       
                     />
                   </div>
                 </div>
               </form>

               {/* </form> */}
             </div>
             <button
               type="button"
               className="inline-block my-5 float-left bg-blue-500 rounded bg-primary px-8 pb-2 pt-2.5 text-xs 
                  font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition 
                  duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                  focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                  focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                  dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                  dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                  dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
               form="invoiceForm"
               onClick={() => {
                 navigate("/allinvoices");
               }}
             >
               View Invoice
             </button>

             <button
               type="submit"
               className="inline-block my-5 float-right  bg-blue-500 rounded bg-primary px-8 pb-2 pt-2.5 text-xs 
                  font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition 
                  duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                  focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                  focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                  dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                  dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                  dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
               form="invoiceForm"
             >
               Submit
             </button>
           </div>
         </div>
       </div>
     </>
   );
};

export default AddInvoices;
