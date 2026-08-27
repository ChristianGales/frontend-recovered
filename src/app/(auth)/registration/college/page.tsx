"use client"

import { useState } from "react"

import PrivacyPolicyPage from "@/components/shared/privacy-policy";
import CollegeRegistrationForm from "@/components/forms/registration/college/student-registration-form-v2";

const CollegeRegistration = () => {

  const [agreed, setAgreed] = useState(false)

  return (
    <>
      {!agreed ? (
        <PrivacyPolicyPage
          onAgree={() => setAgreed(true)}
        />
      ) : (
        <CollegeRegistrationForm />
      )}
    </>
  )
}

export default CollegeRegistration;

