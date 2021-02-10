export interface IIngot {
  MetalID: number
  Date: string
  Nominal: number
  NoCertificateDollars: string
  NoCertificateRubles: number
  CertificateDollars: string
  CertificateRubles: number
  BanksDollars: string
  BanksRubles: number
  EntitiesDollars: string
  EntitiesRubles: number
}

// Класс Ingot (PreciousMetalsExchangeRateNbrb) содержит следующие свойства:
//
// Date – дата, на которую запрашиваются цены
// MetalID – внутренний код драгоценного металла
// NoCertificateDollars – цена покупки без сертификата качества (в долларах США)
// NoCertificateRubles – цена покупки без сертификата качества (в белорусских рублях)
// CertificateDollars – цена покупки с сертификатом качества (в долларах США)
// CertificateRubles – цена покупки с сертификатом качества (в белорусских рублях)
// BanksDollars – цена продажи банкам (в долларах США)
// BanksRubles – цена продажи банкам (в белорусских рублях)
// EntitiesDollars – цена продажи юридическим и физическим лицам (за исключением банков, в долларах США)
// EntitiesRubles – цена продажи юридическим и физическим лицам (за исключением банков, в белорусских рублях)
