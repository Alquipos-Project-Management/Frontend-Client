export interface ContactPageContent {
  id: string;
  page_key: string; // 'contact'
  section_key: string; // e.g., 'header', 'info', 'social'
  content: {
    title?: string;
    subtitle?: string;
    address?: string;
    phone?: string;
    email?: string;
    businessHours?: {
      weekdays: string;
      saturday: string;
    };
    socialMedia?: {
      facebook?: string;
      instagram?: string;
      linkedin?: string;
      whatsapp?: string;
    };
  };
  status: string; // 'published' | 'draft'
  display_order: number;
  content_type: string; // 'text' | 'image' | 'video' etc.
  metadata?: Record<string, any>;
  language: string;
  version: number;
}

export interface ContactPageData {
  header: ContactPageContent;
  info: ContactPageContent;
  social: ContactPageContent;
} 