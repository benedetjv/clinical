import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: "easeOut" }
};

export default function About() {
    return (
        <section id="sobre" className="py-5 my-5">
            <Container>
                <div className="sobre-box overflow-hidden shadow-lg">
                    <Row className="align-items-center position-relative z-1">
                        <Col lg={8} className="mx-auto text-center">
                            <motion.div {...fadeInUp}>
                                <div className="d-inline-flex mb-4 px-3 py-1 rounded-pill bg-white text-blue-main fw-bold small">
                                    A NOSSA MISSÃO
                                </div>
                                <h2 className="display-5 font-montserrat mb-4 text-white">
                                    "Cuidamos de quem cuida das pessoas."
                                </h2>
                                <p className="fs-5 mb-4 text-white opacity-75 fw-light" style={{ lineHeight: '1.8' }}>
                                    A Clinical. é uma agência voltada para médicos recém-formados ou
                                    aqueles que desejam estabelecer sua marca e crescer cada vez mais no meio da saúde.
                                </p>
                                <p className="text-gray-silver mb-5 w-75 mx-auto">
                                    Sabemos que a responsabilidade clínica é imensa. Por isso, entregamos um marketing digital ético, focado na confiança clínica, equilibrando a máxima seriedade do setor de saúde com o dinamismo tecnológico.
                                </p>
                                <Link href="/#clientes" className="btn btn-outline-light rounded-pill px-4 py-2 fw-semibold">
                                    Ver nossos cases
                                </Link>
                            </motion.div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
}
