"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CodeBlockProps {
  code: string;
  title?: string;
  language?: string;
  description?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ 
  code, 
  title = "Code Example", 
  language = "cpp", 
  description,
  showLineNumbers = true 
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const formatCode = (code: string) => {
    const lines = code.trim().split('\n');
    return lines.map((line, index) => ({
      number: index + 1,
      content: line
    }));
  };

  const renderCodeLine = (line: string) => {
    // Simple tokenizer for C++ syntax
    const tokens = [];
    let currentToken = '';
    let i = 0;
    
    while (i < line.length) {
      const char = line[i];
      
      // Handle strings
      if (char === '"') {
        if (currentToken) {
          tokens.push({ type: 'text', value: currentToken });
          currentToken = '';
        }
        let stringContent = '"';
        i++;
        while (i < line.length && line[i] !== '"') {
          stringContent += line[i];
          i++;
        }
        if (i < line.length) stringContent += '"';
        tokens.push({ type: 'string', value: stringContent });
        i++;
        continue;
      }
      
      // Handle single quotes
      if (char === "'") {
        if (currentToken) {
          tokens.push({ type: 'text', value: currentToken });
          currentToken = '';
        }
        let charContent = "'";
        i++;
        while (i < line.length && line[i] !== "'") {
          charContent += line[i];
          i++;
        }
        if (i < line.length) charContent += "'";
        tokens.push({ type: 'string', value: charContent });
        i++;
        continue;
      }
      
      // Handle comments
      if (char === '/' && i + 1 < line.length && line[i + 1] === '/') {
        if (currentToken) {
          tokens.push({ type: 'text', value: currentToken });
          currentToken = '';
        }
        tokens.push({ type: 'comment', value: line.substring(i) });
        break;
      }
      
      // Handle preprocessor
      if (char === '#' && currentToken === '') {
        let preprocessor = '#';
        i++;
        while (i < line.length && /[a-zA-Z]/.test(line[i])) {
          preprocessor += line[i];
          i++;
        }
        tokens.push({ type: 'preprocessor', value: preprocessor });
        continue;
      }
      
      // Handle whitespace and special characters
      if (/\s/.test(char) || /[{}();,<>=+\-*/%&|!]/.test(char)) {
        if (currentToken) {
          tokens.push({ type: 'text', value: currentToken });
          currentToken = '';
        }
        tokens.push({ type: 'text', value: char });
        i++;
        continue;
      }
      
      currentToken += char;
      i++;
    }
    
    if (currentToken) {
      tokens.push({ type: 'text', value: currentToken });
    }
    
    // Keywords to highlight
    const keywords = new Set([
      'include', 'using', 'namespace', 'int', 'float', 'double', 'char', 'string', 'bool',
      'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'break', 'continue', 'return',
      'class', 'public', 'private', 'protected', 'virtual', 'override', 'const', 'static',
      'template', 'typename', 'void', 'main', 'cout', 'cin', 'endl', 'std', 'true', 'false'
    ]);
    
    return tokens.map((token, index) => {
      if (token.type === 'string') {
        return <span key={index} className="text-green-400">{token.value}</span>;
      } else if (token.type === 'comment') {
        return <span key={index} className="text-gray-500 italic">{token.value}</span>;
      } else if (token.type === 'preprocessor') {
        return <span key={index} className="text-orange-400">{token.value}</span>;
      } else if (keywords.has(token.value)) {
        return <span key={index} className="text-blue-400 font-medium">{token.value}</span>;
      } else if (/^\d+\.?\d*$/.test(token.value)) {
        return <span key={index} className="text-purple-400">{token.value}</span>;
      } else {
        return <span key={index} className="text-slate-100">{token.value}</span>;
      }
    });
  };

  const formattedLines = formatCode(code);

  return (
    <Card className="w-full overflow-hidden border border-slate-200 shadow-sm">
      <CardHeader className="bg-slate-50 border-b border-slate-200 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <CardTitle className="text-lg font-semibold text-slate-800">
              {title}
            </CardTitle>
            <Badge variant="secondary" className="text-xs font-mono">
              {language.toUpperCase()}
            </Badge>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={copyToClipboard}
            className="text-xs"
          >
            {copied ? 'Copied!' : 'Copy'}
          </Button>
        </div>
        {description && (
          <p className="text-sm text-slate-600 mt-2">{description}</p>
        )}
      </CardHeader>
      
      <CardContent className="p-0">
        <div className="bg-slate-900 text-slate-100 overflow-x-auto">
          <div className="min-w-full">
            {formattedLines.map((line, index) => (
              <div 
                key={index} 
                className="flex hover:bg-slate-800 transition-colors duration-150"
              >
                {showLineNumbers && (
                  <div className="flex-shrink-0 w-12 px-3 py-2 text-slate-400 text-sm font-mono text-right border-r border-slate-700 bg-slate-800/50 select-none">
                    {line.number}
                  </div>
                )}
                <div className="flex-1 px-4 py-2 font-mono text-sm leading-relaxed">
                  {line.content ? renderCodeLine(line.content) : <span>&nbsp;</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}