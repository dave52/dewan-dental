// import { graphql, useStaticQuery } from 'gatsby';
// import React from 'react';
// import Img from 'gatsby-image';
// import styled from 'styled-components';

// const TestimonialsPageStyles = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 3rem;
//   list-style-type: none;

//   li {
//     padding: 2rem;
//     background: #fff;
//     border: 3px solid var(--cream);
//     border-radius: 2rem;
//   }

//   h2 {
//     margin: 0;
//   }

//   h3 {
//     margin: 0 0 2rem;
//     line-height: 1;
//   }

//   .bio {
//     padding: 0 2rem;
//   }

//   .bio p:first-of-type {
//     margin-top: 0;
//   }

//   .photo {
//     width: 100%;
//     max-width: 20rem;
//     flex-shrink: 0;
//   }

//   .is-hidden {
//     display: none;
//   }
// `;

// export default function TestimonialsPage() {
//   const { testimonials } = useStaticQuery(graphql`
//     query {
//       testimonials: allSanityTestimonials {
//         nodes {
//           quote
//           review
//           name
//         }
//       }
//     }
//   `);
//   return (
//     <TestimonialsPageStyles>
//       {console.log(testimonials.nodes)}
//       {testimonials.nodes.map((testimonial, index) => (
//         <li className="font-color-blue" key={`${testimonial.name}-${index}`}>
//           <h2 className="font-size-20 font-serif">{testimonial.quote}</h2>
//           <p className="font-size-14 font-weight-medium font-uppercase font-spacing-100">
//             {testimonial.review}
//           </p>
//           <h3>&em; {testimonial.name}</h3>
//         </li>
//       ))}
//     </TestimonialsPageStyles>
//   );
// }
