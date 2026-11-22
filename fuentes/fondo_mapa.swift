// Mapa base realista y sin conexión para la guía: relieve sombreado de Natural Earth
// (NE1_50M_SR_W, dominio público) recortado a China y pasado a Mercator web, la misma
// proyección de mapa.py y de las teselas de OpenStreetMap.
//
// Uso: swiftc -O fondo_mapa.swift -o fondo && ./fondo NE1_50M_SR_W.tif fondo_mapa.jpg
// El recorte (lon 76 a 138, lat 10 a 52) tiene que coincidir con FONDO en mapa.py.
import CoreGraphics
import Foundation
import ImageIO
import UniformTypeIdentifiers

let args = CommandLine.arguments
let LON0 = 76.0, LON1 = 138.0, LAT0 = 10.0, LAT1 = 52.0
let ESCALA = 1.35 // la fuente tiene 30 px por grado; se amplía con suavizado

guard let src = CGImageSourceCreateWithURL(URL(fileURLWithPath: args[1]) as CFURL, nil),
      let img = CGImageSourceCreateImageAtIndex(src, 0, nil) else { print("no se pudo leer"); exit(1) }
let pxPorGrado = Double(img.width) / 360.0
print("Fuente: \(img.width) x \(img.height), \(pxPorGrado) px por grado")

// 1) recorte en la proyección original (lon/lat regular)
let cx = Int((LON0 + 180) * pxPorGrado), cw = Int((LON1 - LON0) * pxPorGrado)
let cy = Int((90 - LAT1) * pxPorGrado), ch = Int((LAT1 - LAT0) * pxPorGrado)
guard let rec = img.cropping(to: CGRect(x: cx, y: cy, width: cw, height: ch)) else { exit(1) }

// píxeles RGBA del recorte
let cs = CGColorSpace(name: CGColorSpace.sRGB)!
var buf = [UInt8](repeating: 0, count: cw * ch * 4)
let ctx = CGContext(data: &buf, width: cw, height: ch, bitsPerComponent: 8, bytesPerRow: cw * 4,
                    space: cs, bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue)!
ctx.draw(rec, in: CGRect(x: 0, y: 0, width: cw, height: ch))

// 2) Mercator: cada fila de salida toma la latitud que le corresponde
func merc(_ lat: Double) -> Double { log(tan(Double.pi / 4 + lat * Double.pi / 360)) }
let m0 = merc(LAT0), m1 = merc(LAT1)
let W = Int(Double(cw) * ESCALA)
let H = Int(Double(W) * (m1 - m0) / ((LON1 - LON0) * Double.pi / 180))
var out = [UInt8](repeating: 255, count: W * H * 4)
for r in 0..<H {
  let m = m1 - (Double(r) + 0.5) / Double(H) * (m1 - m0)
  let lat = (2 * atan(exp(m)) - Double.pi / 2) * 180 / Double.pi
  let sy = (LAT1 - lat) * pxPorGrado - 0.5
  let y0 = max(0, min(ch - 1, Int(floor(sy)))), y1 = min(ch - 1, y0 + 1)
  let fy = max(0, min(1, sy - Double(y0)))
  for c in 0..<W {
    let sx = (Double(c) + 0.5) / ESCALA - 0.5
    let x0 = max(0, min(cw - 1, Int(floor(sx)))), x1 = min(cw - 1, x0 + 1)
    let fx = max(0, min(1, sx - Double(x0)))
    for k in 0..<3 {
      let a = Double(buf[(y0 * cw + x0) * 4 + k]), b = Double(buf[(y0 * cw + x1) * 4 + k])
      let d = Double(buf[(y1 * cw + x0) * 4 + k]), e = Double(buf[(y1 * cw + x1) * 4 + k])
      let v = (a * (1 - fx) + b * fx) * (1 - fy) + (d * (1 - fx) + e * fx) * fy
      out[(r * W + c) * 4 + k] = UInt8(max(0, min(255, v.rounded())))
    }
    out[(r * W + c) * 4 + 3] = 255
  }
}
let octx = CGContext(data: &out, width: W, height: H, bitsPerComponent: 8, bytesPerRow: W * 4,
                     space: cs, bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue)!
let final = octx.makeImage()!
let dst = CGImageDestinationCreateWithURL(URL(fileURLWithPath: args[2]) as CFURL,
                                          UTType.jpeg.identifier as CFString, 1, nil)!
CGImageDestinationAddImage(dst, final, [kCGImageDestinationLossyCompressionQuality: 0.8] as CFDictionary)
CGImageDestinationFinalize(dst)
print("Salida: \(W) x \(H)")
