# Environment Variables Example

Do not place real secrets in public files or commit them to a public repository.

```bash
# Site
SITE_URL=https://tisatotransportationservices.com
BUSINESS_NAME="TISATO Transportation Services INC"
DISPATCH_PHONE="+18448847286"
DISPATCH_EMAIL="info@tisatotransportationservices.com"

# Database
DATABASE_URL=""

# Email Provider
EMAIL_PROVIDER="resend"
EMAIL_API_KEY=""
FROM_EMAIL="noreply@tisatotransportationservices.com"

# Admin Auth
ADMIN_EMAIL=""
ADMIN_PASSWORD_HASH=""
ADMIN_SESSION_SECRET=""

# Optional Captcha / Bot Protection
HCAPTCHA_SITE_KEY=""
HCAPTCHA_SECRET_KEY=""

# Optional Future SMS
SMS_PROVIDER=""
SMS_ACCOUNT_ID=""
SMS_AUTH_TOKEN=""
SMS_FROM_NUMBER=""
```

Production systems should store secrets in the hosting provider's environment variable dashboard.

