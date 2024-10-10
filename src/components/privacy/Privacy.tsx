import React from 'react';
import vanVector from '@/assets/vanVector.webp';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Privacy: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.4,
  });

  return (
    <div>
      <div ref={ref} className=" min-[1800px]:w-[1500px] mx-auto w-[80%] max-[500px]:w-[90%] mt-[80px]">
        <section >
          <p className="[&:not(:first-child)]:mt-6 font-montserrat text-offGray leading-7">
            RxZippy Ltd, having its registered office at the United states of America, (“Rxzippy” or “We”) would like to be transparent when
            it comes to processing of personal data and privacy of our customers, website
            visitors, and every individual (“You”) whose personal data and information are
            subject to processing under the terms of the PROTECTION OF PERSONAL
            INFORMATION ACT (POPI) and REGULATION (EU) 2016/679 OF THE EUROPEAN PARLIAMENT
            AND OF THE COUNCIL (GDPR). To achieve this goal. We are publishing this
            Privacy Policy with the sole purpose of informing You about following the
            topics:{' '}
          </p>
          <ul className="flex flex-col gap-[20px] mt-[40px] mb-[50px] text-offGray font-montserrat list-disc list-inside text-lg">
            <li className="">Processing of Personal Data </li>
            <li>General Rules </li>
            <li>Data Confidentiality </li>
            <li>Data Subject's Rights</li>
          </ul>
        </section>
        <section
          style={{
            backgroundImage: `url(${vanVector})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <h2 className="scroll-m-20 text-center text-3xl font-extrabold tracking-tight first:mt-0 my-[20px]">
            PRIVACY POLICY{' '}
          </h2>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Processing of Personal Data
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: inView ? 200 : 0 }}
              transition={{ duration: 0.7 }}
              className=" h-[1px] mt-2 w-[300px]max-[400px]:w-[100px] bg-primary"
            ></motion.span>
          </h3>
          <p className="leading-7 text-offGray [&:not(:first-child)]:mt-6 font-montserrat ">
            All services incorporated in this website and other websites under the control
            of Rxzippy are governed by this Privacy Policy, including those which are
            governed by specific Terms of Use with data processing rules.{' '}
          </p>
          <br />
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-offGray font-montserrat">
            Generally, You may use our websites for information purposes without giving
            personal information and informing Rxzippy who you are. On the other hand,
            some of our services need to collect more information:{' '}
          </p>
          <br />
          <ul className="flex flex-col gap-[20px] mb-[50px] font-montserrat text-offGray list-disc list-inside max-[1800px]:text-md">
            <li>
              Rxzippy may collect personal information for the purposes of direct
              communication with You in order to respond to your questions, and fulfill
              your requests. If You send us product orders, service requirements, other
              requests or if you upload any materials to our website, we may have to
              contact you in order to gain additional information necessary for processing
              or in order to fulfill your order, request or requirement. For this purpose,
              as well as for the purpose of requested performance of services, we need to
              process your details provided via web forms, email or applications.
            </li>
            <li>
              If You are an End User of our products or services, the processing of your
              data is covered by the specific End User License Agreement or Terms of Use
              and Privacy Policy related to that product or service.{' '}
            </li>
            <li>
              If You agree with processing of your data for the purposes of marketing
              communication, We may use your details to administer marketing communication
              until You withdraw your consent.{' '}
            </li>
            <li>
              Contact information and data contained in your support requests are required
              for service of technical or other support nature provided by Rxzippy. Based
              on the channel You choose to contact us, We may collect your email address,
              phone number, product details and description of your support case. You may
              be asked to provide us with other information to facilitate service of
              support such as generated log files or dumps. The data from support may only
              be used for the provision of support service and for enhancing customer
              experience while providing support.
            </li>
            <li>
              Customer feedback, answer or request, may be provided by You via our web
              forms. For the purpose of follow-up, your contact details including email
              address or other data may be requested based on the nature or purpose of our
              communication. Data storage periods may differ based on the nature or
              purpose of communication explicitly in compliance with this Privacy Policy.
            </li>
            <li>
              Rxzippy may collect information about your computer using cookies or similar
              methods (see cookie policy below). This is statistical data about our users’
              browsing actions and patterns, and does not identify any individual. They
              help us to improve our site and to deliver a better and more personalized
              service. You may refuse to accept cookies by activating the setting on your
              browser which allows you to refuse the setting of cookies. However, if you
              select this setting you may be unable to access certain parts of the
              website. Unless you have adjusted your browser setting so that it will
              refuse cookies, our system will issue cookies when you log on to our site.
            </li>
            <li>
              We are doing our best while helping you to enjoy safer technology. Your
              input is very valuable for us and there are various channels available to
              provide us with samples of malicious or suspicious software. Samples and its
              metadata will be processed and stored based on public interest as well as
              legitimate interest of Rxzippy, which is cybersecurity.
            </li>
          </ul>
        </section>
        <section
          style={{
            backgroundImage: `url(${vanVector})`,
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h3 className="scroll-m-20 text-2xl text-offGray font-semibold tracking-tight">
            General Rules{' '}
          </h3>
          <p className="leading-7 text-offGray [&:not(:first-child)]:mt-6 font-montserrat ">
            There are only a few legal bases for data processing which We use according to
            the GDPR and POPI legislative frameworks. Our activities are mainly covered by
          </p>
          <br />
          <ul className="flex flex-col gap-[20px] mb-[30px] font-montserrat text-offGray list-disc list-inside max-[1800px]:text-md">
            <li>
              Contractual necessity legal base is applicable when it comes to our products
              and services provided under End User License Agreements or Terms of Use.
            </li>
            <li>
              Legitimate interest legal base or even public interest concerning
              cybersecurity entitling us to collect samples and service data for analysis,
              to provide You with even better protection, support and experience We can
              offer. Even marketing is recognized by GDPR and POPI as a legitimate
              interest, therefore we rely on this concept when it comes to cookies used by
              our web sites and communication with our customers.
            </li>
            <li>Consent, if required by legislation.</li>
            <li>
              Compliance with legal obligation e.g. stipulating requirements for
              electronic communication, invoicing or billing.
            </li>
          </ul>
          <p className="leading-7 text-offGray [&:not(:first-child)]:mt-6 font-montserrat ">
            The goal of this Privacy Policy is to provide a general overview of legal
            basis and data processing principles of Rxzippy. If You are looking for more
            information concerning data collection facilitated by a particular Rxzippy
            product or service, visit our dedicated websites.
          </p>
          <br />
        </section>
        <section>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Data Confidentiality{' '}
          </h3>
          <p className="leading-7 text-offGray [&:not(:first-child)]:mt-6 font-montserrat ">
            Rxzippy is a company operating worldwide. Based on your location and service
            You choose to use, Rxzippy might be required to transfer your data to a
            country that is not covered by GDPR or POPI. Even in such cases, every
            transfer of information is subject to regulation of data protection
            legislation and takes place only if required.{' '}
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6 font-montserrat ">
            It is our intention to prevent data from being stored longer than necessary
            while providing Rxzippy products and services.{' '}
          </p>
          <p className="leading-7 text-offGray [&:not(:first-child)]:mt-6 font-montserrat ">
            Rxzippy implements appropriate technical and organizational measures to ensure
            a level of security which is appropriate to potential risks. We are doing our
            best to ensure the ongoing confidentiality, integrity, availability and
            resilience of processing systems and services. However, in case of data breach
            resulting in a risk to your rights and freedoms, We are ready to notify the
            supervisory authority as well as the data subjects.{' '}
          </p>
          <br />
        </section>
        <section className='mb-[50px]' >
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Data Subject's Rights{' '}
          </h3>
          <p className="leading-7 text-offGray [&:not(:first-child)]:mt-6 font-montserrat ">
            Rxzippy is subject to regulation of South African and English laws and We
            consider ourselves bound by data protection legislation binding member states
            of European Union. Every Data subject is therefore entitled to the following
            rights:{' '}
          </p>
          <ul className="flex flex-col gap-[20px] mt-[30px] font-montserrat list-disc list-inside max-[1800px]:text-md">
            <li>right to request access to your personal data from Rxzippy, </li>
            <li>
              right to rectification of your personal data if inaccurate (You also have
              the right to have incomplete personal data amended),{' '}
            </li>
            <li>right to request erasure of your personal data, </li>
            <li>right to request restriction processing of your personal data, </li>
            <li>right to object to processing as well as </li>
            <li>right to data portability. </li>
            <p className="leading-7 text-offGray [&:not(:first-child)]:mt-6 font-montserrat ">
              We believe that all information we process is valuable and necessary for
              legitimate purposes while providing services and products to our customers,
              and worth protecting with the highest priority.{' '}
            </p>
            <p className="leading-7 text-offGray [&:not(:first-child)]:mt-6 font-montserrat">
              If You would like to exercise your right as a data subject or You have a
              question concerning personal data protection or protection of privacy, send
              us a message at:{' '}
              <span className="text-variant scroll-m-20 font-semibold font-hkGrotesk text-[20px] max-[600px]:text-[18px] first:mt-0 ">
                {' '}
                <a target="_blank" rel="noreferrer" href="mailto:sales@rxzippy.com">
                  {' '}
                  sales@rxzippy.com
                </a>{' '}
              </span>{' '}
            </p>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
