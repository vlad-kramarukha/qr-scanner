import QrScanner from 'qr-scanner'

const output = document.querySelector('#qr-scanner') as HTMLVideoElement
const result = document.querySelector('#result') as HTMLDivElement
const scanner = new QrScanner(output, (data) => {
    result.textContent = data
})

scanner.start()