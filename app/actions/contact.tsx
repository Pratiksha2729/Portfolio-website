"use server"

// Simulated server-side contact handler
export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const company = formData.get("company") as string
  const message = formData.get("message") as string

  try {
    // Pretend we send an email here
    console.log("Contact form submission:", { name, email, company, message })
    await new Promise((r) => setTimeout(r, 1_000)) // artificial delay

    return {
      success: true,
      message: "Thank you for your message! I will get back to you soon.",
    }
  } catch {
    return {
      success: false,
      message: "Sorry, there was an error sending your message. Please try again.",
    }
  }
}
