const Email = require("email-templates");
const path = require("path");
const transport = require("./MailTransporter").Transporter;

exports.SendEmailFromTemplate = async ({
  template,
  to,
  locals,
  sender_name = "FoodGo",
  attachments = [],
}) => {
  const email = new Email({
    message: { from: `${sender_name} <${process.env.MAIL_USER}>` },
    send: true,
    transport,
    juice: true,
    juiceResources: {
      preserveFontFaces: true,
      preserveImportant: true,
      applyStyleTags: true,
      webResources: {
        relativeTo: path.join(__dirname, "../../emails", "assets"),
      },
    },
    views: {
      options: {
        extension: "ejs",
      },
    },
  });

  const response = await email.send({
    template,
    message: {
      to,
      from: "noreply@foodgo.com",
      attachments,
    },
    locals,
  });

  return response;
};
