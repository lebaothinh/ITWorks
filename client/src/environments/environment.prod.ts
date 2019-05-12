export const environment = {
  production: true,
  tinyConfig: {
    plugins: 'autoresize imagetools print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image code link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern help',
    toolbar: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
    branding: false,
    entity_encoding : 'raw',
    images_upload_url: 'https://itworks.azurewebsites.net/api/Editor/TinyUploadFiles/',
    automatic_uploads: false,
  },
  apiKey: "dh448fao28ctmlanzex5aul7x6ga7o2ko5ozkueobq1po7lf",

  API_URL_CLIENT:         'https://lebaothinh.github.io/ITWorks/',
  API_URL:                'https://itworks.azurewebsites.net',
  API_URL_IMG:            'https://itworks.azurewebsites.net' + '/images',
  API_URL_LABORER:        'https://itworks.azurewebsites.net' + '/images' + '/LaborerAndAdmin',
  API_URL_LABORER_AVATAR: 'https://itworks.azurewebsites.net' + '/images' + '/LaborerAndAdmin' + '/avatar',
  API_URL_LABORER_CV:     'https://itworks.azurewebsites.net' + '/images' + '/LaborerAndAdmin' + '/cv',
  API_URL_COMPANY:        'https://itworks.azurewebsites.net' + '/images' + '/Company',
  API_URL_COMPANY_AVATAR: 'https://itworks.azurewebsites.net' + '/images' + '/Company' + '/avatar',
  API_URL_COMPANY_LOGO:   'https://itworks.azurewebsites.net' + '/images' + '/Company' + '/logo',
};
