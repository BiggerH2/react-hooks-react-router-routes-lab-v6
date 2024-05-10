import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

let container;

beforeEach(() => {
  // Render NavBar inside BrowserRouter and save the container
  const result = render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  container = result.container;
});

test('wraps content in a div with "navbar" class', () => {
  // Query for the div with class "navbar"
  const navbarDiv = container.querySelector(".navbar");
  // Check if the div is in the document
  expect(navbarDiv).toBeInTheDocument();
});

test("renders a Home <NavLink>", async () => {
  // Query for the Home link
  const homeLink = screen.queryByText(/Home/);
  // Check that the Home link exists
  expect(homeLink).toBeInTheDocument();
  // Check that the Home link is an <a> element
  expect(homeLink.tagName).toBe("A");
  // Check that the Home link's href contains "/"
  expect(homeLink.href).toContain("/");
  // Simulate a click on the Home link
  fireEvent.click(homeLink, { button: 0 });
  // Check that the Home link is active (contains the "active" class)
  expect(homeLink.classList).toContain("active");
});

test("renders an Actors <NavLink>", async () => {
  // Query for the Actors link
  const actorsLink = screen.queryByText(/Actors/);
  // Check that the Actors link exists
  expect(actorsLink).toBeInTheDocument();
  // Check that the Actors link is an <a> element
  expect(actorsLink.tagName).toBe("A");
  // Check that the Actors link's href contains "/actors"
  expect(actorsLink.href).toContain("/actors");
  // Simulate a click on the Actors link
  fireEvent.click(actorsLink, { button: 0 });
  // Check that the Actors link is active (contains the "active" class)
  expect(actorsLink.classList).toContain("active");
});

test("renders a Directors <NavLink>", async () => {
  // Query for the Directors link
  const directorsLink = screen.queryByText(/Directors/);
  // Check that the Directors link exists
  expect(directorsLink).toBeInTheDocument();
  // Check that the Directors link is an <a> element
  expect(directorsLink.tagName).toBe("A");
  // Check that the Directors link's href contains "/directors"
  expect(directorsLink.href).toContain("/directors");
  // Simulate a click on the Directors link
  fireEvent.click(directorsLink, { button: 0 });
  // Check that the Directors link is active (contains the "active" class)
  expect(directorsLink.classList).toContain("active");
});
