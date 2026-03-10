import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: "easeOut" }
};

const processSteps = [
    { num: "01", title: "Diagnóstico Clínico", desc: "Avaliamos sua presença atual e traçamos metas realistas baseadas na sua especialidade e concorrência local." },
    { num: "02", title: "Planejamento Estratégico", desc: "Criamos o plano de ação focado em SEO, adequação tecnológica e estruturação de campanhas." },
    { num: "03", title: "Implementação", desc: "Desenvolvemos seu site, configuramos as redes e estruturamos as automações de contato no WhatsApp." },
    { num: "04", title: "Posicionamento CFM", desc: "Revisão e adaptação de toda comunicação visual e escrita para estar 100% de acordo com as normas médicas." },
    { num: "05", title: "Tração de Campanhas", desc: "Lançamento das campanhas no Google Ads, buscando quem ativamente pesquisa pela sua especialidade." },
    { num: "06", title: "Acompanhamento", desc: "Reuniões semanais com os relatórios de volume de contatos e agendamentos confirmados em clínica." }
];

export default function Process() {
    return (
        <section className="py-5 bg-blue-night mt-5">
            <Container className="py-5">
                <motion.div {...fadeInUp} className="text-center mb-5">
                    <h2 className="display-5 font-montserrat text-white mb-3">Como vai funcionar</h2>
                    <p className="text-gray-silver fs-5">Conheça as etapas do nosso processo juntos</p>
                </motion.div>

                <Row className="g-4">
                    {processSteps.map((step, idx) => (
                        <Col md={6} lg={4} key={idx}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="process-card"
                            >
                                <div className="process-number">{step.num}</div>
                                <h4 className="font-montserrat text-white fs-5 mb-3">{step.title}</h4>
                                <p className="text-gray-silver mb-0 small">{step.desc}</p>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
