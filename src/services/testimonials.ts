'use client';

import supabase from './supabase-direct';
import { TestimonialProps } from '@/components/molecules/TestimonialCard';

// Retry mechanism
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const retryOperation = async <T>(operation: () => Promise<T>): Promise<T> => {
  let lastError: any;
  
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      return await operation();
    } catch (error) {
      console.warn(`Attempt ${attempt} failed, retrying...`, error);
      lastError = error;
      if (attempt < MAX_RETRIES) {
        await delay(RETRY_DELAY * attempt);
      }
    }
  }
  
  throw lastError || new Error('Operation failed after multiple retries');
};

// Interface for the raw item from Supabase RPC
interface SupabaseTestimonialItem {
  id: string;
  title?: string; // title was in the logs, though not in TestimonialProps directly
  content?: string; // Maps to TestimonialProps.text
  user_id: string;
  approved_at?: string;
  is_featured?: boolean;
  display_name?: string; // Maps to TestimonialProps.name
  submitted_at: string;
  display_order?: number;
  display_location?: string; // Maps to TestimonialProps.location
  related_entity_id?: string;
  related_entity_type?: string;
  image_url?: string; // Assuming this might be the field name for imageUrl
  // Add any other fields that come directly from rpc_testimonial_list
}

interface TestimonialListRpcResponse {
  success: boolean;
  message: string;
  data: {
    items: SupabaseTestimonialItem[]; // Items are of the raw Supabase type
    pagination?: any; 
    sorting?: any;    
  };
}

// Helper function to map Supabase item to TestimonialProps
const mapSupabaseItemToTestimonialProps = (item: SupabaseTestimonialItem): TestimonialProps => {
  return {
    id: item.id,
    name: item.display_name || 'Anonymous', // Fallback for name
    role: 'Client', // Hardcoded role as it's missing, or make it dynamic if possible
    text: item.content || '', // Fallback for text
    imageUrl: item.image_url || '', // Use image_url or empty string for placeholder logic in card
    title: item.title, // Map title from Supabase item
    submittedAt: item.submitted_at,
    approvedAt: item.approved_at || '',
    userId: item.user_id,
    relatedEntityType: item.related_entity_type,
    relatedEntityId: item.related_entity_id,
    location: item.display_location,
    isFeatured: item.is_featured || false,
    displayOrder: item.display_order,
    // specs and link are optional and not in current Supabase data, so they'll be undefined
  };
};

