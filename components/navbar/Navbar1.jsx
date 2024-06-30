"use client";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar1 = () => {
  const pathname = usePathname();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{ flexGrow: "0.5" }}>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link
              className={`${pathname === "/" ? "active" : ""} linkStyle`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`${pathname === "/pricing" ? "active" : ""} linkStyle`}
              href="/pricing"
            >
              Pricing
            </Link>
            <Link
              className={`${
                pathname === "/dashboard" ? "active" : ""
              } linkStyle`}
              href="/dashboard"
            >
              Dashboard
            </Link>
            <Link
              className={`${pathname === "/about" ? "active" : ""} linkStyle`}
              href="/about"
            >
              About
            </Link>
          </Nav>
          <div className=" text-center">
            <button className="me-4 secondaryBtn">Demo</button>
            <button className="btnPrimary">Sign In</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
