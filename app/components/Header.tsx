'use client';

import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ContactModal from './ContactModal';

export default function Header() {
    const [showModal, setShowModal] = useState(false);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        if (window.location.pathname === '/') {
            e.preventDefault();
            const element = document.getElementById(targetId);
            if (element) {
                const navbarHeight = 80; // approximate navbar height
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <Navbar expand="lg" fixed="top" className="glass-nav py-3">
            <Container>
                <Navbar.Brand as={Link} href="/" className="text-blue-main fs-4 font-montserrat d-flex align-items-center fw-bold text-decoration-none">
                    clinical<span style={{ color: 'var(--blue-night)' }}>.</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto gap-2 gap-lg-4 my-3 my-lg-0">
                        <Nav.Link as={Link} href="/#home" className="nav-link" onClick={(e: any) => handleScroll(e, 'home')}>Home</Nav.Link>
                        <Nav.Link as={Link} href="/#servicos" className="nav-link" onClick={(e: any) => handleScroll(e, 'servicos')}>Serviços</Nav.Link>
                        <Nav.Link as={Link} href="/#clientes" className="nav-link" onClick={(e: any) => handleScroll(e, 'clientes')}>Nossos clientes</Nav.Link>
                        <Nav.Link as={Link} href="/blog" className="nav-link">Blog</Nav.Link>
                    </Nav>
                    <button
                        onClick={() => setShowModal(true)}
                        className="glow-button border-0 mt-2 mt-lg-0 mb-3 mb-lg-0"
                        style={{ padding: '10px 24px' }}
                    >
                        Entre em contato <ArrowRight size={16} />
                    </button>
                </Navbar.Collapse>
            </Container>

            <ContactModal show={showModal} onHide={() => setShowModal(false)} />
        </Navbar>
    );
}
