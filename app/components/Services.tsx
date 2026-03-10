import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { Globe, Search, TrendingUp, LifeBuoy, UserCheck, Bug } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: "easeOut" }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const services = [
    { icon: <Globe size={24} />, title: "Criação de sites", desc: "Plataformas modernas focadas na jornada do paciente." },
    { icon: <Search size={24} />, title: "SEO", desc: "Apareça no topo quando pacientes buscarem por você." },
    { icon: <TrendingUp size={24} />, title: "Performance e Visibilidade", desc: "Campanhas focadas em volume qualificado para sua clínica." },
    { icon: <UserCheck size={24} />, title: "Consultoria Personalizada", desc: "Planejamento exclusivo para médicos estabelecidos." },
    { icon: <LifeBuoy size={24} />, title: "Manutenção e Suporte", desc: "Segurança técnica total para você focar no atendimento." },
    { icon: <Bug size={24} />, title: "Correção de bugs", desc: "Aprimoramentos em sistemas e otimização geral." },
];

export default function Services() {
    return (
        <section id="servicos" className="py-5 my-5 bg-light-gray">
            <Container className="py-5">
                <motion.div {...fadeInUp} className="text-center mb-5">
                    <h2 className="display-5 font-montserrat mb-3 text-blue-night">Nossos Serviços</h2>
                    <p className="text-dark-body fs-5">
                        Cuidamos da sua estrutura digital para você focar no paciente.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <Row className="g-4">
                        {services.map((service, index) => (
                            <Col md={6} lg={4} key={index}>
                                <motion.div
                                    variants={fadeInUp}
                                    className="service-card"
                                >
                                    <div className="service-card-icon">
                                        {service.icon}
                                    </div>
                                    <h4 className="font-montserrat fs-5 text-blue-night mb-3">{service.title}</h4>
                                    <p className="text-dark-body small mb-0">{service.desc}</p>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </motion.div>
            </Container>
        </section>
    );
}
