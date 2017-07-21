var request = require('request')
var fs = require('fs')
var cmd = require('node-cmd')

cmd.run('cp dist/index.weex.js dist/index.js')

var filePath = __dirname + '/dist/' + 'index.js'
var bucketname = 'ecom-bucket-test'

console.log('File to upload: ' + filePath)

var file_content = fs.readFileSync(filePath, 'utf8')

var formData = {
  image: fs.createReadStream(filePath)
}
request.post({ url: 'https://ab-s3-image-uploader.herokuapp.com/api/upload-js/' + bucketname, formData: formData }, function callback (err, httpResponseBody, body) {
  if (err) {
    console.log('Error uploading js file')
  } else {
    console.log('Upload Successful!')
  }
})
// if (publisher !== undefined && file_name !== undefined) {

// } else {
//   console.log('Arguments Required!!')
// }
