# Week 1 — Security Assessment Report  
Cybersecurity Internship — Week 1


Application Tested: OWASP Juice Shop  
URL: http://localhost:3000  

---

## Objectives
1. Understand and explore the application (signup, login, profile).  
2. Perform basic vulnerability assessment:
   - Cross-Site Scripting (XSS)  
   - SQL Injection  
   - Weak password storage  
   - Simple security misconfigurations  
3. Document vulnerabilities and suggest improvements.

---

## Tools Used
- Node.js / npm  
- Browser Developer Tools  
- OWASP ZAP (optional)  
- Kali Linux  

---

## Findings

### 1. Cross-Site Scripting (XSS)
- Status: Vulnerable  
- Description: Injected JavaScript code executed in input fields.  
- Impact: Session hijacking, data theft, malicious redirects.  
- Fix Recommendation: Sanitize input, escape output, implement Content Security Policy.

### 2. Weak Password Policy
- Status: Vulnerable  
- Description: The app allows very weak passwords (e.g., `12345`).  
- Impact: Accounts are vulnerable to brute-force attacks.  
- Fix Recommendation: Enforce strong password rules with complexity and length.

### 3. SQL Injection
- Status: Secure  
- Description: Login bypass attempts failed.  
- Impact: No risk detected for SQL Injection in login.  

---


