export const useApi = () => {
  const config = useRuntimeConfig();

  const sendEmail = async (emailForm: {
    from: string;
    fromName?: string;
    message: string;
    subject: string;
  }): Promise<{ status: number; body?: any }> => {
    try {
      const res = await $fetch(`${config.gomailerBaseURL}/api/v1/sendmail`, {
        method: "post",
        headers: {
          "Api-Key": config.gomailerApiKey,
          "Content-Type": "application/json",
        },
        body: {
          from: emailForm.from,
          fromName: emailForm.fromName,
          to: "af.osorio1341@gmail.com",
          toName: "Anfelo",
          subject: emailForm.subject,
          plainTextContent: "This is a test",
          htmlContent: "<h1>This is a test</h1>",
        },
      });
      console.log(res);
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
