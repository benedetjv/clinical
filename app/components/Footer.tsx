import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';
import ContactModal from './ContactModal';

export default function Footer() {
    const [showModal, setShowModal] = useState(false);

    return (
        <footer className="bg-blue-night py-5 mt-auto">
            <Container>
                <Row className="gy-4 mb-5 pb-4 border-bottom" style={{ borderColor: 'rgba(255, 255, 255, 0.1) !important' }}>
                    <Col lg={4} className="pe-lg-5">
                        <div className="text-blue-main fs-3 font-montserrat fw-bold mb-4">
                            clinical<span className="text-white">.</span>
                        </div>
                        <p className="text-gray-silver mb-4 pe-lg-4" style={{ lineHeight: '1.7' }}>
                            Agência especializada em posicionamento e autoridade digital médica de alto padrão.
                        </p>
                        <div className="d-flex gap-3 mt-4">
                            <a href="https://wa.me/5548991701454" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center rounded-circle border border-secondary text-gray-silver hover-social" style={{ width: '40px', height: '40px', transition: 'all 0.3s ease' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" /></svg>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center rounded-circle border border-secondary text-gray-silver hover-social" style={{ width: '40px', height: '40px', transition: 'all 0.3s ease' }}>
                                <Linkedin size={20} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center rounded-circle border border-secondary text-gray-silver hover-social" style={{ width: '40px', height: '40px', transition: 'all 0.3s ease' }}>
                                <Instagram size={20} />
                            </a>
                        </div>
                    </Col>

                    <Col sm={6} lg={4}>
                        <h5 className="font-montserrat text-white mb-4">Explorar</h5>
                        <ul className="list-unstyled d-flex flex-column gap-3">
                            <li><Link href="/#home" className="text-gray-silver text-decoration-none hover:text-white transition">Home</Link></li>
                            <li><Link href="/#servicos" className="text-gray-silver text-decoration-none hover:text-white transition">Serviços</Link></li>
                            <li><Link href="/#clientes" className="text-gray-silver text-decoration-none hover:text-white transition">Cases / Clientes</Link></li>
                            <li><Link href="/blog" className="text-gray-silver text-decoration-none hover:text-white transition">Blog Editorial</Link></li>
                        </ul>
                    </Col>

                    <Col sm={6} lg={4}>
                        <h5 className="font-montserrat text-white mb-4">Serviços Clínicos</h5>
                        <ul className="list-unstyled d-flex flex-column gap-3">
                            <li className="text-gray-silver">Criação de sites</li>
                            <li className="text-gray-silver">Consultoria em SEO Médico</li>
                            <li className="text-gray-silver">Branding e Design</li>
                            <li className="text-gray-silver">Marketing no Google Ads</li>
                        </ul>
                    </Col>
                </Row>

                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                    <span className="text-gray-silver small text-center text-md-start">
                        © {new Date().getFullYear()} Clinical Agência Médica. Todos os direitos reservados.
                    </span>
                    <div className="d-flex gap-3 text-gray-silver small">
                        <span>Adequado ao Manual CFM.</span>
                    </div>
                </div>
            </Container>

            <ContactModal show={showModal} onHide={() => setShowModal(false)} />
        </footer>
    );
}
