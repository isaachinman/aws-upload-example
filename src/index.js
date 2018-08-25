import AWS from 'aws-sdk'
import logger from 'utils/logger'

const s3 = new AWS.S3({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_ID,
  },
})

const base64data = new Buffer('test.png', 'binary')

s3.putObject({
  Bucket: 'hyf-website-uploads',
  Key: `test-image-${new Date()}.png`,
  Body: base64data,
}, () => {
  logger.info(arguments)
  logger.info('Successfully uploaded package.')
})
