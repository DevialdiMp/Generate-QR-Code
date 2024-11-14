const qr = require("node-qr-image");
const qrcode = require("qrcode");

class HandleQr {

    static generateQr(req, res) {
        const qrImage = qr.image("https://www.instagram.com/boboiboyy.fck/", { type: "png", size: 500 });

        console.log("QR Code berhasil dibuat!");
        console.log(`URL: http://localhost:3000/qrcodeone`);

        res.type('png');
        qrImage.pipe(res);
    }

    static async generateAnotherQr(req, res) {
        try {
            const dataQr = await qrcode.toDataURL("hhttps://www.instagram.com/boboiboyy.fck/");

            console.log("QR Code berhasil dibuat!");
            console.log("URL: http://localhost:3000/qrcodetwo");

            res.status(200).send(`
                <html>
                <body style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; margin: 0;">
                    <p style="margin-bottom: 20px; font-size: 24px; font-weight: bold;">Scan Barcode Disini!</p>
                    <img src="${dataQr}" alt="QR Code" style="width: 500px; height: 500px;"/>
                </body>
            </html>
            `);
        } catch (error) {
            console.log(error, " ini error");
            res.status(500).json({ message: "Terjadi kesalahan saat menghasilkan QR Code." });
        }
    }
}

module.exports = HandleQr;