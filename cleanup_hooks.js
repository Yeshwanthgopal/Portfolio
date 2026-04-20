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
    
    // Remove unused handleMouseMove and mousePos
    content = content.replace(/const \[mousePos, setMousePos\] = useState\([^)]*\);\n?/g, '');
    content = content.replace(/const handleMouseMove =[^;]+;\n?/g, '');
    content = content.replace(/^\s*onMouseMove=\{handleMouseMove\}\s*\n?/gm, '');
    content = content.replace(/import React, \{ useEffect, useState, useRef \} from "react";/g, 'import React, { useRef } from "react";');
    content = content.replace(/import React, \{ useEffect, useState \} from "react";/g, 'import React from "react";');
    
    fs.writeFileSync(fp, content, 'utf8');
    console.log("Cleaned " + fp);
  } catch (e) {
    console.error(e);
  }
});
