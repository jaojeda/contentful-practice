import { useStaticQuery } from "gatsby";
import React from "react";
import renderer from "react-test-renderer";

import Bio from "../bio";

beforeEach(() => {
    useStaticQuery.mockReturnValueOnce({
        site: {
        siteMetadata: {
          author: {
            name: "Jose Ojeda",
            summary: "who lives and works in Portland building useful things."
          },
          social: {
            twitter: "JosAOjed"
          }
        }
      }})
})

describe("Bio", () => {
    it("renders the bio section", () => {
        const bio = renderer
            .create(<Bio />)
            .toJSON();
        expect(bio).toMatchSnapshot();
    });
});