import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../templates/Layout';
import PageFullWidth from '../templates/PageFullWidth';

const CovidNineteenPolicyPageStyles = styled.div``;

export default function CovidNineteenPolicyPage() {
  return (
    <Layout>
      <PageFullWidth>
        <CovidNineteenPolicyPageStyles>
          <h1>Covid 19 Policy</h1>
          <h2>Our commitment to your safety</h2>
          <p>
            Infection control has always been a top priority for our practice
            and you may have seen this during your visits to our office. Our
            infection control processes are made so that when you receive care,
            it’s both safe and comfortable. We want to tell you about the
            infection control procedures we follow in our practice to keep
            patients and staff safe. You may see some changes when it is time
            for your next appointment. We made these changes to help protect our
            patients and staff. For example: • Our office will communicate with
            you beforehand to ask some screening questions. You’ll be asked
            those same questions again when you are in the office. We ask that
            if you are feeling feverish or have flu-like symptoms that you
            reschedule your appointment out of the safety of our patients and
            staff. We will also be taking your temperature at the start of your
            appointment. • We have hand sanitizer that we will ask you to use
            when you enter the office. You will also find some in the reception
            area and other places in the office for you to use as needed. We
            also ask that you wear a mask upon entering and exiting the office.
            • You may see that our waiting room will no longer offer magazines,
            children’s toys and so forth, since those items are difficult to
            clean and disinfect. • Appointments will be managed to allow for
            social distancing between patients. That might mean that you’re
            offered fewer options for scheduling your appointment. • We will do
            our best to allow greater time between patients to reduce waiting
            times for you. To reduce the number of patients in the reception
            area at any one time, you will be asked to arrive promptly at your
            appointment time and no earlier.
            <p className="font-weight-semibold">The DeWan Dental Team</p>
          </p>
        </CovidNineteenPolicyPageStyles>
      </PageFullWidth>
    </Layout>
  );
}
