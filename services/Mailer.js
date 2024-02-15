// const sgMail = require("@sendgrid/mail");
// const keys = require("../config/keys");

// module.exports = ({ subject, recipients }, content) => {
//   sgMail.setApiKey(keys.sendGridKey);
//   const msg = {
//     to: "yazan.saadeh.20@gmail.com",
//     from: "yazansaada0@gmail.com", // Use the email address or domain you verified above
//     subject,
//     html: content,
//   };
//   (async () => {
//     await sgMail.send(msg);
//   })();
// };
//************************************************************************************************8 */
// class Mailer extends helper.Mail {
//   constructor({ subject, recipients }, content) {
//     super();
//     this.sgApi = sendgrid(keys.sendGridKey);
//     this.from_email = new helper.Email("yazansaada0@gmail.com");
//     this.subject = subject;
//     this.body = new helper.Content("text/html", content);
//     this.recipients = this.formatAddresses(recipients);
//     this.addContent = this.body;
//     this.addClickTracking();
//     this.addRecipient();
//   }
//   formatAddresses(recipients) {
//     return recipients.map(({ email }) => {
//       return new helper.Email(email);
//     });
//   }
//   addClickTracking() {
//     const trackingSettings = new helper.TrackingSettings();
//     const clickTracking = new helper.ClickTracking(true, true);
//     trackingSettings.setClickTracking(clickTracking);
//     this.addTrackingSettings(trackingSettings);
//   }
//   addRecipient() {
//     const personalize = new helper.Personalization();
//     this.recipients.forEach((recipient) => {
//       personalize.addTo(recipient);
//     });
//     this.addPersonalization(personalize);
//   }
//   async send() {
//     const request = this.sgApi.emptyRequest({
//       method: "POST",
//       path: "/v3/mail/send",
//       body: this.toJSON(),
//     });
//     const response = this.sgApi.API(request);
//     return response;
//   }
// }

// module.exports = Mailer;

//************************************************************************************************* */
const sgMail = require("@sendgrid/mail");
const keys = require("../config/keys");

class Mailer {
  constructor({ subject, recipients }, content) {
    sgMail.setApiKey(keys.sendGridKey);
    this.from_email = "yazansaada0@gmail.com";
    this.subject = subject;
    this.content = content;
    this.recipients = this.formatAddresses(recipients);
    this.trackingSettings = {
      click_tracking: { enable: true, enable_text: true },
    };
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => email);
  }

  async send() {
    const msg = {
      to: this.recipients,
      from: this.from_email,
      subject: this.subject,
      html: this.content,
      trackingSettings: this.trackingSettings,
    };

    const response = await sgMail.send(msg);
    return response;
  }
}

module.exports = Mailer;
