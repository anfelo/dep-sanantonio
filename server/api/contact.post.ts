import sgMail from "@sendgrid/mail";

const sendMail = (emailContent) => {
  const config = useRuntimeConfig();
  const service = new sgMail.MailService();
  service.setApiKey(config.sendGridApiKey);
  const msg = {
    to: "tutasuarez43@hotmail.com",
    from: emailContent.email,
    subject: `Consulta de: ${emailContent.name}`,
    text: emailContent.message,
    html: emailContent.message,
  };
  return service.send(msg).catch((err) => err);
};

export default defineEventHandler(async (event) => {
  const formData = await useBody(event);
  console.log(formData);
  const emailReq = await sendMail(formData);
  let emailRes = {
    code: 200,
    message:
      "Mensaje enviado con éxito! Nos contactaremos con usted muy pronto.",
  };

  if (emailReq.code && emailReq.code === 400) {
    emailRes.code = emailReq.code;
    emailRes.message = "Error enviando el mensaje. Porfavor intente más tarde.";
  }

  return { body: emailReq };
});
