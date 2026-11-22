// Uso: swift hero.swift entrada.mp4 salida.mp4 inicio_s duracion_s factor_lento ancho alto bitrate_bps fps
import AVFoundation
import Foundation

let a = CommandLine.arguments
let inURL = URL(fileURLWithPath: a[1]), outURL = URL(fileURLWithPath: a[2])
let start = Double(a[3])!, dur = Double(a[4])!, slow = Double(a[5])!
let W = Int(a[6])!, H = Int(a[7])!, bitrate = Int(a[8])!, fps = Int32(a[9])!
try? FileManager.default.removeItem(at: outURL)

let asset = AVURLAsset(url: inURL)
let sem = DispatchSemaphore(value: 0)
Task {
  do {
    let track = try await asset.loadTracks(withMediaType: .video).first!
    let nat = try await track.load(.naturalSize)
    let srcFps = try await track.load(.nominalFrameRate)
    print("Origen: \(Int(nat.width))x\(Int(nat.height)) a \(srcFps) fps")

    // Composicion: recorte y camara lenta
    let comp = AVMutableComposition()
    let ct = comp.addMutableTrack(withMediaType: .video, preferredTrackID: kCMPersistentTrackID_Invalid)!
    let r = CMTimeRange(start: CMTime(seconds: start, preferredTimescale: 600), duration: CMTime(seconds: dur, preferredTimescale: 600))
    try ct.insertTimeRange(r, of: track, at: .zero)
    let outDur = CMTime(seconds: dur * slow, preferredTimescale: 600)
    ct.scaleTimeRange(CMTimeRange(start: .zero, duration: r.duration), toDuration: outDur)

    // Escalado a W x H rellenando (cover)
    let vc = AVMutableVideoComposition()
    vc.renderSize = CGSize(width: W, height: H)
    vc.frameDuration = CMTime(value: 1, timescale: fps)
    let ins = AVMutableVideoCompositionInstruction()
    ins.timeRange = CMTimeRange(start: .zero, duration: outDur)
    let li = AVMutableVideoCompositionLayerInstruction(assetTrack: ct)
    let s = max(Double(W) / Double(nat.width), Double(H) / Double(nat.height))
    let tx = (Double(W) - Double(nat.width) * s) / 2, ty = (Double(H) - Double(nat.height) * s) / 2
    li.setTransform(CGAffineTransform(scaleX: s, y: s).concatenating(CGAffineTransform(translationX: tx, y: ty)), at: .zero)
    ins.layerInstructions = [li]
    vc.instructions = [ins]

    let reader = try AVAssetReader(asset: comp)
    let ro = AVAssetReaderVideoCompositionOutput(videoTracks: [ct], videoSettings: [kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32BGRA])
    ro.videoComposition = vc
    reader.add(ro)

    let writer = try AVAssetWriter(outputURL: outURL, fileType: .mp4)
    writer.shouldOptimizeForNetworkUse = true
    let wi = AVAssetWriterInput(mediaType: .video, outputSettings: [
      AVVideoCodecKey: AVVideoCodecType.h264,
      AVVideoWidthKey: W, AVVideoHeightKey: H,
      AVVideoCompressionPropertiesKey: [
        AVVideoAverageBitRateKey: bitrate,
        AVVideoProfileLevelKey: AVVideoProfileLevelH264HighAutoLevel,
        AVVideoExpectedSourceFrameRateKey: fps,
        AVVideoMaxKeyFrameIntervalKey: Int(fps) * 2,
        AVVideoAllowFrameReorderingKey: true,
        AVVideoH264EntropyModeKey: AVVideoH264EntropyModeCABAC,
      ] as [String: Any],
    ])
    wi.expectsMediaDataInRealTime = false
    writer.add(wi)
    reader.startReading()
    writer.startWriting()
    writer.startSession(atSourceTime: .zero)
    var n = 0
    while let sb = ro.copyNextSampleBuffer() {
      while !wi.isReadyForMoreMediaData { usleep(2000) }
      wi.append(sb); n += 1
    }
    wi.markAsFinished()
    await writer.finishWriting()
    if writer.status != .completed { print("ERROR:", writer.error ?? "desconocido"); exit(1) }
    print("Escritos \(n) fotogramas, \(String(format: "%.1f", outDur.seconds)) s")
  } catch { print("ERROR:", error); exit(1) }
  sem.signal()
}
sem.wait()
