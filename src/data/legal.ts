/**
 * Legal document content (verbatim) for /privacy-policy and /terms.
 * Rendered by src/components/legal/LegalDoc.astro.
 */
export type LegalBlock = {
  p?: string;
  list?: string[];
  h?: string;
  n?: string;        // clause/sub number, e.g. "2.1" or "a)"
  indent?: 1;        // nested list
  ordered?: 1;       // numbered list markers
};
export type LegalSection = {
  t: string;
  lab?: string;      // TOC label, e.g. "Clause 02"
  short?: string;    // shorter TOC title
  group?: string;    // group heading shown above the section
  b: LegalBlock[];
};
export type LegalDoc = {
  title: string;
  t1: string;
  t2: string;
  lead: string;
  other: string;
  otherHref: string;
  description: string;
  updated: string;
  intro: string[];
  secs: LegalSection[];
};

export const privacy: LegalDoc = {
  title: 'Privacy Policy',
  t1: 'Privacy',
  t2: 'Policy',
  lead: 'How PriceLeap collects, uses, and protects information across our pricing infrastructure platform.',
  other: 'Terms of Service',
  otherHref: '/terms',
  description: 'How PriceLeap collects, uses, and protects information.',
  updated: 'Last updated: 2026',
  intro: [
    'At PriceLeap (a product of Aimleap Pvt Ltd.), accessible from priceleap.ai, one of our main priorities is the privacy of our visitors and clients. This Privacy Policy document outlines the types of information collected and recorded by PriceLeap and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.',
    'This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collected on PriceLeap. This policy is not applicable to any information collected offline or via channels other than this website.',
  ],
  secs: [
    { t: 'Consent', b: [{ p: 'By using our website, you hereby consent to our Privacy Policy and agree to its terms.' }] },
    { t: 'Information We Collect', b: [
      { p: 'The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.' },
      { p: 'If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.' },
      { p: 'When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.' },
    ] },
    { t: 'How We Use Your Information', b: [
      { p: 'We use the information we collect in various ways, including to:' },
      { list: ['Provide, operate, and maintain our website', 'Improve, personalize, and expand our website', 'Understand and analyze how you use our website', 'Develop new products, services, features, and functionality', 'Communicate with you, either directly or through one of our partners, including for customer service, updates, and marketing', 'Send you emails', 'Find and prevent fraud'] },
    ] },
    { t: 'Data Collection Policy', b: [
      { p: 'At PriceLeap, we are committed to responsible data collection practices that prioritize user privacy and regulatory compliance. Our approach ensures transparency, security, and adherence to industry standards:' },
      { list: ['Publicly Available Data Only — We strictly collect data that is publicly accessible and do not engage in unauthorized data extraction.', 'No Login-Based Data Collection — As a core policy, we never collect data by logging into any platform.', 'GDPR Compliance — We fully align with GDPR regulations to safeguard user rights and data privacy.', 'Adherence to Website Protection Policies — We respect and comply with the data protection policies of all websites we interact with.', 'No PII Scraping or Impersonation — We do not extract personally identifiable information (PII) or engage in any form of impersonation.'] },
    ] },
    { t: 'Log Files', b: [{ p: 'PriceLeap follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking user movement on the website, and gathering demographic information.' }] },
    { t: 'Cookies and Web Beacons', b: [{ p: "Like any other website, PriceLeap uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information." }] },
    { t: 'Advertising Partners Privacy Policies', b: [
      { p: 'You may consult this list to find the Privacy Policy for each of the advertising partners of PriceLeap.' },
      { p: "Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons in their respective advertisements and links that appear on PriceLeap, which are sent directly to users' browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites you visit." },
      { p: 'Note that PriceLeap has no access to or control over these cookies that are used by third-party advertisers.' },
    ] },
    { t: 'Third Party Privacy Policies', b: [
      { p: "PriceLeap's Privacy Policy does not apply to other advertisers or websites. We advise you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options." },
      { p: "You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites." },
    ] },
    { t: 'CCPA Privacy Rights', b: [
      { p: 'Under the CCPA, among other rights, California consumers have the right to:' },
      { list: ["Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data collected.", 'Request that a business delete any personal data about the consumer that has been collected.', "Request that a business that sells a consumer's personal data not sell that personal data."] },
      { p: 'If you make a request, we have one month to respond. If you would like to exercise any of these rights, please contact us.' },
    ] },
    { t: 'GDPR Data Protection Rights', b: [
      { p: 'We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:' },
      { list: ['The right to access — You have the right to request copies of your personal data. We may charge you a small fee for this service.', 'The right to rectification — You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.', 'The right to erasure — You have the right to request that we erase your personal data, under certain conditions.', 'The right to restrict processing — You have the right to request that we restrict the processing of your personal data, under certain conditions.', 'The right to object to processing — You have the right to object to our processing of your personal data, under certain conditions.', 'The right to data portability — You have the right to request that we transfer the data we have collected to another organization, or directly to you, under certain conditions.'] },
      { p: 'If you make a request, we have one month to respond. If you would like to exercise any of these rights, please contact us.' },
    ] },
    { t: "Children's Information", b: [{ p: 'Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.' }] },
  ],
};

