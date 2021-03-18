// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  env_name: 'DEV',
  api_url: 'https://www.nbrb.by/api',
  initial_currency_chart:
    {
      id: 145,
      name: '1 Доллар США',
      date_start: '2021-02-01',
      date_end: '2021-02-24',
    },
  initial_converter: {
    listOfCurAbbreviations: ['BYN', 'UAH', 'USD', 'EUR', 'PLN', 'RUB'],
  },
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
