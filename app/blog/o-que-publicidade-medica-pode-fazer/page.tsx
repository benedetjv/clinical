'use client';

import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BlogPost() {
    return (
        <div className="bg-white min-vh-100 font-inter d-flex flex-column">
            <Navbar expand="lg" className="glass-nav py-3" style={{ background: 'var(--white-pure)' }}>
                <Container>
                    <Navbar.Brand as={Link} href="/" className="text-blue-main fs-4 font-montserrat d-flex align-items-center fw-bold text-decoration-none">
                        clinical<span style={{ color: 'var(--blue-night)' }}>.</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto gap-4">
                            <Nav.Link as={Link} href="/" className="nav-link">Home</Nav.Link>
                            <Nav.Link as={Link} href="/#servicos" className="nav-link">Serviços</Nav.Link>
                            <Nav.Link as={Link} href="/#clientes" className="nav-link">Nossos clientes</Nav.Link>
                            <Nav.Link as={Link} href="/blog" className="nav-link text-blue-main">Blog</Nav.Link>
                        </Nav>
                        <a
                            href="https://wa.me/5548991701454"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glow-button"
                        >
                            Entre em contato <ArrowRight size={16} />
                        </a>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <main className="py-5 mt-5 flex-grow-1">
                <Container className="py-4">
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <Link href="/blog" className="text-blue-steel text-decoration-none d-inline-flex align-items-center gap-2 mb-4 hover:text-blue-main transition">
                                <ArrowLeft size={16} /> Voltar para o Blog
                            </Link>

                            <div className="mb-4">
                                <span className="badge bg-light-gray text-blue-main border border-silver rounded-pill px-3 py-2 mb-3">SEO Médico</span>
                                <h1 className="display-5 font-montserrat text-blue-night mb-4">
                                    O que publicidade médica pode ou não fazer segundo o CFM?
                                </h1>
                                <div className="d-flex align-items-center gap-3 text-gray-silver small">
                                    <span>Publicado em: 15 de Outubro, 2026</span>
                                    <span>•</span>
                                    <span>5 min de leitura</span>
                                </div>
                            </div>

                            <div className="blog-content text-dark-body fs-5 border-top pt-5" style={{ lineHeight: '1.8' }}>
                                <p className="mb-4">
                                    Muitos especialistas se perguntam sobre o que o CRM proíbe: O manual de Publicidade Médica prevê que você não pode fazer promessas de resultados, divulgar selos de "melhor médico" ou exibir fotos de "antes e depois" de forma apelativa. Garantimos a total regularidade ética em cada linha de texto dos sites que produzimos.
                                </p>

                                <h3 className="font-montserrat text-blue-night mt-5 mb-3">O limite entre Autoridade e Mercantilismo</h3>
                                <p className="mb-4">
                                    A base normativa principal do Conselho Federal de Medicina (CFM) é proibir o mercantilismo na profissão divina da saúde. Promoções de "descontos em consultas", sorteios de procedimentos ou "combos" promocionais são estritamente vetados. Além disso, a sua especialidade só pode ser divulgada se você possuir e registrar o RQE (Registro de Qualificação de Especialista).
                                </p>

                                <h3 className="font-montserrat text-blue-night mt-5 mb-3">A Solução: Marketing de Conteúdo Elegante</h3>
                                <p className="mb-4">
                                    Ao invés de anunciar "A melhor clínica vascular", o protocolo de SEO médico atua respondendo perguntas dos pacientes: "Quais os sintomas de varizes graves?". Você soluciona a dúvida primária do paciente no Google e ele marca a consulta para resolver o problema com naturalidade e muita autoridade.
                                </p>

                                <div className="bg-light-gray p-4 rounded-4 border border-silver mt-5">
                                    <h5 className="font-montserrat text-blue-main mb-2">Quer um site que atraia pacientes sem correr riscos com o CFM?</h5>
                                    <p className="small mb-3">A equipe da Clinical é especializada em infraestrutura digital ética e de alto impacto para médicos modernos.</p>
                                    <a
                                        href="https://wa.me/5548991701454"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="glow-button btn-sm"
                                    >
                                        Falar com consultor especializado
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>

            <footer className="bg-blue-night py-4 border-top mt-auto" style={{ borderColor: 'rgba(255,255,255,0.05) !important' }}>
                <Container>
                    <div className="text-center">
                        <span className="text-gray-silver small">
                            © {new Date().getFullYear()} Clinical Agência Médica. Todos os direitos reservados.
                        </span>
                    </div>
                </Container>
            </footer>
        </div>
    );
}
