  const InvoiceData = {
  "id": "5efda988ec9e37a8682a9a31",
  "invoice_no": "201903-38",
  "balance": "$2,888.57",
  "company": "ZYPLE",
  "email": "benjaminhammond@zyple.com",
  "phone": "+1 (877) 534-2774",
  "address": "409 Coleridge Street, Sterling, Nevada, 557",
  "trans_date": "2019-09-14",
  "due_date": "2019-10-14",
  "items": [
    {
      "sno": 1,
      "desc": "nostrud mollit elit voluptate exercitation",
      "qty": 6,
      "rate": 160.59
    },
    {
      "sno": 2,
      "desc": "aliqua ea deserunt deserunt adipisicing",
      "qty": 2,
      "rate": 15.06
    },
    {
      "sno": 3,
      "desc": "consectetur cupidatat anim labore excepteur",
      "qty": 2,
      "rate": 1136.09
    },
    {
      "sno": 4,
      "desc": "magna labore ex pariatur anim",
      "qty": 7,
      "rate": 1000.18
    },
    {
      "sno": 5,
      "desc": "culpa laborum ea ipsum mollit",
      "qty": 8,
      "rate": 888.52
    }
  ]
}

// {
//     id: '{{objectId()}}',
//     invoice_no: '{{date(new Date(2019, 0, 1), new Date(), "YYYYMM")}}-{{integer(100)}}',
//     balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
//     company: '{{company().toUpperCase()}}',
//     email: '{{email()}}',
//     phone: '+254 {{phone()}}',
//     address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
//     trans_date: '{{date(new Date(2019, 8, 1), new Date(2019,8,31), "YYYY-MM-dd")}}',
//     due_date: '{{date(new Date(2019, 9, 4), new Date(2019,9,31), "YYYY-MM-dd")}}',
//     items: [
//       '{{repeat(5)}}',
//       {
//         sno: '{{index(1)}}',
//         desc: '{{lorem(5, "words")}}',
//         unit_price: '{{integer(1000, 10)}}',
//         month: {{date(new Date(2020, 0, 1), new Date(), "YYYYMM")}}-{{integer(100)}}',
//         amount: '{{integer(2, 10)}}',
//       }
//     ]
//   }
