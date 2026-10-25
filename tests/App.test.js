import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";

test("Shopping Cart title is displayed", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      name: /shopping cart/i
    })
  ).toBeInTheDocument();
});

test("Products are displayed", () => {
  render(<App />);

  expect(screen.getByText("Laptop")).toBeInTheDocument();
  expect(screen.getByText("Headphones")).toBeInTheDocument();
  expect(screen.getByText("Keyboard")).toBeInTheDocument();
});

test("Product can be added to cart", async () => {
  const user = userEvent.setup();

  render(<App />);

  const addButtons = screen.getAllByRole("button", {
    name: /add to cart/i
  });

  await user.click(addButtons[0]);

  expect(screen.getByText("Laptop")).toBeInTheDocument();
  expect(screen.getByText(/quantity:\s*1/i)).toBeInTheDocument();
});

test("Product quantity can be increased", async () => {
  const user = userEvent.setup();

  render(<App />);

  const addButtons = screen.getAllByRole("button", {
    name: /add to cart/i
  });

  await user.click(addButtons[0]);

  await user.click(
    screen.getByRole("button", {
      name: "+"
    })
  );

  expect(
    screen.getByText(/quantity:\s*2/i)
  ).toBeInTheDocument();
});

test("Product quantity can be decreased", async () => {
  const user = userEvent.setup();

  render(<App />);

  const addButtons = screen.getAllByRole("button", {
    name: /add to cart/i
  });

  await user.click(addButtons[0]);

  await user.click(
    screen.getByRole("button", {
      name: "+"
    })
  );

  await user.click(
    screen.getByRole("button", {
      name: "-"
    })
  );

  expect(
    screen.getByText(/quantity:\s*1/i)
  ).toBeInTheDocument();
});

test("Product can be removed from cart", async () => {
  const user = userEvent.setup();

  render(<App />);

  const addButtons = screen.getAllByRole("button", {
    name: /add to cart/i
  });

  await user.click(addButtons[0]);

  await user.click(
    screen.getByRole("button", {
      name: /remove/i
    })
  );

  expect(
    screen.getByText(/your cart is empty/i)
  ).toBeInTheDocument();
});

test("Total price is displayed", async () => {
  const user = userEvent.setup();

  render(<App />);

  const addButtons = screen.getAllByRole("button", {
    name: /add to cart/i
  });

  await user.click(addButtons[0]);

  expect(
    screen.getByText(/total/i)
  ).toBeInTheDocument();
});
