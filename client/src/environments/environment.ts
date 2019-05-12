// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: false,
  tinyConfig: {
    plugins: 'autoresize imagetools print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image code link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern help',
    toolbar: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
    branding: false,
    entity_encoding : 'raw',
    images_upload_url: 'http://localhost:53667/api/Editor/TinyUploadFiles/',
    automatic_uploads: false,
  },
  apiKey: "dh448fao28ctmlanzex5aul7x6ga7o2ko5ozkueobq1po7lf",

  API_URL_CLIENT:         'localhost:4200/',
  API_URL:                'http://localhost:53667',
  API_URL_IMG:            'http://localhost:53667' + '/images',
  API_URL_LABORER:        'http://localhost:53667' + '/images' + '/LaborerAndAdmin',
  API_URL_LABORER_AVATAR: 'http://localhost:53667' + '/images' + '/LaborerAndAdmin' + '/avatar',
  API_URL_LABORER_CV:     'http://localhost:53667' + '/images' + '/LaborerAndAdmin' + '/cv',
  API_URL_COMPANY:        'http://localhost:53667' + '/images' + '/Company',
  API_URL_COMPANY_AVATAR: 'http://localhost:53667' + '/images' + '/Company' + '/avatar',
  API_URL_COMPANY_LOGO:   'http://localhost:53667' + '/images' + '/Company' + '/logo',
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
