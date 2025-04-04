import { Metadata } from 'next';
import { ContactForm } from '@/components/molecules/ContactForm';
import { SocialMediaBar } from '@/components/molecules/SocialMediaBar/SocialMediaBar';
import { contactService } from '@/services/contact';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contáctenos | Alquipos',
  description: 'Póngase en contacto con nosotros para cualquier consulta sobre nuestros servicios de alquiler de equipos.',
};

async function getContactData() {
  return await contactService.getContactPageData();
}

export default async function Page() {
  const pageData = await getContactData();
  const { header, info, social } = pageData;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.contactContainer}>
        <div className={styles.headerSection}>
          <h1 className={styles.mainTitle}>
            {header.content.title}
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
            <ContactForm />
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