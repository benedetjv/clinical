import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section id="home" className="min-vh-100 d-flex align-items-center pt-5 mt-5">
            <Container>
                <Row className="align-items-center">
                    <Col lg={7} className="mb-5 mb-lg-0 pt-lg-5">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="d-inline-flex align-items-center gap-2 mb-4 px-3 py-2 rounded-pill bg-light-gray border-silver">
                                <ShieldCheck size={18} className="text-blue-main" />
                                <span className="text-dark fw-medium small">
                                    Marketing Ético (Regulamentado CFM)
                                </span>
                            </div>

                            <h1 className="hero-title mb-3 font-montserrat">
                                Transformando Autoridade Médica em <span className="text-blue-main">Resultados.</span>
                            </h1>

                            <p className="fs-5 mb-3 text-blue-main fw-medium">
                                Marketing ético e estratégico para clínicas de alto padrão.
                            </p>

                            <p className="lead text-dark-body mb-5" style={{ maxWidth: '600px', lineHeight: '1.6' }}>
                                Nossa metodologia foca na conformidade com o CFM e no crescimento sustentável da sua base de pacientes. Cuidamos de quem cuida das pessoas.
                            </p>

                            <div className="d-flex flex-wrap gap-4">
                                <Link href="/#servicos" className="glow-button">
                                    Conhecer estratégias <ArrowRight size={18} />
                                </Link>
                            </div>
                        </motion.div>
                    </Col>

                    <Col lg={5}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="position-relative"
                        >
                            <div className="rounded-4 overflow-hidden position-relative shadow-lg" style={{ height: '550px', backgroundColor: 'var(--gray-silver)' }}>
                                <div className="position-absolute top-0 start-0 w-100 h-100 bg-blue-night opacity-25"></div>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