export const testimonialService = {
  /**
   * Get all approved testimonials
   */
  getAllTestimonials: async (): Promise<TestimonialProps[]> => {
    return retryOperation(async () => {
      try {
        if (!supabase) {
          console.error('Supabase client not initialized in testimonial service');
          throw new Error('Supabase client not available');
        }
        
        const params = {
          p_approved_only: true,
          p_page: 1,
          p_page_size: 20, 
          p_sort_direction: 'DESC',
          p_sort_field: 'submitted_at',
          p_featured_only: false 
        };
        console.log('Querying testimonial list with RPC, params:', params);
        const { data: rpcResult, error } = await supabase.rpc('rpc_testimonial_list', params);
        
        if (error) {
          console.error('Error fetching testimonials:', error);
          throw error;
        }

        if (!rpcResult || !Array.isArray(rpcResult) || rpcResult.length === 0) {
          console.warn('No data returned from rpc_testimonial_list');
          return [];
        }

        const response = rpcResult[0] as TestimonialListRpcResponse;

        if (!response || !response.success) {
          console.error('RPC call for testimonials was not successful:', response?.message);
          throw new Error(response?.message || 'Failed to retrieve testimonials');
        }
        
        const supabaseItems = response.data?.items;
        if (!supabaseItems || !Array.isArray(supabaseItems)) {
          console.warn('No testimonial items found in RPC response or invalid data format');
          return [];
        }
        
        console.log(`Retrieved ${supabaseItems.length} raw testimonials items from Supabase.`);
        // Map Supabase items to TestimonialProps
        const mappedTestimonials = supabaseItems.map(mapSupabaseItemToTestimonialProps);
        console.log(`Mapped ${mappedTestimonials.length} testimonials to TestimonialProps structure.`);
        return mappedTestimonials;
      } catch (error) {
        console.error('Error fetching testimonials in service:', error);
        throw error;
      }
    });
  },

  /**
   * Get featured testimonials
   */
  getFeaturedTestimonials: async (): Promise<TestimonialProps[]> => {
    return retryOperation(async () => {
      try {
        if (!supabase) {
          console.error('Supabase client not initialized in testimonial service');
          throw new Error('Supabase client not available');
        }
        
        const params = {
          p_approved_only: true,
          p_page: 1,
          p_page_size: 5, 
          p_sort_direction: 'ASC',
          p_sort_field: 'display_order',
          p_featured_only: true
        };
        console.log('Querying featured testimonials with RPC, params:', params);
        const { data: rpcResult, error } = await supabase.rpc('rpc_testimonial_list', params);
        
        if (error) {
          console.error('Error fetching featured testimonials:', error);
          throw error;
        }

        if (!rpcResult || !Array.isArray(rpcResult) || rpcResult.length === 0) {
          console.warn('No data returned from rpc_testimonial_list for featured');
          return [];
        }

        const response = rpcResult[0] as TestimonialListRpcResponse;

        if (!response || !response.success) {
          console.error('RPC call for featured testimonials was not successful:', response?.message);
          throw new Error(response?.message || 'Failed to retrieve featured testimonials');
        }

        const supabaseItems = response.data?.items;
        if (!supabaseItems || !Array.isArray(supabaseItems)) {
          console.warn('No featured testimonial items found in RPC response or invalid data format');
          return [];
        }
        
        console.log(`Retrieved ${supabaseItems.length} raw featured testimonials items from Supabase.`);
        // Map Supabase items to TestimonialProps
        const mappedTestimonials = supabaseItems.map(mapSupabaseItemToTestimonialProps);
        console.log(`Mapped ${mappedTestimonials.length} featured testimonials to TestimonialProps structure.`);
        return mappedTestimonials;
      } catch (error) {
        console.error('Error fetching featured testimonials in service:', error);
        throw error;
      }
    });
  },

  /**
   * Get testimonial by ID
   */
  getTestimonialById: async (id: string): Promise<TestimonialProps | null> => {
    return retryOperation(async () => {
      try {
        if (!supabase) {
          console.error('Supabase client not initialized in testimonial service');
          throw new Error('Supabase client not available');
        }
        
        console.log('Querying testimonial detail with ID:', id);
        // Assuming rpc_testimonial_get returns a single SupabaseTestimonialItem or array with one
        const { data: rpcResult, error } = await supabase.rpc('rpc_testimonial_get', { 
          p_testimonial_id: id 
        });
        
        if (error) {
          console.error('Error fetching testimonial by ID:', error);
          throw error;
        }
        
        if (!rpcResult) {
          console.warn('No testimonial found with ID from RPC:', id);
          return null;
        }
        
        // Handle if rpcResult is an array (like rpc_testimonial_list)
        const supabaseItem = Array.isArray(rpcResult) ? rpcResult[0] : rpcResult;

        if (!supabaseItem || (supabaseItem.success === false)) { // Check for {success: false, message: '...'} if it's structured that way
             console.warn('Failed to get testimonial by ID or item not found:', supabaseItem?.message);
             return null;
        }
        
        // If rpc_testimonial_get directly returns the item without the success/data wrapper:
        // Check if it has an 'id' to consider it a valid item, otherwise it might be an empty success response.
        if (typeof supabaseItem === 'object' && supabaseItem !== null && 'id' in supabaseItem) {
            return mapSupabaseItemToTestimonialProps(supabaseItem as SupabaseTestimonialItem);
        } else {
            console.warn('Unexpected structure for rpc_testimonial_get response:', supabaseItem);
            return null;
        }

      } catch (error) {
        console.error('Error fetching testimonial by ID in service:', error);
        throw error;
      }
    });
  },

  /**
   * Submit a new testimonial (not yet approved)
   */
  submitTestimonial: async (testimonial: Omit<TestimonialProps, 'id' | 'approvedAt'>): Promise<{ success: boolean, message: string, id?: string }> => {
    return retryOperation(async () => {
      try {
        if (!supabase) {
          console.error('Supabase client not initialized in testimonial service');
          throw new Error('Supabase client not available');
        }
        
        // Before submitting, we need to map TestimonialProps back to what the RPC expects, if different.
        // For now, assuming p_testimonial expects the fields as they are in TestimonialProps, 
        // but with snake_case if that's what Supabase RPC uses for parameters.
        // Example (if RPC expects snake_case):
        // const supabaseTestimonialInput = {
        //   display_name: testimonial.name,
        //   content: testimonial.text,
        //   image_url: testimonial.imageUrl,
        //   // ... other fields
        // };

        console.log('Submitting testimonial with RPC');
        const { data, error } = await supabase.rpc('rpc_testimonial_submit', { 
          p_testimonial_data: { // Assuming the RPC expects an object p_testimonial_data
            user_id: testimonial.userId, // Ensure this is the correct UUID for the user
            title: testimonial.title, // Assuming TestimonialProps gets a title, or remove if not needed by RPC
            content: testimonial.text,
            display_name: testimonial.name,
            display_location: testimonial.location,
            image_url: testimonial.imageUrl,
            related_entity_type: testimonial.relatedEntityType,
            related_entity_id: testimonial.relatedEntityId,
            // submitted_at is usually set by the backend
          } 
        });
        
        if (error) {
          console.error('Error submitting testimonial:', error);
          throw error;
        }
        
        return data || { success: false, message: 'No response from server' };
      } catch (error) {
        console.error('Testimonial submission error in service:', error);
        const message = error instanceof Error ? error.message : 'Unknown error occurred';
        if (error instanceof Error) throw error; 
        throw new Error(message); 
      }
    });
  }
}; 