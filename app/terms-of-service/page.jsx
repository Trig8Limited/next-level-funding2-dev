'use client'
import React from "react";
import { Container } from "@mui/material";
import Footer from "../components/Footer";
import IndexPage from "../components/IndexPage";
import { useTheme } from "../context/ThemeContext";

const TermsOfService = () => {
  const { theme } = useTheme();
  return (
    <div>
        <IndexPage>
          <title>Terms Of Service -- NextLevelFunding</title>
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
      <main className={`${theme === 'light' ? "body-bg text-white" : "bg-white text-black"} w-full  pt-[4rem]  2xl:h-[40vh] h-full`}>
        <div className="grid items-center justify-center pb-0 pt-[5rem]">
          <p className="space-grotesk font-bold text-[3rem] text-center">
            Terms of Service
          </p>
        </div>
        <div className={`${theme === 'light' ? "home-bg text-white" : "bg-white text-black"}  text-lg -mt-[2rem] pb-[0.3rem] pt-20`}>
          <div className="xl:px-[9rem] 2xl:px-[12rem] px-[2rem]">
            <div className="">
              <p className="lexend bont-bold">
                NextLevelFunding offers this website, including all information,
                tools, and services available from this site to you, the user,
                conditional to your acceptance of all terms, conditions,
                policies, and notices stated here.
              </p>
            </div>
            <section className=" font-extralight lexend py-5">
              By using our site and/or purchasing something from us, you engage
              in our “Service” and agree to be bound by the following terms and
              conditions (“Terms of Service”, “Terms”). These Terms of Service
              apply to all users of the site, including without limitation users
              who are browsers, vendors, customers, merchants, and/ or
              contributors of content. Please read these Terms of Service
              carefully before accessing or using our website. By accessing or
              using any part of the site, you agree to be bound by these Terms
              of Service. If you do not agree to all the terms and conditions of
              this agreement, then you may not access the website or use any
              services. If these Terms of Service are considered an offer,
              acceptance is expressly limited to these Terms of Service.
            </section>
            <section className="font-extralight lexend py-5">
              The Services are only intended for persons over the age of 18
              residing in the country for which the Services are available. By
              registering on the Website, you confirm that you are over 18 years
              of age. If you are under 18 years of age, you may not use the
              Services. You undertake to access the Services solely from one of
              the countries for which the Services are available. You
              acknowledge that your access to and use of the Services may be
              restricted or prohibited by law in some countries, and you
              undertake to only access and use the Services in accordance with
              applicable laws.
            </section>
            <section className="font-extralight lexend py-5">
              Any new features or tools which are added to the current store
              (under provided accounts section) shall also be subject to the
              Terms of Service. You can review the most current version of the
              Terms of Service at any time on this page. We reserve the right to
              update, change or replace any part of these Terms of Service by
              posting updates and/or changes to our website. It is your
              responsibility to check this page periodically for changes. Your
              continued use of or access to the website following the posting of
              any changes constitutes acceptance of those changes.
            </section>
            <section className="lexend py-5">
              NONE OF THE SERVICES PROVIDED TO YOU BY THE PROVIDER CAN BE
              CONSIDERED INVESTMENT SERVICES IN ACCORDANCE WITH APPLICABLE LAWS.
              THE PROVIDER DOES NOT GIVE OR PROVIDE TO YOU ANY GUIDANCE,
              INSTRUCTIONS, OR INFORMATION ABOUT HOW OR IN WHICH MANNER YOU
              SHOULD PERFORM TRANSACTIONS WHEN USING THE SERVICES OR OTHERWISE,
              OR ANY OTHER SIMILAR INFORMATION ABOUT THE INVESTMENT TOOLS
              TRADED, NOR DOES THE PROVIDER ACCEPT ANY SUCH GUIDANCE,
              INSTRUCTIONS, OR INFORMATION FROM YOU. NONE OF THE SERVICES
              CONSTITUTE INVESTMENT ADVICE OR RECOMMENDATIONS. NO EMPLOYEES,
              STAFF, OR REPRESENTATIVES OF THE PROVIDER ARE AUTHORIZED TO
              PROVIDE INVESTMENT ADVICE OR RECOMMENDATIONS. SHOULD ANY
              INFORMATION OR STATEMENT OF ANY EMPLOYEE, STAFF, OR
              REPRESENTATIVES OF THE PROVIDER BE INTERPRETED AS INVESTMENT
              ADVICE OR RECOMMENDATIONS, THE PROVIDER EXPLICITLY DISCLAIMS THAT
              THE SAME IS INVESTMENT ADVICE OR RECOMMENDATIONS AND SHALL NOT BE
              RESPONSIBLE FOR THEM.
            </section>
            <section className="font-extralight lexend py-5">
              We may grant access to third parties to our website in order to
              troubleshoot and/or maintain website, database or infrastructure
              related issues. These access are monitored and removed after scope
              of work is performed.
            </section>
            <section className="font-extralight lexend">
              <h3 className="font-bold">
                ALL PAYMENTS ARE FINAL AND FOR EVALUATION PURPOSES ONLY.
              </h3>
              <p>
                The registration fees are paid for allowing you to access the
                Nextlevelfunding platform, models and services. The Customer is
                not entitled to a refund of the registration fees if the service
                has been started (i.e. started trading on our platform) and/or
                the customer did not successfully complete the Evaluation. No
                refund applies to all models that we offer unless you have
                successfully completed the evaluation and made it to your first
                payout on a live account.
              </p>
            </section>
            <section className="font-extralight lexend py-5">
              <h3 className="font-bold">
                Section 1 – Online Registration Terms
              </h3>
              <p>
                By agreeing to these Terms of Service, you represent that you
                are at least the age of majority in your state or province of
                residence, or that you are the age of majority in your state or
                province of residence and you have given us your consent to
                allow any of your minor dependents to use this site. You may not
                use our services for any illegal or unauthorized purpose nor may
                you, in the use of the Service, violate any laws in your
                jurisdiction (including but not limited to copyright laws). A
                breach or violation of any of the Terms will result in an
                immediate termination of your Services.
              </p>
            </section>
            <section className="font-extralight lexend py-5">
              <h3 className="font-bold">Section 2 – General Conditions</h3>
              <p>
                We reserve the right to refuse service to anyone for any reason
                at any time. You understand that your content (not including
                credit card information), may be transferred unencrypted and
                involve (a) transmissions over various networks; and (b) changes
                to conform and adapt to technical requirements of connecting
                networks or devices. Credit card information is always encrypted
                during transfer over networks. You agree not to reproduce,
                duplicate, copy, sell, resell or exploit any portion of the
                Service, use of the Service, or access to the Service or any
                contact on the website through which the service is provided,
                without express written permission by us. The headings used in
                this agreement are included for convenience only and will not
                limit or otherwise affect these Terms.
              </p>
            </section>
            <section className="font-extralight lexend py-5">
              <h3 className="font-bold">
                Section 3 – Accuracy, Completeness, and Timeliness of
                Information
              </h3>
              <p>
                We make every effort to ensure that the information we provide
                is accurate, however the information is also supplied by third
                parties and we are not responsible if information made available
                on this site is not accurate, complete or current. The material
                on this site is provided for general information only and should
                not be relied upon or used as the sole basis for making
                decisions without consulting primary, more accurate, more
                complete or more timely sources of information. Any reliance on
                the material on this site is at your own risk. This site may
                contain certain historical information. Historical information,
                necessarily, is not current and is provided for your reference
                only. We reserve the right to modify the contents of this site
                at any time, but we have no obligation to update any information
                on our site. You agree that it is your responsibility to monitor
                changes to our site.
              </p>
            </section>

            <section className="font-extralight lexend py-5">
              <h3 className="font-bold">
                Section 4 – Modifications to the Service and Prices
              </h3>
              <p>
                Prices for our products are subject to change without notice. We
                reserve the right at any time to modify or discontinue the
                Service (accounts provided) (or any part or content thereof)
                without notice at any time. We shall not be liable to you or to
                any third-party for any modification, price change, suspension
                or discontinuance of the Service.
              </p>
            </section>
            <section className="font-extralight lexend py-5">
              <h3 className="font-bold">
                Section 5 – Accuracy of Billing and Account Information
              </h3>
              <p>
                We reserve the right to refuse any order you place with us. We
                may, in our sole discretion, limit or cancel quantities
                purchased per person, per household or per order. These
                restrictions may include orders placed by or under the same
                customer account, the same credit card, and/or orders that use
                the same billing and/or shipping address. In the event that we
                make a change to or cancel an order, we may attempt to notify
                you by contacting the e-mail and/or billing address/phone number
                provided at the time the order was made. We reserve the right to
                limit or prohibit orders that, in our sole judgment, appear to
                be placed by dealers, resellers or un-authorized distributors.
                You agree to provide current, complete, and accurate purchase
                and account information for all purchases made on our website .
                You agree to promptly update your account and other information
                if needed .
              </p>
            </section>
            <section className="font-extralight lexend py-5">
              <h3 className="font-bold">Section 6 – Third-party Links</h3>
              <p>
                Certain content, products and services available via our Service
                may include materials from third-parties. Third-party links on
                this site may direct you to third-party websites that are not
                affiliated with us. We are not responsible for examining or
                evaluating the content or accuracy and we do not warrant and
                will not have any liability or responsibility for any
                third-party materials or websites, or for any other materials,
                products, or services of third-parties. We are not liable for
                any harm or damages related to the purchase or use of goods,
                services, resources, content, or any other transactions made in
                connection with any third-party websites. Please review
                carefully the third-party’s policies and practices and make sure
                you understand them before you engage in any transaction.
                Complaints, claims, concerns, or questions regarding third-party
                products should be directed to the third-party.
              </p>
            </section>
            <section className="font-extralight lexend py-5">
              <h3 className="font-bold">
                Section 7– User Comments, Feedback and Other Submissions
              </h3>
              <p>
                If, at our request, you send certain specific submissions (for
                example contest entries) or without a request from us you send
                creative ideas, suggestions, proposals, plans, or other
                materials, whether online, by email, by postal mail, or
                otherwise (collectively, ‘comments’), you agree that we may, at
                any time, without restriction, edit, copy, publish, distribute,
                translate and otherwise use in any medium any comments that you
                forward to us. We are and shall be under no obligation (1) to
                maintain any comments in confidence; (2) to pay compensation for
                any comments; or (3) to respond to any comments. We may, but
                have no obligation to, monitor, edit or remove content that we
                determine in our sole discretion are unlawful, offensive,
                threatening, libelous, defamatory, pornographic, obscene or
                otherwise objectionable or violates any party’s intellectual
                property or these Terms of Service. You agree that your comments
                will not violate any right of any third-party, including
                copyright, trademark, privacy, personality or other personal or
                proprietary right. You further agree that your comments will not
                contain libelous or otherwise unlawful, abusive or obscene
                material, or contain any computer virus or other malware that
                could in any way affect the operation of the Service or any
                related website. You may not use a false e-mail address, pretend
                to be someone other than yourself, or otherwise mislead us or
                third-parties as to the origin of any comments. You are solely
                responsible for any comments you make and their accuracy. We
                take no responsibility and assume no liability for any comments
                posted by you or any third-party.
              </p>
            </section>
            <section className="font-extralight lexend py-5">
              <h3 className="font-bold">Section 8– Personal Information</h3>
              <p>
                Your submission of personal information through the store is
                governed by our Privacy Policy.
              </p>
            </section>
            <section className="font-extralight lexend py-5">
              <h3 className="font-bold">
                Section 9 – Errors, Inaccuracies and Omissions
              </h3>
              <p>
                Occasionally there may be information on our site or in the
                Service that contains typographical errors, inaccuracies or
                omissions that may relate to product descriptions, pricing,
                promotions, offers, product shipping charges, transit times and
                availability. We reserve the right to correct any errors,
                inaccuracies or omissions, and to change or update information
                or cancel orders if any information in the Service or on any
                related website is inaccurate at any time without prior notice
                (including after you have submitted your order). We undertake no
                obligation to update, amend or clarify information in the
                Service or on any related website, including without limitation,
                pricing information, except as required by law. No specified
                update or refresh date applied in the Service or on any related
                website, should be taken to indicate that all information in the
                Service or on any related website has been modified or updated.
              </p>
            </section>
            <section className="font-extralight lexend py-5">
              <h3 className="font-bold">Section 10– Prohibited Uses</h3>
              <p>
                In addition to other prohibitions as set forth in the Terms of
                Service, you are prohibited from using the site or its content:
                (a) for any unlawful purpose; (b) to solicit others to perform
                or participate in any unlawful acts; (c) to violate any
                international, federal, provincial or state regulations, rules,
                laws, or local ordinances; (d) to infringe upon or violate our
                intellectual property rights or the intellectual property rights
                of others; (e) to harass, abuse, insult, harm, defame, slander,
                disparage, intimidate, or discriminate based on gender, sexual
                orientation, religion, ethnicity, race, age, national origin, or
                disability; (f) to submit false or misleading information; (g)
                to upload or transmit viruses or any other type of malicious
                code that will or may be used in any way that will affect the
                functionality or operation of the Service or of any related
                website, other websites, or the Internet; (h) to collect or
                track the personal information of others; (i) to spam, phish,
                pharm, pretext, spider, crawl, or scrape; (j) for any obscene or
                immoral purpose; or (k) to interfere with or circumvent the
                security features of the Service or any related website, other
                websites, or the Internet. We reserve the right to terminate
                your use of the Service or any related website for violating any
                of the prohibited uses.
              </p>
            </section>
            <section className="font-extralight lexend py-5">
              <h3 className="font-bold">
                Section 11– Disclaimer of Warranties; Limitation of Liability
              </h3>
              <p>
                We do not guarantee, represent or warrant that your use of our
                service will be uninterrupted, timely, secure or error-free. We
                do not warrant that the results that may be obtained from the
                use of the service will be accurate or reliable. You agree that
                from time to time we may remove the service for indefinite
                periods of time or cancel the service at any time, without
                notice to you. You expressly agree that your use of, or
                inability to use, the service is at your sole risk. The service
                and all products and services delivered to you through the
                service are (except as expressly stated by us) provided ‘as is’
                and ‘as available’ for your use, without any representation,
                warranties or conditions of any kind, either express or implied,
                including all implied warranties or conditions of
                merchantability, merchantable quality, fitness for a particular
                purpose, durability, title, and non-infringement. In no case
                shall Nextlevelfunding, our directors, officers, employees,
                affiliates, agents, contractors, interns, suppliers, service
                providers or licensors be liable for any injury, loss, claim, or
                any direct, indirect, incidental, punitive, special, or
                consequential damages of any kind, including, without limitation
                lost profits, lost revenue, lost savings, loss of data,
                replacement costs, or any similar damages, whether based in
                contract, tort (including negligence), strict liability or
                otherwise, arising from your use of any of the service or any
                products procured using the service, or for any other claim
                related in any way to your use of the service or any product,
                including, but not limited to, any errors or omissions in any
                content, or any loss or damage of any kind incurred as a result
                of the use of the service or any content (or product) posted,
                transmitted, or otherwise made available via the service, even
                if advised of their possibility. Because some states or
                jurisdictions do not allow the exclusion or the limitation of
                liability for consequential or incidental damages, in such
                states or jurisdictions, our liability shall be limited to the
                maximum extent permitted by law.
              </p>
            </section>
            <section className="font-extralight lexend py-5">
              <h3 className="font-bold">Section 13– Termination</h3>
              <p>
                The obligations and liabilities of the parties incurred prior to
                the termination date shall survive the termination of this
                agreement for all purposes. These Terms of Service are effective
                unless and until terminated by either you or us. You may
                terminate these Terms of Service at any time by notifying us
                that you no longer wish to use our Services, or when you cease
                using our site. If in our sole judgment you fail, or we suspect
                that you have failed, to comply with any term or provision of
                these Terms of Service, we also may terminate this agreement at
                any time without notice and you will remain liable for all
                amounts due up to and including the date of termination; and/or
                accordingly may deny you access to our Services (or any part
                thereof).
              </p>
            </section>
            <section className="font-extralight lexend py-5">
              <h3 className="font-bold">Section 14– Disputes</h3>
              <p>
                Once you dispute an order payment it has an adverse impact on
                the company, financially, and causes a damage to our company
                profile in the eyes of the Payment Gateway. Hence, according to
                our policy, we will be banning accounts (directly involved in
                the dispute/against the same order number) of traders who
                dispute their payments and moving forward we will not entertain
                any requests to unban the accounts(s). The user who is involved
                in a disputed transaction in the normal course of the business,
                where there has not been any problem on our side, such users
                wont be eligible for any futher accounts with Nextlevelfunding
                and all their other active accounts, with current balance over
                and above the initial balance, will be refunded as well. This
                policy is in place to protect Nextlevelfunding from any
                financial adversity as well as to ensure the long term viability
                of the brand name.
              </p>
            </section>
            <section className="font-extralight lexend py-5">
              <h3 className="font-bold">Section 15– Entire Agreement</h3>
              <p>
                The failure of us to exercise or enforce any right or provision
                of these Terms of Service shall not constitute a waiver of such
                right or provision. These Terms of Service and any policies or
                operating rules posted by us on this site or in respect to The
                Service constitutes the entire agreement and understanding
                between you and us and govern your use of the Service,
                superseding any prior or contemporaneous agreements,
                communications and proposals, whether oral or written, between
                you and us (including, but not limited to, any prior versions of
                the Terms of Service). Any ambiguities in the interpretation of
                these Terms of Service shall not be construed against the
                drafting party.
              </p>
            </section>
            <section className="font-extralight lexend py-5">
              <h3 className="font-bold">Section 16– Governing Law</h3>
              <p>
                These Terms of Service and any separate agreements whereby we
                provide you Services shall be governed by and construed in
                accordance with the law user’s legal jurisdicton.
                Nextlevelfunding (the “Company”) is incorporated under the laws
                of Ireland. You have provided services to the Company, including
                trading execution services, pursuant to an Independent
                Contractor Agreement (the “Agreement”) entered into with the
                Company. In providing these services, and in accordance with the
                terms of the Agreement, the Company has operated under the
                understanding that you have and are continuing to act in
                compliance with irish securities laws, as they may apply to you.
                If you have any questions concerning any obligations that may
                apply to you, including under Irish securities law, we would
                encourage you to consult legal counsel.
              </p>
            </section>
            <section className="font-extralight lexend py-5">
              <h3 className="font-bold">
                Section 17– Changes to Terms of Service
              </h3>
              <p>
                You can review the most current version of the Terms of Service
                at any time at this page.We reserve the right, at our sole
                discretion, to update, change or replace any part of these Terms
                of Service by posting updates and changes to our website. It is
                your responsibility to check our website periodically for
                changes. Your continued use of or access to our website or the
                Service following the posting of any changes to these Terms of
                Service constitutes acceptance of those changes.
              </p>
            </section>
          </div>
          <div className="xl:px-[9rem] 2xl:px-[12rem] px-[2rem]">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
