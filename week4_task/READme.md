# Advanced Threat Detection & Web Security

## Overview
Node.js server with:

- Login attempt logging (`/var/log/node-login.log`)  
- Fail2Ban monitoring & banning suspicious IPs  
- Rate-limited API endpoints with API key auth  
- CORS & security headers (Helmet: CSP + HSTS)

---

## Setup

1. Install dependencies:

```bash
npm install express express-rate-limit helmet cors

