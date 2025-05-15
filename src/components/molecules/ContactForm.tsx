'use client';

import React, { useState } from 'react';
import { Input } from '../atoms/Input';
import { TextArea } from '../atoms/TextArea';
import styles from '@/app/contact/contact.module.css';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  dateOfBirth: string;
}

interface FormErrors {
  [key: string]: string;
}

interface ContactFormProps {
  onSubmit: (formData: FormData) => Promise<void>;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    dateOfBirth: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName) {
      newErrors.firstName = 'El nombre es requerido';
    }
    
    if (!formData.lastName) {
      newErrors.lastName = 'El apellido es requerido';
    }
    
    if (!formData.email) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Correo electrónico inválido';
    }
    
    if (!formData.subject) {
      newErrors.subject = 'El asunto es requerido';
    }
    
    if (!formData.message) {
      newErrors.message = 'El mensaje es requerido';
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'La fecha de nacimiento es requerida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await onSubmit(formData);
        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          dateOfBirth: ''
        });
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles.formContainer} space-y-4`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Nombre"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
          placeholder="Ingrese su nombre"
          disabled={isSubmitting}
        />
        
        <Input
          label="Apellido"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
          placeholder="Ingrese su apellido"
          disabled={isSubmitting}
        />
      </div>
      
      <Input
        label="Correo Electrónico"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="ejemplo@correo.com"
        disabled={isSubmitting}
      />
      
      <Input
        label="Teléfono (opcional)"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        placeholder="+506 8888-8888"
        disabled={isSubmitting}
      />

      <Input
        label="Fecha de Nacimiento"
        name="dateOfBirth"
        type="date"
        value={formData.dateOfBirth}
        onChange={handleChange}
        error={errors.dateOfBirth}
        disabled={isSubmitting}
      />
      
      <Input
        label="Asunto"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        error={errors.subject}
        placeholder="¿En qué podemos ayudarle?"
        disabled={isSubmitting}
      />
      
      <TextArea
        label="Mensaje"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        placeholder="Escriba su mensaje aquí..."
        disabled={isSubmitting}
      />
      
      <button
        type="submit"
        className={`${styles.submitButton} w-full py-3 px-6 rounded-md font-medium text-lg relative overflow-hidden`}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className={`${styles.loadingSpinner} animate-spin`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Enviando...
          </span>
        ) : (
          'Enviar Mensaje'
        )}
      </button>
    </form>
  );
}; 