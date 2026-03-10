import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, whatsapp, website, message } = await req.json();

        // Validar dados básicos
        if (!name || !email || !whatsapp || !message) {
            return NextResponse.json(
                { error: 'Por favor, preencha todos os campos obrigatórios.' },
                { status: 400 }
            );
        }

        // Configurar o Transportador do Nodemailer com as credenciais do Zoho
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.zoho.com',
            port: Number(process.env.SMTP_PORT) || 465,
            secure: true, // true para 465, false para outras portas
            auth: {
                user: process.env.SMTP_USER, // ex: contato@clinicalagencia.com.br
                pass: process.env.SMTP_PASS, // senha de aplicativo do zoho
            },
        });

        // Configurar o conteúdo do e-mail
        const mailOptions = {
            from: process.env.SMTP_USER, // O e-mail que envia deve ser o mesmo autenticado no Zoho
            to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // E-mail que vai receber (pode ser o mesmo ou outro da diretoria)
            subject: `Novo Lead do Site - ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
                    <h2 style="color: #2F6BFF; margin-bottom: 20px;">Você recebeu um novo contato pelo site!</h2>
                    
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px;">
                        <p style="margin: 10px 0;"><strong>👤 Nome:</strong> ${name}</p>
                        <p style="margin: 10px 0;"><strong>✉️ E-mail:</strong> ${email}</p>
                        <p style="margin: 10px 0;"><strong>📱 WhatsApp:</strong> ${whatsapp}</p>
                        <p style="margin: 10px 0;"><strong>🌐 Website:</strong> ${website || 'Não informado'}</p>
                    </div>

                    <div style="margin-top: 20px;">
                        <h3 style="color: #333; margin-bottom: 10px;">Mensagem:</h3>
                        <p style="background-color: #f1f5ff; padding: 15px; border-left: 4px solid #2F6BFF; margin: 0; color: #555; white-space: pre-wrap;">${message}</p>
                    </div>
                    
                    <hr style="border: none; border-top: 1px solid #eaeaea; margin: 30px 0;" />
                    <p style="font-size: 12px; color: #999; text-align: center;">Este e-mail foi enviado automaticamente pelo site Clinical.</p>
                </div>
            `,
        };

        // Enviar o e-mail
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Mensagem enviada com sucesso!' });

    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        return NextResponse.json(
            { error: 'Houve um erro interno ao enviar sua mensagem.' },
            { status: 500 }
        );
    }
}
