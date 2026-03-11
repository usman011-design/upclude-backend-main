const { Resend } = require("resend");
const { upcludeEmailTemplate } = require("../../templates/upcludeEmail");

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {

  try {

    const body = JSON.parse(event.body);

    const { name, email, phone, countryCode, service, budget, message } = body;

    if (!name || !email || !phone || !service || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" })
      };
    }

    const html = upcludeEmailTemplate({
      name,
      email,
      phone,
      countryCode,
      service,
      budget,
      message,
      siteUrl: process.env.NEXT_PUBLIC_SITE_URL
    });

    const { data, error } = await resend.emails.send({
      from: "Upclude Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL],
      replyTo: email,
      subject: `New Enquiry: ${service}`,
      html
    });

    if (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to send email" })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };

  } catch (err) {

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error" })
    };

  }

};