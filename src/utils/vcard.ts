export function generateVCard(): void {
  const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:CodeEngine
ORG:CodeEngine - Tech & Digital Solutions
TITLE:Soluções Digitais Inteligentes
TEL;TYPE=CELL,VOICE:+244957459336
EMAIL;TYPE=INTERNET,PREF:codeengine2@gmail.com
URL:https://wa.me/244957459336
NOTE:Desenvolvimento de Websites, Sistemas, Aplicações Web, Automações e Inteligência Artificial.
END:VCARD`;

  const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'CodeEngine_Contacto.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
