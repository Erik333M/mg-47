#!/usr/bin/env node

const { v2: cloudinary } = require('cloudinary')

cloudinary.config({
  cloud_name: 'dbchvutws',
  api_key: '325374689243181',
  api_secret: '2244',
})

async function main() {
  const sampleImageUrl = 'https://res.cloudinary.com/demo/image/upload/sample.jpg'

  const uploadResult = await cloudinary.uploader.upload(sampleImageUrl, {
    folder: 'onboarding',
  })

  console.log(`Uploaded image secure URL: ${uploadResult.secure_url}`)
  console.log(`Uploaded image public ID: ${uploadResult.public_id}`)

  const details = await cloudinary.api.resource(uploadResult.public_id)

  console.log(`Width: ${details.width}`)
  console.log(`Height: ${details.height}`)
  console.log(`Format: ${details.format}`)
  console.log(`File size (bytes): ${details.bytes}`)

  const transformedUrl = cloudinary.url(uploadResult.public_id, {
    // f_auto lets Cloudinary choose the best output format for the user's browser.
    fetch_format: 'auto',
    // q_auto lets Cloudinary choose an efficient quality level automatically.
    quality: 'auto',
    secure: true,
  })

  console.log('Done! Click link below to see optimized version of the image. Check the size and the format.')
  console.log(transformedUrl)
}

main().catch((error) => {
  console.error('Cloudinary onboarding script failed.')
  console.error(error)
  process.exit(1)
})
