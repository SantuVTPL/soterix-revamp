import jsQR from "jsqr"
import { Jimp } from "jimp"

export async function getQrData(imageUrl: string) {
  const image = await Jimp.read(imageUrl)

  const { data, width, height } = image.bitmap

  const qr = jsQR(new Uint8ClampedArray(data), width, height)

  if (!qr) {
    throw new Error("QR code not found")
  }

  return qr.data
}