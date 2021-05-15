using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DinkToPdf;
using Microsoft.ReactNative.Managed;
using Windows.Storage;

namespace webviewwindows
{
    [ReactModule]
    class HtmlToPdf
    {
        [ReactConstant("PDF_FILE_PATH")]
        public string PdfFilePath = ApplicationData.Current.LocalCacheFolder.Path + "\\file.pdf";
        [ReactMethod("convertHtmlToPdf")]
        public void ConvertHtmlToPdf (string html)
        {
            var converter = new SynchronizedConverter(new PdfTools());
            var doc = new HtmlToPdfDocument()
            {
                GlobalSettings =
                {
                    ColorMode = ColorMode.Grayscale,
                    Orientation = Orientation.Portrait,
                    PaperSize = PaperKind.A4Plus,
                    Out = PdfFilePath
                },
                Objects =
                {
                    new ObjectSettings()
                    {
                        PagesCount = true,
                        HtmlContent = html,
                        WebSettings = {DefaultEncoding = "utf-8"},
                    }
                }
            };
            byte[] pdf = converter.Convert(doc);
        }
    }
}
