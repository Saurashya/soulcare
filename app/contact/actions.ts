'use server';

export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: {
    name?: string;
    email?: string;
    message?: string;
  };
}

export async function submitContactForm(
  prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // Validation
  const errors: ContactFormState['errors'] = {};

  if (!name || name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters)';
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!message || message.trim().length < 10) {
    errors.message = 'Please enter a message (at least 10 characters)';
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please correct the errors below',
      errors,
    };
  }

  // In a real application, you would send this data to your backend/email service
  // For now, we'll simulate a successful submission
  // You can integrate with EmailJS, Resend, SendGrid, or your preferred email service here
  
  try {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // TODO: Replace with actual email service integration
    // Example with EmailJS:
    // const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     service_id: 'YOUR_SERVICE_ID',
    //     template_id: 'YOUR_TEMPLATE_ID',
    //     user_id: 'YOUR_USER_ID',
    //     template_params: { name, email, message },
    //   }),
    // });

    console.log('Contact form submission:', { name, email, message });

    return {
      success: true,
      message: 'Thank you for your message! We will get back to you within 24-48 hours.',
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again later or call us directly.',
    };
  }
}

