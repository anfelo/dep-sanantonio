export const useApi = () => {
  const config = useRuntimeConfig();

  const sendEmail = async (emailForm: {
    email: string;
    name?: string;
    message?: string;
    subject?: string;
  }): Promise<{ status: number; body?: any }> => {
    try {
      await $fetch(`${config.gomailerBaseURL}/api/v1/sendmail`, {
        method: "POST",
        headers: { "Api-Key": config.gomailerApiKey },
        body: {
          from: config.fromSenderEmail,
          to: config.toContactEmail,
          subject: emailForm.subject
            ? emailForm.subject
            : `Nueve solicitud de: ${emailForm.name}`,
          plainTextContent: `
            Solicitud de ${emailForm.name} - ${emailForm.email}:
            ${emailForm.message}
          `,
          htmlContent: `
            Solicitud de <b>${emailForm.name}</b> - ${emailForm.email}:
            <p>${emailForm.message}</p>
          `,
        },
      });
      return { status: 200 };
    } catch (error) {
      console.log(error);
      return { status: 400, body: null };
    }
  };

  return {
    sendEmail,
  };
};
