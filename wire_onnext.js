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
    
    // 1. Update the exported function signature
    const signatureRegex = /export default function (\w+)\(\{\s*onClose\s*\}\s*:\s*\{\s*onClose\s*:\s*\(\)\s*=>\s*void\s*\}\)\s*\{/g;
    content = content.replace(signatureRegex, 'export default function $1({ onClose, onNext }: { onClose: () => void, onNext?: () => void }) {');
    
    // 2. Update the Next Project button to use onClick={onNext}
    // Search for button before "Next Project"
    const btnRegex = /(<button\s+)(className="[^"]*bg-yellow-500[^"]*")([^>]*>\s*Next Project\s*<\/button>)/g;
    content = content.replace(btnRegex, '$1onClick={onNext} $2$3');

    fs.writeFileSync(fp, content, 'utf8');
    console.log("Wired up " + fp);
  } catch (e) {
    console.error(e);
  }
});
