const fs = require('fs');

['CaseStudyConversive.tsx', 'CaseStudyCredilinq.tsx'].forEach(f => {
  const fp = 'components/' + f;
  try {
    let content = fs.readFileSync(fp);
    // Decode from Windows-1252 or whatever powershell used (usually ansi/1252)
    // The previous string replacement replaced ' with ’ (Unicode 0x2019, or Windows-1252 0x92)
    // Wait, let's just do a brutal string replace in JS by reading as binary or latin1
    let str = content.toString('latin1');
    str = str.replace(/\x92/g, "'"); // replace latin1 right-single-quote with standard quote
    
    // Convert back to utf8
    fs.writeFileSync(fp, Buffer.from(str, 'latin1').toString('utf8'), 'utf8');
    console.log("Fixed " + fp);
  } catch (e) {
    console.error(e);
  }
});
