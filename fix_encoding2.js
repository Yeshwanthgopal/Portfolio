const fs = require('fs');

['CaseStudySunstone.tsx', 'CaseStudyGemstower.tsx'].forEach(f => {
  const fp = 'components/' + f;
  try {
    let content = fs.readFileSync(fp);
    // decode latin1 to utf8 if corrupted
    let str = content.toString('latin1');
    // NOTE: If Set-Content already mangled the file, we can retrieve the unicode values by decoding latin1 back to utf8
    let utf8str = Buffer.from(str, 'latin1').toString('utf8');
    
    // Also remove the handleMouseMove lines
    utf8str = utf8str.replace(/^\s*onMouseMove=\{handleMouseMove\}\s*$/gm, '');
    
    fs.writeFileSync(fp, utf8str, 'utf8');
    console.log("Fixed " + fp);
  } catch (e) {
    console.error(e);
  }
});
