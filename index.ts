import { Html5QrcodeScanner } from 'html5-qrcode'

const qrResult = document.querySelector('#qr-reader-results') as HTMLDivElement
const scanBtn = document.querySelector('#scan-btn') as HTMLButtonElement

const scanner = new Html5QrcodeScanner(
    '#qr-reader',
    {
        fps: 30,
        qrbox: 250,
    },
    true
)

scanBtn.onclick = () => {
    scanner.render(
        (decodedText) => {
            qrResult.textContent = decodedText
        },
        (error) => {
            qrResult.textContent = error
        }
    )
}