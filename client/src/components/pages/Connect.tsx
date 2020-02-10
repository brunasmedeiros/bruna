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
      <img alt="profile" className="profile--img" width={150} src={profileImg} />
      <h1 style={{ marginBottom: 0 }}>Hi,</h1>
      <p className="text--spaced">
        This is me, Bruna Enos. I was born and raised in Rio de Janeiro, Brazil. In 2009 I've moved to São Paulo
        to attend College and in 2014, I graduated as an Industrial Engineer.
        In São Paulo I had the awesome opportunity to work at the product team at Acer. While working there, I've developed
        a passion for technology, which played a huge role in my decision to work with Software today. Also in 2014,
        I decided to take a sabbatical and moved to San Francisco, where I met my husband and
        decided to make US my home. With my passion in technology and being so close to Silicon  Valley, I decided to take the jump and learn how to code.
        I attended Hack Reactor, a coding bootcamp which gave me the necessary tools to become a Software Engineer.
        If you want to learn more about my Software Engineering career, let's connect. shoot me an email or send me a
        request in the social media bellow, I would love to chat more about it.<br/>
        Talk to you soon then,<br/>
        Bruna
      </p>
      <div className="padding--top text--right">
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
