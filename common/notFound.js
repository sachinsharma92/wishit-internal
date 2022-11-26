import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { SlRefresh } from "react-icons/sl";

export default function NotFound() {
  return (
    <div className="page-not-found">
      <div className="container">
        <div className="image-sec">
          <Image
            src="/images/illustrations-404.svg"
            alt="Picture of the author"
            width={414}
            height={286}
          />
        </div>
        <div className='content-section'>
          <h4 className="title4">Yikes , This is awkward</h4>
          <p className="subtext">The page you’re looking for appears to have been moved, deleted, or doesn’t exist.  We apologize for the inconveniences</p>
          <Link href="/" className={`btn btn-info`}>
            <Image src="/icons/refresh.svg" alt="refresh icon" width={20} height={20} />
            Refresh
          </Link>
        </div>
      </div>
    </div>
  )
}
