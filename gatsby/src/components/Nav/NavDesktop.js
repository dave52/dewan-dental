import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/dewan-logo-lines.svg';
import chevronIcon from '../../assets/images/chevron-black.svg';

// 68.75rem mobile -> desktop nav

const NavDesktopStyles = styled.nav`
  /* z-index: 5;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  position: sticky;
  top: 0;
  width: 100%;
  font-family: 'Karla';
  font-weight: 500;
  text-transform: uppercase;
  line-height: 0.9;
  letter-spacing: 0.1em; */
  grid-template-columns: 1fr auto 1fr;
  background: #fff;

  @media (min-width: 100rem) {
    // 1600px
    top: var(--frame-size);
  }

  .left,
  .right {
    display: flex;
    align-items: center;
    padding: 2.5rem 4rem;

    @media (min-width: 87.5rem) {
      // 1400px
      padding: 2.5rem 6rem;
    }

    a,
    button,
    div {
      font-size: 1.1rem;
      color: var(--black);
      text-decoration: none;
      cursor: pointer;
      /* position: relative; */
      display: block;

      @media (min-width: 87.5rem) {
        // 1400px
        font-size: 1.3rem;

        &:hover {
          color: var(--brown);
        }
      }

      &.parent-nav-item {
        &:before,
        &:after {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border: 1px solid rgba(255, 255, 255, 0);
          bottom: 0px;
          content: ' ';
          display: block;
          margin: 0.5rem auto;
          position: relative;
          transition: all 280ms ease-in-out;
          width: 0;
        }

        &:hover:after,
        &:hover:before {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-color: var(--brown);
          transition: width 350ms ease-in-out;
          width: 100%;
        }
      }

      &:hover > .child-nav,
      .child-nav.is-visible {
        display: flex;
        flex-direction: column;
        }
      }
    }

    .child-nav {
      display: none;
      position: absolute;
      margin: 0.9rem 0;
      padding: 0;
      background: #fff;
      box-shadow: 0px 1px 4px #000000bb;

      li {
        margin-left: 2.5rem;
        padding: 0.8rem 1.1rem 0.8rem 0;

        &.list-item-no-dot {
          list-style: none;
        }

        .grandchild-nav {
          display: none;
          position: relative;
          margin-left: -2.5rem;
          margin: 1rem 0 0 -2.5rem;
          padding-left: 1rem;
        }

        &:hover > .grandchild-nav,
        .grandchild-nav.is-visible {
          display: flex;
          flex-direction: column;
        }

        &:hover button img.chevron,
        button.expanded img.chevron {
          opacity: 0.9;
          transform: rotate(180deg);
        }

        a,
        button {
          display: flex;
          align-items: center;
          font-size: 1.2rem;
          color: var(--black);
          padding: 0;
          border: 0;
          background: 0;
          text-transform: uppercase;
          line-height: 0.9;
          letter-spacing: 0.1em;
          transition: transform 0.3s ease-out, opacity 0.3s ease;

          &:hover {
            transform: translateX(-2px);
            opacity: 0.9;
          }
        }

        button {
          img.chevron {
            width: 2.4rem;
            transform: rotate(0);
            margin-left: -2.5rem;
            padding: 0.6rem 0.8rem;
            transition: transform 0.3s ease-out, opacity 0.3s ease;
          }

          /* &.collapsed {
            & + .child-ul {
              display: none;
            }
            img.chevron {
              transform: rotate(0deg);
            }
          } */
        }
      }
    }
  }

  .left {
    & > * {
      margin-right: 2rem;

      @media (min-width: 75rem) {
        margin-right: 4rem;
      }
    }
  }

  .right {
    justify-content: flex-end;
    padding-left: 0;

    & > * {
      margin-left: 2rem;

      @media (min-width: 75rem) {
        margin-left: 4rem;
      }
    }
  }

  .logo {
    display: flex;
    align-items: center;
    margin: 1rem 2rem;
    text-decoration: none;
    font-size: 1.1rem;
    transition: opacity 0.3s ease, transform 0.3s ease;

    &:hover {
      opacity: 0.8;
      transform: scale(0.95);
    }

    @media (min-width: 87.5rem) {
      // 1400px
      margin: 2rem;
      font-size: 1.3rem;
    }

    .logo-text {
      margin-left: 1.5rem;
      color: var(--black);
      line-height: 1.7;

      @media (min-width: 87.5rem) {
        margin-left: 2.4rem;
      }
    }
  }

  .hidden-on-mobile {
    @media (max-width: 68.6875rem) {
      // 1099px
      display: none;
    }
  }
  .hidden-on-desktop {
    @media (min-width: 68.75rem) {
      // 1100px
      display: none;
    }
  }
`;

