'use client'
import { Container } from "@mui/material";
import React from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import IndexPage from "../components/IndexPage";
import { useTheme } from "../context/ThemeContext";
const CookiePolicy = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <IndexPage>
          <title>Cookie Policy -- NextLevelFunding</title>
          <meta
            name="description"
            content="With our program, you can get funded up to £1,000,000 with up to a 90% profit split. Unlock Your Trading Potential with Our Leading Proprietary Trading Firm."
          />
          <meta property="og:title" content="NextLevelFunding" />
          {/* Add other meta tags as needed for og:description, og:image, etc. */}
          <link rel="favicon" sizes="180x180" href="/assets/favicon.ico" />
          <link rel="favicon" type="image/ico" sizes="32x32" href="/assets/favicon.ico" />
          <link rel="favicon" type="image/ico" sizes="16x16" href="/assets/favicon.ico" />
          <link rel="manifest" href="/site.webmanifest" />
        
      </IndexPage>
    <main className={`${theme === 'light' ? "body-bg text-white" : "bg-white text-black"} w-full  pt-[5rem]`}>
        <div className="grid items-center justify-center py-[5rem]">
          <p className="space-grotesk font-bold text-[3rem] text-center">
            Cookie Policy
          </p>
        </div>
      </main>
      <div className={`${theme === 'light' ? "home-bg text-white" : "bg-white text-black"}  text-lg`}>
        <div className="xl:px-[9rem] 2xl:px-[12rem] px-[2rem]">
          <section className="lexend py-9">
            When displaying content, advertisements and other functionalities on
            the{" "}
            <span className="text-orange-700 font-bold">
              <Link href="www.nextlevelfunding.co.uk">
                www.nextlevelfunding.co.uk
              </Link>
            </span>{" "}
            website (the “Website”) various technologies are used to collect and
            process personal data, including cookies. You will find details
            concerning this method of processing in this Cookie Policy. In this
            Cookie Policy, you will find information regarding the following:
            <ul className="py-5">
              <ol>1. What technologies do we use and what are cookies?</ol>
              <ol>2. How to set up the use of cookies on the Website?</ol>
              <ol>3. How to set up cookies in the web browser?</ol>
              <ol>4.What cookies do we use on the Website?</ol>
            </ul>
          </section>
          <section className="font-extralight lexend py-5">
            <h3 className="font-bold">
              1. WHAT TECHNOLOGIES DO WE USE AND WHAT ARE COOKIES?
            </h3>
            <p>
              Cookies are small files that are stored on your device and that
              help us collect information about your activities. In particular,
              cookies allow us to remember your settings, preferences, and your
              access data, provide targeted content and marketing
              communications, and analyse the operation of the Website. Cookies
              may come from us or from third parties whose services we use. In
              addition to cookies, we may also process your IP address, which is
              a unique number assigned to a computer or other device
              communicating via the internet protocol, and analytical scripts,
              which are small pieces of a computer code through which users and
              their behaviour on websites can be tracked.
            </p>
          </section>
          <section className="font-extralight lexend py-5">
            <h3 className="font-bold">
              2. HOW TO SET UP THE USE OF COOKIES ON THE WEBSITE?
            </h3>
            <p>
              You can set up your preferences in your web browser and also in
              your operating system. Some parts of the Website are designed to
              work with the use of cookies. If you reject some cookies, it may
              affect the use of some features on the Website or parts its parts.
            </p>
          </section>
          <section className="font-extralight lexend py-5">
            <h3 className="font-bold">
              3. HOW TO SET UP COOKIES IN THE WEB BROWSER?
            </h3>
            <p>
              You can set up the storage of cookies on your device in your web
              browser. You can set up your browser to accept all cookies, reject
              them, or indicate when a cookie is being sent, at any time. For
              more information and options, see the operating system settings of
              your device. Most browsers automatically accept cookies by
              default.You can also delete cookies from your device’s memory at
              any time. For more information, access your browser or operating
              system.
            </p>
          </section>
          <section className="font-extralight lexend py-5">
            <h3 className="font-bold">
              4.WHAT COOKIES DO WE USE ON THE WEBSITE?
            </h3>
            <p>We use the following types of cookies on the Website:</p>
          </section>
          <section className="font-extralight lexend py-5">
            <h3 className="font-bold">Essential cookies</h3>
            <p>
              Essential cookies help our website to operate correctly and to
              respond to your requests. Without them the website would not work
              at all or as desired. Cookies in this category also helps us
              maintain security of our services. They are always active.
            </p>
          </section>
          <section className="font-extralight lexend py-5">
            <h3 className="font-bold">Analytical cookies </h3>
            <p>
              These cookies help us analyze how our website is utilized, which
              functionalities are the most used and where we can still improve.
              These cookies are optional, however, without them we will not be
              able to continue to improve your website experience.
            </p>
          </section>
          <section className="font-extralight lexend py-5">
            <h3 className="font-bold">Marketing cookies </h3>
            <p>
              Marketing cookies are used by us and our partners to personalize
              the ads which may be displayed to you on websites or social media.
              We will not use these cookies without your consent, but without
              it, the advertisement you see will not be tailored to you. More
              information List of marketing cookies
            </p>
          </section>
          <section className="font-extralight lexend py-5">
            <h3 className="font-bold">
              5.What are your rights and how can you exercise them?
            </h3>
            <p>
              In connection with the processing of personal data, including
              cookies, you have the following rights: * Right of access to
              personal data You can ask us at any time to send you a
              confirmation as to whether or not your personal data are being
              processed. If we process your data, we will provide you with
              further details on the processing. If you request it, we will also
              provide you with a copy of the personal data processed. Please
              note that the first copy is free of charge, but any following copy
              will be provided for a small fee. * Right to rectification of
              personal data If we process your personal data inaccurately, you
              can notify us of this fact, and we will rectify the inaccurate
              personal data without undue delay. If you register on the Website,
              you will be able to rectify and amend your personal data yourself
              by editing your user account. * Right to erasure of personal data
              (“right to be forgotten”) You have the right to obtain from us the
              erasure of personal data concerning you without undue delay in the
              following cases: * If the data are no longer necessary in relation
              to the purposes for which we have collected or otherwise processed
              them; * If you withdraw your consent to their processing and, at
              the same time, there will be no other legal ground for their
              processing (this only applies in the cases where we process
              personal data on the basis of your consent); * If you object and
              there are no overriding legitimate grounds for the processing, or
              if you object to the processing for direct marketing purposes; or
              * If your personal data are processed unlawfully. We will not be
              able to act on the request for the erasure of personal data if
              their processing is necessary for exercising the right of freedom
              of expression and information, for compliance with any of our
              legal obligations, for the performance of a task carried out in
              the public interest, for the establishment, exercise, or defence
              of our legal claims, or for other reasons provided for by law. *
              Right to restriction of processing In cases stated in article 18
              of the GDRP, you have the right to obtain from us restriction of
              processing of your personal data for a certain period. * Right to
              data portability and to the provision of data in a
              machine-readable format In the case of automated processing based
              on your consent or performance of the contract, you have the right
              to receive the data in a structured, commonly used and
              machine-readable format and to have them transmitted by us to
              another personal data controller. * Right to object If we process
              personal data on the basis of our legitimate interest, you have
              the right to object to such processing. If you file such an
              objection, we will not be able to process your personal data
              unless we demonstrate compelling legitimate grounds for the
              processing, which override your interests or rights and freedoms,
              or for the establishment, exercise or defence of our legal claims.
              In case we process your personal data for marketing purposes about
              our products and services, we will terminate the processing
              without undue delay upon receipt of the objection. In such a case,
              we will no longer be able to send you offers of our products and
              services. * Right to withdraw consent If processing is based on
              your consent, you have the right to withdraw that consent at any
              time. Withdrawal of consent does not affect the lawfulness of
              processing based on the consent given before its withdrawal. *
              Right not to be the subject of automated decision-making Except
              where processing is necessary for entering into, or performance
              of, a contract, where this is permitted by applicable law, or
              based on your express consent, you have the right not to be the
              subject of any decision which is based solely on automated
              processing, including profiling, which produces legal effects
              concerning you or similarly affects you to a significant extent.
            </p>
          </section>
        </div>
        <div className="xl:px-[9rem] 2xl:px-[12rem] px-[2rem]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
