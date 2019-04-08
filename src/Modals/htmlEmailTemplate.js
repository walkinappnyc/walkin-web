export function buildHtmlTemplate(opts) {
  const template = `
  <strong>Message from:</strong> ${opts.name}
  <br/><br/>
  <strong>Email:</strong> ${opts.from}
  <br/><br/>
  <strong>Phone Number:</strong> ${opts.phoneNumber}
  <br/><br/>
  <strong>Property inquiring about:</strong> ${opts.address}
  <br/><br/>
  <strong>Message:</strong> ${opts.text}
  <br/><br/>
  <br/><br/>
  <strong><i>Powered by Walk.in</i></strong>
  `;
  return template;
}
