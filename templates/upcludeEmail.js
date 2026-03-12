exports.upcludeEmailTemplate = ({
  name,
  email,
  phone,
  countryCode,
  service,
  budget,
  message,
  siteUrl
}) => `
<!DOCTYPE html>
<html>
<body style="margin:0;background:#f4f4f7;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden">

<!-- HEADER -->
<tr>
<td style="background:#0f172a;padding:30px;text-align:center">

<img src="${siteUrl}/email-logo.png"
width="130"
style="display:block;margin:auto;margin-bottom:10px"/>

<h2 style="color:#ffffff;margin:0">
New Lead for Upclude 🚀
</h2>

<p style="color:#cbd5f5;font-size:13px">
Someone submitted a contact form on your website
</p>

</td>
</tr>

<!-- SERVICE -->
<tr>
<td style="background:#7c3aed;color:white;padding:12px 30px;font-weight:bold">
Requested Service: ${service}
</td>
</tr>

<!-- CONTACT DETAILS -->
<tr>
<td style="padding:30px">

<p><b>Name:</b> ${name}</p>

<p>
<b>Email:</b>
<a href="mailto:${email}" style="color:#7c3aed;text-decoration:none">
${email}
</a>
</p>

<p><b>Phone:</b> ${countryCode} ${phone}</p>

<p><b>Budget:</b> ${budget || "Not specified"}</p>

<div style="margin-top:20px;background:#f8f8ff;padding:15px;border-left:4px solid #7c3aed">
${message}
</div>

</td>
</tr>

<!-- BUTTON -->
<tr>
<td align="center" style="padding-bottom:30px">

<a href="mailto:${email}?subject=Re:${service}"
style="background:#7c3aed;color:white;text-decoration:none;padding:12px 25px;border-radius:6px">
Reply to ${name}
</a>

</td>
</tr>

<!-- FOOTER -->
<tr>
<td style="background:#f1f1f5;text-align:center;padding:18px;font-size:12px;color:#777">

<p style="margin:0">
This lead was received from the Upclude website.
</p>

<p style="margin-top:6px">
© ${new Date().getFullYear()} Upclude. All rights reserved.
</p>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;