import React from "react"

import { Info } from "./info"

export default function ContactInfo() {
  return (
    <div className="spacing">
      <div>
        <p className="body--large">{Info.name}</p>
        <p>{Info.street1}</p>
        <p>{Info.city1}</p>
        <p>{Info.postal1}</p>
        <p>Canada</p>
      </div>
      <div>
        <p className="body--large">direct contact</p>
        <a className="accent italics" href="tel: 905-857-2574">
          {Info.tel1}
        </a>
        <a
          className="accent italics"
          href="mailto: info@iconformingsystems.com"
        >
          {Info.mail1}
        </a>
      </div>
      <div>
        <p className="body--large">Business Hours</p>
        <p>Monday - Friday</p>
        <p>{Info.hours}</p>
      </div>
    </div>
  )
}
