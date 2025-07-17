"use server"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const company = formData.get("company") as string
  const message = formData.get("message") as string

  // Simulate email sending (in a real app, you'd use a service like Resend, SendGrid, etc.)
  try {
    // Here you would integrate with your email service
    console.log("Contact form submission:", { name, email, company, message })

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message: "Thank you for your message! I will get back to you soon.",
    }
  } catch (error) {
    return {
      success: false,
      message: "Sorry, there was an error sending your message. Please try again.",
    }
  }
}
