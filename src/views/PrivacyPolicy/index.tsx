import Header from '../../components/Header'
import { AppContent, AppContentInner, AppDiv } from './styles'

export default function PrivacyPolicy() {
  return (
    <AppDiv>
      <Header title={'Leben in Deutschland App - Privacy Policy'} />
      <AppContent>
        <AppContentInner>
          <p>Last updated: April 10, 2024</p>
          <p>
            This Privacy Policy describes our policies and procedures on the
            collection, use and disclosure of your information when you use the
            Service and tells you about your privacy rights and how the law
            protects You.
          </p>
          <h2>Personal Data</h2>
          <p>We do not collect any personal data.</p>
          <h2>Usage Data</h2>
          <p>We do not collect any usage data.</p>
          <h2>Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, Please contact:
            jameshartill@gmail.com
          </p>
        </AppContentInner>
      </AppContent>
    </AppDiv>
  )
}
