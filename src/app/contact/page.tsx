'use client';

import { useState, useEffect } from 'react';
import { ContactForm } from '@/components/molecules/ContactForm';
import { SocialMediaBar } from '@/components/molecules/SocialMediaBar/SocialMediaBar';
import { contactService } from '@/services/contact';
import { emailService } from '@/services/email';
import { ContactPageData } from '@/types/contact';
import styles from './contact.module.css';

const fallbackData: ContactPageData = {
  header: {
    id: '',
    page_key: 'contact',
    section_key: 'header',
    content: {
      title: 'Póngase en Contacto con Nosotros',
      subtitle: 'Estamos aquí para ayudarle con sus necesidades de alquiler de equipos.'
    },
    status: 'published',
    display_order: 0,
    content_type: 'text',
    language: 'es',
    version: 1
  },
  info: {
    id: '',
    page_key: 'contact',
    section_key: 'info',
    content: {
      title: 'Información de Contacto',
      address: 'Calle Principal #123, Ciudad',
      phone: '+57 300 123 4567',
      email: 'info@alquipos.com',
      businessHours: {
        weekdays: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
        saturday: 'Sábado: 8:00 AM - 12:00 PM'
      }
    },
    status: 'published',
    display_order: 0,
    content_type: 'text',
    language: 'es',
    version: 1
  },
  social: {
    id: '',
    page_key: 'contact',
    section_key: 'social',
    content: {
      title: 'Síganos en Redes Sociales',
      socialMedia: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        whatsapp: 'https://whatsapp.com'
      }
    },
    status: 'published',
    display_order: 0,
    content_type: 'text',
    language: 'es',
    version: 1
  }
};

export default function ContactPage() {
  const [pageData, setPageData] = useState<ContactPageData>(fallbackData);
  const [isLoading, setIsLoading] = useState(true);
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  
  const { header, info, social } = pageData;

  useEffect(() => {
    const loadContactData = async () => {
      try {
        const data = await contactService.getContactPageData();
        setPageData(data);
      } catch (error) {
        console.error('Error loading contact data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadContactData();
  }, []);

  const handleFormSubmit = async (formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    dateOfBirth: string;
  }) => {
    try {
      setFormStatus({ type: null, message: '' });
      
      console.log('Submitting form with data:', formData);

      const clientData = {
        p_first_name: formData.firstName,
        p_last_name: formData.lastName,
        p_email: formData.email,
        p_phone: formData.phone || null,
        p_date_of_birth: formData.dateOfBirth,
        p_address: null,
        p_extra_information: {
          notas: formData.message,
          tipo_cliente: 'contact_form',
          asunto: formData.subject
        },
        p_is_active: true
      };

      console.log('Calling createClient with data:', clientData);
      
      const response = await contactService.createClient(clientData);
      console.log('Received response:', response);

      if (response.success) {
        // Send email notification
        try {
          await emailService.sendContactEmail(formData);
          console.log('Contact email sent successfully');
        } catch (emailError) {
          console.error('Error sending contact email:', emailError);
          // Don't throw the error, as the client was created successfully
        }

        setFormStatus({
          type: 'success',
          message: '¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.'
        });
      } else {
        let errorMessage = 'Hubo un error al procesar tu solicitud. Por favor, intenta nuevamente.';
        
        if (response.message === 'Email already in use') {
          errorMessage = 'Este correo electrónico ya está registrado. Por favor, utilice otro correo o inicie sesión.';
        } else if (response.message.includes('null value in column')) {
          errorMessage = 'Por favor, complete todos los campos requeridos.';
        } else if (response.message) {
          errorMessage = response.message;
        }

        setFormStatus({
          type: 'error',
          message: errorMessage
        });
      }
    } catch (error) {
      console.error('Error in form submission:', error);
      
      let errorMessage = 'Hubo un error al procesar tu solicitud. Por favor, intenta nuevamente.';
      
      if (error instanceof Error) {
        if (error.message.includes('Email already in use')) {
          errorMessage = 'Este correo electrónico ya está registrado. Por favor, utilice otro correo o inicie sesión.';
        } else if (error.message.includes('null value in column')) {
          errorMessage = 'Por favor, complete todos los campos requeridos.';
        }
      }

      setFormStatus({
        type: 'error',
        message: errorMessage
      });
    }
  };

  if (isLoading) {
    return <div className={styles.loading}>Cargando...</div>;
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.contactContainer}>
        <div className={styles.headerSection}>
          <h1 className={styles.mainTitle}>
            {header.content.title ? 
              <>
                {header.content.title.split(' ').slice(0, -2).join(' ')} <span>{header.content.title.split(' ').slice(-2).join(' ')}</span>
              </> : 
              'Contacto'
            }
          </h1>
          <p className={styles.subtitle}>
            {header.content.subtitle}
          </p>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.formSection}>
            <h2 className={styles.formTitle}>
              Envíenos un mensaje
            </h2>
            {formStatus.type && (
              <div className={`${styles.formStatus} ${styles[formStatus.type]}`}>
                {formStatus.type === 'success' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                )}
                {formStatus.message}
              </div>
            )}
            <ContactForm onSubmit={handleFormSubmit} />
          </div>

          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>
                {info.content.title}
              </h2>
              
              <div>
                <h3 className={styles.infoLabel}>Dirección</h3>
                <p className={styles.infoValue}>{info.content.address}</p>

                <h3 className={styles.infoLabel}>Teléfono</h3>
                <p className={styles.infoValue}>
                  <a href={`tel:${info.content.phone}`} className="text-gray-800 hover:text-gray-600 transition-colors">
                    {info.content.phone}
                  </a>
                </p>

                <h3 className={styles.infoLabel}>Correo Electrónico</h3>
                <p className={styles.infoValue}>
                  <a href={`mailto:${info.content.email}`} className="text-gray-800 hover:text-gray-600 transition-colors">
                    {info.content.email}
                  </a>
                </p>

                <h3 className={styles.infoLabel}>Horario de Atención</h3>
                <p className={styles.infoValue}>{info.content.businessHours?.weekdays}</p>
                <p className={styles.infoValue}>{info.content.businessHours?.saturday}</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>
                {social.content.title}
              </h3>
              <SocialMediaBar socialLinks={social.content.socialMedia} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 