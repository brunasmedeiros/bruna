import React from "react";
import profileImg from "../../assets/profile.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Link(props: { href: string, children?: React.ReactNode }) {
  return (
    <a className="social--link" rel="noopener noreferrer" target="_blank" href={props.href}>
      {props.children}
    </a>
  )
}

export default function Connect() {
  return (
    <div className="container">
      <h3 className="text--center"> Let's Connect! </h3>
      <img alt="profile" className="profile--img" width={130} src={profileImg} />
      <h1 style={{ marginBottom: 0 }}>Hi,</h1>
      <p className="text--spaced">
        This is me, Bruna. I was born and raised in Rio de Janeiro, Brazil. In 2009 I moved to São Paulo
        to attend College and in 2014, I graduated as an Industrial Engineer.
        In São Paulo I had the awesome opportunity to work on the product team at Acer. While working there, I developed
        a passion for technology, which played a huge role in my decision to work with software today. Also in 2014,
        I took a sabbatical and moved to San Francisco, where I met my husband and
        chose to call the US my home. With my passion for technology and being so close to Silicon  Valley,
        I decided to take the jump and learn how to code. I attended Hack Reactor, a coding bootcamp which gave
        me the necessary tools to become a Software Engineer.
        If you want to learn more about my Software Engineering career, let's connect. Shoot me an email or send me a
        request in the social media bellow, I would love to chat more about it.<br/>
        Talk to you soon,<br/>
        Bruna
      </p>
      <div className="padding--top text--right margin--bottom">
        <Link href="https://www.linkedin.com/in/brunaenos/">
          <FontAwesomeIcon size="2x" icon={["fab", "linkedin"]} />
        </Link>
        <Link href="https://twitter.com/bruuuuna">
          <FontAwesomeIcon size="2x" icon={["fab", "twitter-square"]} />
        </Link>
        <a className="social--link" href="mailto:enosbruna@gmail.com?subject=Hi, Bruna. Let's Connect!">
          <FontAwesomeIcon size="2x" icon="envelope-square" />
        </a>
      </div>
    </div>
  )
}