export const terms: LegalDoc = {
  title: 'Terms of Service',
  t1: 'Terms of',
  t2: 'Service',
  lead: 'The following terms govern the service agreement between PriceLeap (a product of Aimleap Pvt Ltd.) and its clients. By engaging PriceLeap, the client agrees to the terms and conditions set out below.',
  other: 'Privacy Policy',
  otherHref: '/privacy-policy',
  description: 'The terms governing the service agreement between PriceLeap and its clients.',
  updated: 'Last updated: 2026',
  intro: [],
  secs: [
    { lab: 'Preamble', t: 'Recitals', b: [
      { n: 'a)', p: 'PriceLeap provides its clients with outplacement or outsourcing services. This includes placement of remote contractors.' },
      { n: 'b)', p: 'PriceLeap has been asked or is being asked by the client to offer its services to the client for the placement of contractors.' },
      { n: 'c)', p: 'The services will be provided by PriceLeap to the client according to the terms and conditions of this service agreement.' },
    ] },
    { group: 'It Is Agreed As Follows', lab: 'Clause 01', t: 'Definitions & Interpretation', b: [{ p: 'Schedule 1 provides the definitions and interpretations for this service agreement.' }] },
    { lab: 'Clause 02', t: 'Agreement – Day To Day Operation', short: 'Day To Day Operation', b: [
      { n: '2.1', p: 'The terms and conditions on the PriceLeap website provide the procedure for day to day activities like request for service by the client, selecting the PriceLeap employee and perform other day to day activities with respect to this contract.' },
      { n: '2.2', p: 'It is acknowledged by the client and agreed upon that the nature of this agreement with PriceLeap does not establish any form of employment.' },
      { p: 'The liability for choosing the appropriate PriceLeap employee rests with the client. The hiring is done for independent contractors on the basis of applicable local guidelines. The PriceLeap employee does not have any authority to enter into contracts on behalf of the client. The agreement does not create any partnership between the client and the PriceLeap employee.' },
    ] },
    { lab: 'Clause 03', t: 'Duration', b: [{ n: '3.1', p: 'This agreement will be applicable on a month to month basis, will commence on the starting date as agreed upon. The agreement will continue until terminated in accordance with clause 12.' }] },
    { lab: 'Clause 04', t: 'Payment', b: [
      { n: '4.1', p: 'The time for payment to be made to PriceLeap is provided in schedule 1 and the requisite terms and conditions as on the PriceLeap website.' },
      { n: '4.2', p: 'The provisions provided in schedule 1 are a part of and operative under this contract.' },
    ] },
    { lab: 'Clause 05', t: 'No PriceLeap Liability', b: [
      { n: '5.1', p: 'In case of any loss, damage, costs or compensation (whether direct or indirect) to The Client, no liability shall be incurred by PriceLeap. The following cases are included:' },
      { indent: 1, list: ['Any delay in introduction of PriceLeap employees by PriceLeap.', 'The event of non-acceptance of an offer or an assignment by a PriceLeap employee.', 'Related to the performance of a PriceLeap employee.'] },
    ] },
    { lab: 'Clause 06', t: "The Client's Indemnity To PriceLeap", short: "Client's Indemnity", b: [
      { n: '6.1', p: 'With respect to the following cases of loss or claims the client has to pay indemnity to PriceLeap:' },
      { indent: 1, list: ['An injury to a PriceLeap employee while performing his/her duties for the client.', 'Property damage while performance of duties by a PriceLeap employee.'] },
      { n: '6.2', p: 'If there are any claims made by a PriceLeap employee with respect to his/her termination of services, the client has to indemnify PriceLeap for the same.' },
    ] },
    { lab: 'Clause 07', t: 'Restriction on Direct Hiring of PriceLeap Service Employees', short: 'Restriction on Direct Hiring', b: [
      { n: '7.1', p: 'The Client must pay to PriceLeap 10,000.00 USD for each PriceLeap employee who has been offered/hired by the client directly.' },
      { n: '7.2', p: 'When this contract is terminated, no PriceLeap employee who is performing an assignment for the client or has performed an assignment for the client in the last 16 months can be offered a contract or permanent employment by the client.' },
      { n: '7.3', p: "PriceLeap Employee's friends, family members, referrals and network cannot be offered work or assignments by PriceLeap clients without prior approval." },
      { n: '7.4', p: 'No information exchange related to payments and pricing between PriceLeap and PriceLeap employees shall be permitted.' },
    ] },
    { lab: 'Clause 08', t: 'Intellectual Property', b: [{ n: '8.1', p: 'All material prepared by the PriceLeap employee will be owned by the client and any intellectual property rights in any such work shall vest in the client.' }] },
    { lab: 'Clause 09', t: 'Privacy', b: [{ p: 'All parties agree that they will handle personal information in accordance with the privacy laws.' }] },
    { lab: 'Clause 10', t: 'Confidential Information', b: [{ n: '10.1', p: 'Subject to clause 10.2, the only information that is disclosed by any party is that which is required by the law.' }] },
    { lab: 'Clause 11', t: 'Warranties', b: [
      { p: 'Both parties represent and warrant to the other party that:' },
      { list: ['There are no actions, claims, proceedings or investigations pending or threatened against it or by it of which it is aware, and which may have a material effect on the subject matter of this contract.'] },
    ] },
    { lab: 'Clause 12', t: 'Termination', b: [
      { n: '12.1', p: 'A party ("the first party") may immediately (or with effect from any later date it may nominate) terminate if:' },
      { indent: 1, list: ['The second party breaches this contract and does not remedy such breach within 5 business days.', 'The other party becomes insolvent.'] },
      { n: '12.2', p: 'The client may appoint the PriceLeap employee on a trial basis. This is for a minimum of 1 hour and a maximum of 7 days. The client can terminate the PriceLeap employee at any time during the trial period.' },
      { n: '12.3', p: 'Subject to the client complying with the provisions set out in schedule 1, the client can terminate the full-time employees in the following manner:' },
      { indent: 1, list: ["For less than 6 months from his or her appointment, a period of 30 days' notice is required.", "For more than 6 months, a period of 45 days' notice is required."] },
      { n: '12.4', p: 'Upon termination:' },
      { indent: 1, list: ['The client will return all confidential information back to PriceLeap.'] },
    ] },
    { lab: 'Clause 13', t: 'Acceptance', b: [
      { p: "The client accepts the terms as set out within the terms and conditions on PriceLeap's website:" },
      { list: ['The client making a request for services; or', 'The client appointing PriceLeap to provide services to the client; or', 'The client selecting a PriceLeap employee; or', 'The client making a payment of any amounts listed within schedule 1, including but not limited to set up fees, monthly fees and/or any payment of PriceLeap invoices (whichever is the earliest); or', 'The client indicating its acceptance.'] },
    ] },
    { lab: 'Clause 14', t: 'Duty of Confidentiality', b: [
      { list: ['PriceLeap and the PriceLeap employee acknowledge that while working for the client, they may have access to confidential information of the client.', 'PriceLeap and the PriceLeap employee undertakes not to disclose, use this information to any third parties.'] },
    ] },
    { lab: 'Schedule 1', t: 'Fee Structure', short: 'Schedule 1 — Fee Structure', b: [
      { h: 'Regular Billing System' },
      { list: ['If the client selects and appoints a PriceLeap employee, the client must use the regular billing system.', 'The client must pay PriceLeap for the services in advance by using either of the following 2 options:'] },
      { indent: 1, ordered: 1, list: ['Prepaid payments', 'Regular monthly payments via credit card online payment, direct debit of credit cards and bank accounts, or electronic fund transfer.'] },
      { list: ['Each payment is to be made in advance or on an agreed fixed monthly date.', "The clients can make payments via electronic fund transfer (EFT) into PriceLeap's bank accounts.", "If there is any overtime payments due, the amount of overtime chargeable to the client will be included in the following month's invoice.", 'There is no refund provided on advance payment by the clients – unless otherwise specifically mentioned in the Work Order / SOW statement during contract sign-off. The general refund timeline is 30 days or based on mutual agreement.', 'There will be no refund provided for services already delivered by PriceLeap.'] },
      { h: 'Insufficient Funds' },
      { p: 'If:' },
      { list: ['The available balance falls below zero; or', 'The client does not pay on time under the prepaid payment option and/or the regular monthly payment option,'] },
      { p: 'PriceLeap is entitled to suspend the services of the PriceLeap employee for a period of 5 business days ("Suspension Period").' },
    ] },
  ],
};
