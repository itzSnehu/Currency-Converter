const form = document.getElementById('converter-form');
const resultDiv = document.getElementById('result');
const dropFrom = document.getElementById('from');
const dropTo = document.getElementById('to');



const apiKey =  "04d180a7214966fd7ac091bb";
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

let countries = [
  {code: "ALL"}, {code: "AFN"}, {code: "ARS"}, {code: "AUD"},{code: "AWG"},{code: "AZN"}, {code:"BAM"}, {code:"BBD"}, {code:"BDT"},
  {code:"BGN"}, {code:"BHD"}, {code:"BIF"},{code: "BMD"},{code: "BND"}, {code:"BOB"}, {code:"BRL"}, {code:"BSD"},{code: "BTN"},
  {code:"BWP"}, {code:"BYN"}, {code:"BZD"}, {code:"CAD"},{code: "CDF"}, {code:"CHF"}, {code:"CLP"}, {code:"CNY"}, {code:"COP"},
  {code: "CRC"}, {code:"CUC"}, {code:"CUP"}, {code:"CVE"}, {code:"CZK"}, {code:"DJF"}, {code:"DKK"}, {code:"DOP"}, {code:"DZD"},
  {code:"EGP"}, {code:"ERN"}, {code:"ETB"}, {code:"EUR"}, {code:"FJD"}, {code:"FKP"}, {code:"GBP"}, {code:"GEL"}, {code:"GHS"},
  {code:"GIP"}, {code:"GMD"}, {code:"GNF"}, {code:"GTQ"}, {code:"GYD"}, {code:"HKD"}, {code:"HNL"}, {code:"HRK"}, {code:"HTG"},
  {code:"HUF"}, {code:"IDR"}, {code:"ILS"}, {code:"INR"}, {code:"IQD"}, {code:"IRR"}, {code:"ISK"}, {code:"JMD"}, {code:"JOD"},
  {code:"JPY"}, {code:"KES"}, {code:"KGS"}, {code:"KHR"}, {code:"KMF"}, {code:"KPW"}, {code:"KRW"}, {code:"KWD"}, {code:"KYD"},
  {code:"KZT"}, {code:"LAK"}, {code:"LBP"}, {code:"LKR"}, {code:"LRD"}, {code:"LSL"}, {code:"LYD"}, {code:"MAD"}, {code:"MDL"},
  {code:"MGA"}, {code:"MKD"}, {code:"MMK"}, {code:"MNT"}, {code:"MOP"}, {code:"MRO"}, {code:"MUR"}, {code:"MVR"}, {code:"MWK"},
  {code:"MXN"}, {code:"MYR"}, {code:"MZN"}, {code:"NAD"}, {code:"NGN"}, {code:"NIO"}, {code:"NOK"}, {code:"NPR"}, {code:"NZD"},
  {code:"OMR"}, {code:"PAB"}, {code:"PEN"}, {code:"PGK"}, {code:"PHP"}, {code:"PKR"}, {code:"PLN"}, {code:"PYG"}, {code:"QAR"},
  {code:"RON"}, {code:"RSD"}, {code:"RUB"}, {code:"RWF"}, {code:"SAR"}, {code:"SBD"}, {code:"SCR"}, {code:"SDG"}, {code:"SEK"},
  {code:"SGD"}, {code:"SHP"}, {code:"SLL"}, {code:"SOS"}, {code:"SRD"}, {code:"SSP"}, {code:"STD"}, {code:"SVC"}, {code:"SYP"},
  {code:"SZL"}, {code:"THB"}, {code:"TJS"}, {code:"TMT"}, {code:"TND"}, {code:"TOP"}, {code:"TRY"}, {code:"TTD"}, {code:"TWD"},
  {code:"TZS"}, {code:"UAH"}, {code:"UGX"}, {code:"USD"}, {code:"USN"}, {code:"USS"}, {code:"UYI"}, {code:"UYU"}, {code:"UZS"},
  {code:"VEF"}, {code:"VND"}, {code:"VUV"}, {code:"WST"}, {code:"XAF"}, {code:"XAG"}, {code:"XAU"}, {code:"XBA"}, {code:"XBB"},
  {code:"XBC"}, {code:"XBD"}, {code:"XCD"}, {code:"XDR"}, {code:"XOF"}, {code:"XPD"}, {code:"XPF"}, {code:"XPT"}, {code:"XSU"},
  {code:"XTS"}, {code:"XUA"}, {code:"XXX"}, {code:"YER"}, {code:"ZAR"}, {code:"ZMW"}, {code:"ZWL"}
];



countries.forEach(country => {
  
  const option1 = document.createElement('option');
  const option2 = document.createElement('option');
  
  option1.value = option2.value = country.code;
  option1.textContent = option2.textContent = `${country.code}`;

  dropFrom.appendChild(option1);
  dropTo.appendChild(option2);


  // default value add
  dropFrom.value = "USD";
  dropTo.value = "INR";
});



form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = dropFrom.value;
  const toCurrency = dropTo.value;

  try {
    const response = await fetch(`${apiUrl}${fromCurrency}`);
    const data = await response.json();

    const exchangeRate = data.conversion_rates[toCurrency];
    const convertedAmount = (amount * exchangeRate).toFixed(2);

    
    resultDiv.innerHTML = `<h2>${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}</h2>`;


  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    resultDiv.textContent = 'Error converting currency. Please try again.';
  }
});


