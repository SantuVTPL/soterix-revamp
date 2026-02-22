import Image from 'next/image'

function EmailSent() {
  return (
    <div className="flex flex-col gap-6">
        <Image src={'/assets/icons/email.png'} alt='email' width={50} height={40} className='text-btn-default self-center' />
        <h2 className='text-2xl font-bold text-center'>Email Sent</h2>
        <p className='text-sm text-center'>We have sent an email to <span className='text-white font-semibold'>adam.k@apex.com</span> with a link to reset the password.</p>
    </div>
  )
}

export default EmailSent