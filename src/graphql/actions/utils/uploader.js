import cloudinary from 'cloudinary'

const storeUpload = async (stream, resourceType) => {
    cloudinary.config({
        cloud_name: process.env.CD_CLOUD_NAME,
        api_key: process.env.CD_API_KEY,
        api_secret: process.env.CD_API_SECRET
    })

    return new Promise((resolve, reject) => {
        const buffer = cloudinary.v2.uploader.upload_stream (
          { resource_type: resourceType },
          (err, result) => {
            if (err) reject(err);
            resolve(result);
          }
        )
        stream.pipe(buffer)
    })
}

export {
    storeUpload
}