// const navItemList = [
//   {
//     text: 'Covid-19 Policy',
//     href: '/covid-19-policy',
//   },
//   {
//     text: 'Appointment',
//     href: '/appointment',
//   },
//   {
//     text: 'Services',
//     href: '/services',
//   },
//   {
//     text: 'About',
//     href: '/about',
//   },
//   {
//     text: 'Community',
//     href: '/community',
//   },
//   {
//     text: 'Hours',
//     href: '/hours',
//   },
//   {
//     text: 'Location',
//     href: '/location',
//   },
//   {
//     text: 'Contact',
//     href: '/contact',
//   },
// ];

// const firstHalfList = navItemList.slice(0, navItemList.length / 2);
// const lastHalfList = navItemList.slice(navItemList.length / 2);

const showChildNav = (event) => {
  event.preventDefault();
  console.log(event.target);

  console.log(
    event.target.querySelector('.child-nav')?.classList.toggle('is-visible')
  );
  console.log(event.target);
};

const showGrandchildNav = (event) => {
  event.preventDefault();
  console.log(event.target);
  event.target.classList.toggle('expanded');
  event.target.nextSibling.classList.toggle('is-visible');

  console.log(
    event.target
      .querySelector('.grandchild-nav')
      ?.classList.toggle('is-visible')
  );
};

function NavDesktopItem({ data }) {
  // return (
  //   <Link className="parent-nav-item" to="./" onClick={showchild-nav}>
  //     Drop it!
  //     <ul className="child-nav">
  //       <li>
  //         <Link>Item 1</Link>
  //       </li>
  //       <li>
  //         <Link>Item 2</Link>
  //       </li>
  //       <li>
  //         <button type="button">Item 3</button>
  //         <ul className="child-nav">
  //           <li>
  //             <Link>Child item 1</Link>
  //           </li>
  //           <li>
  //             <Link>Child item 2</Link>
  //           </li>
  //         </ul>
  //       </li>
  //     </ul>
  //   </Link>
  // );
  console.log(data);
  return (
    <div type="button" className="parent-nav-item" onClick={showChildNav}>
      Drop it!
      <ul className="child-nav">
        <li>
          <Link>Item 1</Link>
        </li>
        <li>
          <Link>Item 2</Link>
        </li>
        <li className="list-item-no-dot">
          <button type="button" onClick={showGrandchildNav}>
            <img className="chevron" src={chevronIcon} alt="Chevron icon" />
            Item 3
          </button>
          <ul className="grandchild-nav">
            <li>
              <Link>Child item 1</Link>
            </li>
            <li>
              <Link>Child item 2</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default function NavDesktop({ data }) {
  const { nav } = data;
  const firstHalfList = nav.nodes.slice(0, nav.nodes.length / 2);
  const lastHalfList = nav.nodes.slice(nav.nodes.length / 2);
  // return (
  //   <NavDesktopStyles className="nav-desktop">
  //     <div className="left">
  //       <NavDesktopItem />
  //       {firstHalfList.map((item) => (
  //         <Link to={item.href} key={item.text}>
  //           {item.text}
  //         </Link>
  //       ))}
  //     </div>
  //     <div className="row space-between">
  //       <Link to="/" className="logo">
  //         <img
  //           src={logo}
  //           alt="DeWan Dental Logo, outline drawing of abstract faces"
  //         />
  //         <div className="logo-text">
  //           Dewan
  //           <br />
  //           Dental
  //           <br />
  //           Wellness
  //         </div>
  //       </Link>
  //     </div>
  //     <div className="right">
  //       {lastHalfList.map((item) => (
  //         <Link to={item.href} key={item.text}>
  //           {item.text}
  //         </Link>
  //       ))}
  //     </div>
  //   </NavDesktopStyles>
  // );
  return (
    <NavDesktopStyles className="nav-desktop">
      <div className="left">
        <NavDesktopItem />
        {firstHalfList.map((item) => (
          <Link className="parent-nav-item" to="#" key={item.title}>
            {item.title}
          </Link>
        ))}
        {firstHalfList.map((item) => (
          <NavDesktopItem data={item} key={item.title} />
        ))}
      </div>
      <div className="row space-between">
        <Link to="/" className="logo">
          <img
            src={logo}
            alt="DeWan Dental Logo, outline drawing of abstract faces"
          />
          <div className="logo-text">
            Dewan
            <br />
            Dental
            <br />
            Wellness
          </div>
        </Link>
      </div>
      <div className="right">
        {lastHalfList.map((item) => (
          <Link to={item.href} key={item.text}>
            {item.text}
          </Link>
        ))}
        <NavDesktopItem />
      </div>
    </NavDesktopStyles>
  );
}
