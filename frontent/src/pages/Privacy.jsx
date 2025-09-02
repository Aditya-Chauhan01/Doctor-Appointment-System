import React from 'react'

const Privacy = () => {
  return (
    <div>
        <div className='mt-10'>
            <h1 className='text-5xl font-bold text-blue-400 my-3'>MediConnet - Privacy Policy</h1>
            <p className='text-[25px] text-gray-600 mb-3 leading-none'>Welcome to Doctor Appointment System. We value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, share, and protect your information when you use our website and services.</p>

            <div>
                <h1 className='text-3xl font-bold pb-1 mt-10'>Information We Collect</h1>
                <p className='text-gray-600 text-xl pb-2'>We may collect the following types of personal information:</p>
                <div className='flex flex-col gap-1'>
                    <div className='flex items-center'>
                    <p className='w-2 h-2 bg-black rounded-full'></p>
                    <span className='px-2 text-xl font-semibold'>Personal Identification Information: </span> <p className='text-xl text-gray-600'>Name, email address, phone number, gender, date of birth.</p>
                </div>
                <div className='flex items-center'>
                    <p className='w-2 h-2 bg-black rounded-full'></p>
                    <span className='px-2 text-xl font-semibold'>Payment Information: </span> <p className='text-xl text-gray-600'>Transaction details processed through Razorpay (we do not store card or UPI details).</p>
                </div>
                <div className='flex items-center'>
                    <p className='w-2 h-2 bg-black rounded-full'></p>
                    <span className='px-2 text-xl font-semibold'>Technical Data: </span> <p className='text-xl text-gray-600'>IP address, browser type, device information, and cookies.</p>
                </div>
                </div>
            </div>

            <div>
                <h1 className='text-3xl font-bold pb-1 mt-10' >How We Use Your Information</h1>
                <p className='text-gray-700 text-xl pb-2' >We use your information for the following purposes:</p>
                <div className='flex flex-col gap-0.5'>
                    <div className='flex items-center'>
                    <p className='w-2 h-2 bg-black rounded-full'></p>
                    <span className='px-2 text-xl text-gray-600'>To schedule and manage doctor appointments</span>
                </div>
                <div className='flex items-center'>
                    <p className='w-2 h-2 bg-black rounded-full'></p>
                    <span className='px-2 text-xl text-gray-600'>To send confirmation and reminder emails/SMS </span>
                </div>
                <div className='flex items-center'>
                    <p className='w-2 h-2 bg-black rounded-full'></p>
                    <span className='px-2 text-xl text-gray-600'>To process secure payments via Razorpay</span>
                </div>
                <div className='flex items-center'>
                    <p className='w-2 h-2 bg-black rounded-full'></p>
                    <span className='px-2 text-xl text-gray-600'>To improve our services and website functionality</span>
                </div>
                <div className='flex items-center'>
                    <p className='w-2 h-2 bg-black rounded-full'></p>
                    <span className='px-2 text-xl text-gray-600'>To comply with legal obligations</span>
                </div>
                </div>
            </div>

            <div className='mt-10'>
                <h1 className='text-3xl font-bold pb-2'>Payment Information</h1>
                <p className='px-2 text-xl text-gray-600 pb-3'>We use Razorpay as our third-party payment processor. Razorpay may collect personal data to process transactions securely. Please refer to Razorpay's Privacy Policy for more information on how they handle your data.</p>
                <p className='px-2 text-xl text-gray-600'>We do not store your card, UPI, or payment credentials on our servers.</p>
            </div>

            <div className='mt-10'>
                <h1 className='text-3xl font-bold pb-1'>Sharing Your Information</h1>
                <p className='text-gray-700 text-xl pb-2' >We do not sell or rent your personal information. We may share your data with: </p>
                <div className='flex flex-col gap-0.5'>
                    <div className='flex items-center'>
                    <p className='w-2 h-2 bg-black rounded-full'></p>
                    <span className='px-2 text-xl text-gray-600'>Licensed doctors and healthcare providers for appointment purposes</span>
                </div>
                <div className='flex items-center'>
                    <p className='w-2 h-2 bg-black rounded-full'></p>
                    <span className='px-2 text-xl text-gray-600'>Razorpay for payment processing </span>
                </div>
                <div className='flex items-center'>
                    <p className='w-2 h-2 bg-black rounded-full'></p>
                    <span className='px-2 text-xl text-gray-600'>Government or legal authorities if required by law.</span>
                </div>
                </div>   
            </div>

            <div className='mt-10'>
                <h1 className='text-3xl font-bold pb-1'>Data Security</h1>
                <p className='px-2 text-xl text-gray-600 pb-3' >We implement industry-standard security practices to protect your data. However, no system can guarantee absolute security. You are responsible for keeping your login credentials secure.</p>
            </div>

            <div className='mt-10'>
                <h1 className='text-3xl font-bold pb-1'>Your Rights</h1>
                <p  className='text-gray-700 text-xl pb-2' >Under applicable Indian data protection laws, you may have the right to:</p>
                <div className='flex flex-col gap-0.5'>
                    <div className='flex items-center'>
                    <p className='w-2 h-2 bg-black rounded-full'></p>
                    <span className='px-2 text-xl text-gray-600'>Access or correct your personal data</span>
                </div>
                <div className='flex items-center'>
                    <p className='w-2 h-2 bg-black rounded-full'></p>
                    <span className='px-2 text-xl text-gray-600'>Withdraw consent </span>
                </div>
                <div className='flex items-center'>
                    <p className='w-2 h-2 bg-black rounded-full'></p>
                    <p className='px-2 text-xl text-gray-600'>Request deletion of your data</p>
                </div>
                </div>
                <p className='px-2 py-3 text-xl text-gray-600'>To exercise these rights, contact us at: MediConnect@gmail.com</p>
            </div>


        </div>
    </div>
  )
}

export default Privacy