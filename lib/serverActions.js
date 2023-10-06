'use server'

export async function VerifyCaptcha(token){
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`,{
        method: 'post',
        // mode: 'no-cors',
    })
    
   

    if (response.ok) {
        return true
    } else {
        throw new Error("Captcha Failed!")
    }
}