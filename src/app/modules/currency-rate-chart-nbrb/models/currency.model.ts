export interface CurrencyModel {
  id: number,
  code: string,
  abbreviation: string,
  name: string,
  name_eng: string,
  quot_name: string,
  quot_name_eng: string,
  date_start: string,
  date_end: string,
}

export interface CurrencyObjectModel {
  currencies: CurrencyModel[]
}

// {
//   Cur_ID: 1,
//   Cur_ParentID: 1,
//   Cur_Code: '008',
//   Cur_Abbreviation: 'ALL',
//   Cur_Name: 'Албанский лек',
//   Cur_Name_Bel: 'Албанскі лек',
//   Cur_Name_Eng: 'Albanian Lek',
//   Cur_QuotName: '1 Албанский лек',
//   Cur_QuotName_Bel: '1 Албанскі лек',
//   Cur_QuotName_Eng: '1 Albanian Lek',
//   Cur_NameMulti: '',
//   Cur_Name_BelMulti: '',
//   Cur_Name_EngMulti: '',
//   Cur_Scale: 1,
//   Cur_Periodicity: 1,
//   Cur_DateStart: '1991-01-01T00:00:00',
//   Cur_DateEnd: '2007-11-30T00:00:00',
// }
