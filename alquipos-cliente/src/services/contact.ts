import { ContactPageData } from '@/types/contact';
import { mockContactData } from '@/mock/contactData';

export const contactService = {
  getContactPageData: async (): Promise<ContactPageData> => {
    // This is a mock implementation
    // Later this will be replaced with an actual API call to fetch from dynamic_content table
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockContactData);
      }, 500); // Simulate network delay
    });
  }
}; 