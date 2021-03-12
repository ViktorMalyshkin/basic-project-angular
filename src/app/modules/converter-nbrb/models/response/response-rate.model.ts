export interface ResponseRateModel {
  Cur_ID: number
  Date: string
  Cur_Abbreviation: string
  Cur_Scale: number
  Cur_Name: string
  Cur_OfficialRate: number
}

// Класс Rate (CurrencyExchangeRatesNbrb) содержит следующие свойства:
//
// Cur_ID – внутренний код
// Date – дата, на которую запрашивается курс
// Cur_Abbreviation – буквенный код
// Cur_Scale – количество единиц иностранной валюты
// Cur_Name – наименование валюты на русском языке во множественном, либо в единственном числе, в зависимости от количества единиц
// Cur_OfficialRate – курс
