'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar, Container, Button } from 'react-bootstrap';
import { signOut } from '@/utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/" className="navbar-brand">
          ✔ Todo App
        </Link>
        <Button variant="danger" onClick={signOut}>
          Sign out
        </Button>
      </Container>
    </Navbar>
  );
}
