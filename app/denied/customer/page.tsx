import Link from 'next/link'
import React from 'react'

const CustomerDeniedpage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[70vh]">
            <div className="text-center grid gap-2">
                <h4 className='uppercase text-xl font-semibold'>
                    You are not allow .
                </h4>
                <Link className='mt-10 text-limeBlue text-sm border border-gray px-3 py-1 rounded-md' href={"/login/customer-login"}>
                    Login Here
                </Link>
                <Link className='text-limeBlue text-sm border border-gray px-3 py-1 rounded-md' href={"/"}>
                    Go Back
                </Link>
            </div>
        </div>
  )
}

export default CustomerDeniedpage