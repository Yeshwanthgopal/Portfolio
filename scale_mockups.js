const fs = require('fs');

const files = [
  'CaseStudyConversive.tsx',
  'CaseStudyCredilinq.tsx',
  'CaseStudyGemstower.tsx',
  'CaseStudySunstone.tsx'
];

files.forEach(f => {
  const fp = 'components/' + f;
  try {
    let content = fs.readFileSync(fp, 'utf8');
    
    // Scale down BrowserMockups unconditionally
    content = content.replace(/className="([^"]*)block w-full max-w-4xl mx-auto/g, 'className="$1block w-[90%] md:w-full max-w-4xl mx-auto');
    
    // Scale down PhoneMockups unconditionally in CaseStudySunstone
    if (f === 'CaseStudySunstone.tsx') {
        content = content.replace(/w-\[344px\]/g, 'w-[280px] sm:w-[320px] md:w-[344px]');
    }

    fs.writeFileSync(fp, content, 'utf8');
    console.log("Scaled " + fp);
  } catch (e) {
    console.error(e);
  }
});
