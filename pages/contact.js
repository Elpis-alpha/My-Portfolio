import HeadTag from '../source/components/general/HeadTag'

import ContactPageX from '../source/components/contact/ContactPage'


const ContactPage = ({ token }) => {

  return (


    <>

      <HeadTag />

      <ContactPageX token={token} />

    </>

  )

}

export async function getServerSideProps() {

  console.log();

  return { props: { token: "process.env.NEXT_PUBLIC_BACKEND_TOKEN" } }

}

export default ContactPage
