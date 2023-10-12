import { generateDateString } from "@/lib/helpers";
import { NextResponse, NextRequest } from "next/server";


const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    name: "mail.prosapac.com",
    host: "mail.prosapac.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD
    },
})


export async function POST(request) {
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const contact = formData.get('contact')
    const basketStringified = formData.get('basket')
    const basket = JSON.parse(formData.get('basket'))
    // basket.parse()

    try {

        // console.log(basketStringified);

        const tableRowsHTML = basket.map((b, index) => `
            <tr key=${index}>
                <td style="padding: 10px; text-align: center; border: 1px solid black;">
                <img src=${b.image} alt="Image" width="64" height="64" />
                </td>
                <td style="padding: 10px; border: 1px solid black; color: #272727">${b.name}</td>
                <td style="padding: 10px; border: 1px solid black; color: #272727">${b.qty}</td>
            </tr>
        `).join('');

        const mail = await transporter.sendMail({
            from: email,
            to: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
            subject: `Quote Request ${generateDateString()}`,
            html: `
            <!DOCTYPE html
            PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
        
        <head>
            <title>Email Title</title>
        
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="x-apple-disable-message-reformatting" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
            <style type="text/css">
                /* Test */
                .test {
                    border-width: 2px;
                    border-style: dashed;
                    border-color: red;
                }
        
                /* Google font import Lato */
                @import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');
        
                /* Outlook link fix */
                #outlook a {
                    padding: 0;
                }
        
                /* Hotmail background & line height fixes */
                .ExternalClass {
                    width: 100% !important;
                }
        
                .ExternalClass,
                .ExternalClass p,
                .ExternalClass span,
                .ExternalClass font,
        
                /* Image borders & formatting */
                img {
                    outline: none;
                    text-decoration: none;
                    -ms-interpolation-mode: bicubic;
                }
        
                a img {
                    border: none;
                }
        
                /* Re-style iPhone automatic links (eg. phone numbers) */
                .appleLinksGrey a {
                    color: #919191 !important;
                    text-decoration: none !important;
                }
        
                /* Hotmail symbol fix for mobile devices */
                .ExternalClass img[class^=Emoji] {
                    width: 10px !important;
                    height: 10px !important;
                    display: inline !important;
                }
        
                /* Button hover colour change */
                .CTA:hover {
                    background-color: #5FDBC4 !important;
                }
        
        
                @media screen and (max-width:640px) {
                    .mobilefullwidth {
                        width: 100% !important;
                        height: auto !important;
                    }
        
                    .logo {
                        padding-left: 30px !important;
                        padding-right: 30px !important;
                    }
        
                    .h1 {
                        font-size: 36px !important;
                        line-height: 48px !important;
                        padding-right: 30px !important;
                        padding-left: 30px !important;
                        padding-top: 30px !important;
                    }
        
                    .h2 {
                        font-size: 18px !important;
                        line-height: 27px !important;
                        padding-right: 30px !important;
                        padding-left: 30px !important;
                    }
        
                    .p {
                        font-size: 16px !important;
                        line-height: 28px !important;
                        padding-left: 30px !important;
                        padding-right: 30px !important;
                        padding-bottom: 30px !important;
                    }
        
                    .CTA_wrap {
                        padding-left: 30px !important;
                        padding-right: 30px !important;
                        padding-bottom: 30px !important;
                    }
        
                    .footer {
                        padding-left: 30px !important;
                        padding-right: 30px !important;
                    }
        
                    .number_wrap {
                        padding-left: 30px !important;
                        padding-right: 30px !important;
                    }
        
                    .unsubscribe {
                        padding-left: 30px !important;
                        padding-right: 30px !important;
                    }
        
                }
            </style>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        
        
        <body
            style="padding:0; margin:0; -webkit-text-size-adjust:none; -ms-text-size-adjust:100%; background-color:#e8e8e8; font-family: 'Lato', sans-serif; font-size:16px; line-height:24px; color:#919191">
        
            <!--[if mso]>
            <style type="text/css">
                body, table, td {font-family: Arial, Helvetica, sans-serif !important;}
            </style>
        <![endif]-->
        
        
        
            <!-- // FULL EMAIL -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
        
                <tr>
        
                    <!-- // LEFT SPACER CELL *** MUST HAVE A BACKGROUND COLOUR -->
                    <td bgcolor="#EBEBEB" style="font-size:0px">&zwnj;</td>
                    <!-- LEFT SPACER CELL // -->
        
                    <!-- // MAIN CONTENT CELL -->
                    <td align="center" width="600" bgcolor="#FFFFFF">
        
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
        
                            <tbody>
        
                                <!-- START OF CONTENT -->
                                <tr>
                                    <td class="logo" align="left" bgcolor="#154829"
                                        style="padding-top: 20px;padding-right: 50px;padding-bottom: 20px;padding-left: 50px;">
                                        <img src="https://prosapac.com/main/wp-content/uploads/2023/10/pac-logo.png"
                                            style="width: 76px;height: 64px;" />
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" bgcolor="#154829"
                                        style="padding-top: 20px;padding-right: 50px;padding-bottom: 20px;padding-left: 50px;">
                                        <h1 style="color: #FFF; font-weight: 700;">Customer Inquiry</h1>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" bgcolor="#FCFCFC"
                                        style="padding-top: 10px;padding-right: 50px;padding-bottom: 5px;padding-left: 50px;">
                                            <h2 style="color: #f06128;">FROM </h2>
                                            <p style="color: #272727; font-weight: 700;">
                                               <span style="padding-bottom: 2px">${name}<br></span>
                                               <span style="padding-bottom: 2px">${email}<br></span>
                                               <span style="padding-bottom: 2px">${contact}<br></span>
                                            </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" bgcolor="#FCFCFC" style="padding-right: 50px;padding-left: 50px;">
                                        <h1 style="color: #067133; font-size: xx-large; font-style: italic;">"</h1>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" bgcolor="#FCFCFC" style="padding-right: 50px;padding-left: 50px;">
                                        <table style="width: 100%; border-collapse: collapse;">
                                            <thead>
                                                <tr>
                                                    <th style="background-color: green; padding: 10px; border: 1px solid black; color: white;">Image</th>
                                                    <th style="background-color: green; padding: 10px; border: 1px solid black; color: white">Product Name</th>
                                                    <th style="background-color: green; padding: 10px; border: 1px solid black; color: white">Qty</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                ${tableRowsHTML}
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right" bgcolor="#FCFCFC" style="padding-right: 50px;padding-left: 50px;">
                                        <h1 style="color: #067133; font-size: xx-large; font-style: italic;">"</h1>
                                    </td>
                                </tr>
        
                                <!-- END OF CONTENT -->
        
                            </tbody>
                        </table>
        
                    </td>
                    <!-- // MAIN CONTENT CELL -->
        
                    <!-- // RIGHT SPACER CELL *** MUST HAVE A BACKGROUND COLOUR -->
                    <td bgcolor="#EBEBEB" style="font-size:0px">&zwnj;</td>
                    <!-- RIGHT SPACER CELL // -->
        
                </tr>
            </table>
            <!-- FULL EMAIL // -->
        </body>
        
        </html>
                `,
        })

        // console.log("NAME: ", name, "EMAIL: ", email, "CONTACT: ", contact, "BASKET: ", basket[0].name );

        return NextResponse.json({ message: "Success: email was sent " })

    } catch (error) {
        // NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
        console.log("ERROR: ", error.message);
        return NextResponse.json({ error: error.message }, { status: 500 })
    }


}