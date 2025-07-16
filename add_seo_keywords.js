import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// SEO keywords for all remaining methods
const seoKeywordsMap = {
  "Certificate of Deposit (CD)": [
    "certificate of deposit India",
    "CD investment",
    "CD rates",
    "CD vs fixed deposit",
    "certificate of deposit returns",
    "CD investment guide",
    "bank CD rates",
    "CD investment strategy"
  ],
  "Liquid Funds": [
    "liquid funds investment",
    "liquid mutual funds",
    "liquid fund returns",
    "liquid fund vs savings account",
    "money market funds",
    "liquid fund benefits",
    "short term liquid funds",
    "liquid fund portfolio"
  ],
  "Recurring Deposits": [
    "recurring deposits",
    "RD investment",
    "recurring deposit calculator",
    "RD vs SIP",
    "recurring deposit rates",
    "monthly RD investment",
    "RD benefits",
    "recurring deposit returns"
  ],
  "Round-up Savings": [
    "round up savings",
    "round up investment apps",
    "spare change investing",
    "round up savings strategy",
    "micro investing apps",
    "round up savings calculator",
    "automatic savings round up",
    "round up investment benefits"
  ],
  "Online Business": [
    "online business ideas",
    "start online business",
    "ecommerce business",
    "digital business opportunities",
    "online business from home",
    "internet business ideas",
    "online business models",
    "digital entrepreneurship"
  ],
  "Digital Products": [
    "digital products business",
    "sell digital products online",
    "digital product creation",
    "online course business",
    "ebook business",
    "software business",
    "digital downloads",
    "passive income digital products"
  ],
  "Blog Monetization": [
    "blog monetization",
    "how to monetize blog",
    "blog income strategies",
    "blog advertising revenue",
    "affiliate marketing blog",
    "blog sponsorship",
    "blog business model",
    "blogging for money"
  ],
  "Virtual Assistant": [
    "virtual assistant business",
    "VA services",
    "virtual assistant work from home",
    "online virtual assistant",
    "virtual assistant skills",
    "VA business startup",
    "remote assistant services",
    "virtual assistant income"
  ],
  "Content Writing": [
    "content writing business",
    "freelance content writing",
    "content writing services",
    "copywriting business",
    "content writing income",
    "writing business from home",
    "content marketing services",
    "professional writing services"
  ],
  "Expense Tracking Apps": [
    "expense tracking apps",
    "budget tracking apps",
    "money management apps",
    "expense tracker India",
    "personal finance apps",
    "budgeting apps",
    "expense tracking tools",
    "financial management apps"
  ],
  "Envelope Method": [
    "envelope budgeting method",
    "cash envelope system",
    "envelope budget strategy",
    "cash budgeting method",
    "envelope method budgeting",
    "budgeting with envelopes",
    "envelope budget system",
    "cash envelope budgeting"
  ],
  "Automated Savings": [
    "automated savings",
    "automatic savings apps",
    "auto save money",
    "automated savings strategy",
    "smart savings apps",
    "automatic money saving",
    "savings automation",
    "auto savings features"
  ],
  "Debt Snowball Method": [
    "debt snowball method",
    "debt snowball strategy",
    "debt payoff method",
    "debt elimination strategy",
    "snowball debt method",
    "debt repayment strategy",
    "debt snowball calculator",
    "debt payoff plan"
  ],
  "Financial Goal Setting": [
    "financial goal setting",
    "money goals planning",
    "financial planning goals",
    "personal finance goals",
    "financial goal achievement",
    "money goal setting",
    "financial goal strategy",
    "personal finance planning"
  ],
  "Balance Transfer Cards": [
    "balance transfer credit cards",
    "balance transfer cards India",
    "credit card balance transfer",
    "balance transfer benefits",
    "0% balance transfer",
    "balance transfer strategy",
    "credit card debt transfer",
    "balance transfer offers"
  ],
  "Credit Counseling": [
    "credit counseling services",
    "debt counseling India",
    "credit counseling help",
    "debt management counseling",
    "financial counseling services",
    "credit counseling benefits",
    "debt advice services",
    "financial counseling India"
  ],
  "Expense Reduction": [
    "expense reduction strategies",
    "how to reduce expenses",
    "cost cutting strategies",
    "expense reduction tips",
    "money saving strategies",
    "expense reduction methods",
    "cost reduction tips",
    "expense management strategies"
  ],
  "Extra Payment Strategy": [
    "extra payment strategy",
    "debt payoff strategy",
    "extra loan payments",
    "accelerated debt payoff",
    "extra payment benefits",
    "debt reduction strategy",
    "loan payoff strategy",
    "extra payment calculator"
  ],
  "Cashback Apps": [
    "cashback apps India",
    "cashback apps",
    "cashback rewards apps",
    "money back apps",
    "cashback shopping apps",
    "reward apps",
    "cashback benefits",
    "shopping cashback apps"
  ],
  "Savings Challenge Apps": [
    "savings challenge apps",
    "money saving challenges",
    "savings challenge games",
    "52 week savings challenge",
    "savings challenge apps India",
    "money saving games",
    "savings challenge strategy",
    "financial challenge apps"
  ],
  "Receipt Scanning Apps": [
    "receipt scanning apps",
    "receipt scanner apps",
    "receipt tracking apps",
    "receipt management apps",
    "receipt scanner India",
    "digital receipt apps",
    "receipt organization apps",
    "receipt tracking tools"
  ],
  "Financial Planning Tools": [
    "financial planning tools",
    "personal finance tools",
    "financial planning software",
    "money planning tools",
    "financial planning apps",
    "personal finance software",
    "financial planning calculators",
    "money management tools"
  ]
};

// Read the current file
const filePath = path.join(__dirname, 'lib', 'data', 'artticleData.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Add SEO keywords to each method
Object.keys(seoKeywordsMap).forEach(methodName => {
  const keywords = seoKeywordsMap[methodName];
  const keywordsString = `    seoKeywords: [
      "${keywords.join('",\n      "')}"
    ],`;
  
  // Find the method and add SEO keywords after the title
  const methodPattern = new RegExp(`("${methodName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}":\\s*{[^}]*title:\\s*"[^"]*",[^}]*description:\\s*"[^"]*")`, 'g');
  
  content = content.replace(methodPattern, (match, p1) => {
    return p1.replace(/,\s*description:\s*/, `,\n    ${keywordsString}\n    description: `);
  });
});

// Write the updated content back to the file
fs.writeFileSync(filePath, content, 'utf8');

console.log('✅ Successfully added SEO keywords to all remaining methods!');
console.log(`📝 Updated ${Object.keys(seoKeywordsMap).length} methods with SEO keywords.`); 