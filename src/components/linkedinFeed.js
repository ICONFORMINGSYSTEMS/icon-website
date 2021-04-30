import React from "react"
import { Section, Container, Actions } from "./layoutComponents"
import { ButtonSecondaryDark } from "./buttons"

export default function LinkedinFeed() {
  return (
    <Section>
      <Container className="spacing-lg">
        <h2 className="title center">recent concrete forming success</h2>
        <iframe
          src="https://www.sociablekit.com/app/embed/58768"
          frameborder="0"
          width="100%"
          height="500"
        ></iframe>
        <Actions>
          <ButtonSecondaryDark to="#projects">
            view all projects
          </ButtonSecondaryDark>
        </Actions>
      </Container>
    </Section>
  )
}
