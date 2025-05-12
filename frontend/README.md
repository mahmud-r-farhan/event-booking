
# 📁 Frontend – Event Registration UI (Angular + Angular Material)

This is the frontend for the Event Registration app built with **Angular** and **Angular Material**, designed with modern UX principles and responsive layout.

----------

## 🚀 Features

-   Single-page Angular app (`standalone` component setup)
    
-   Responsive, modern Material UI
    
-   Form validation using Angular's built-in `FormsModule`
    
-   Toast feedback via `MatSnackBar` for submission status
    
-   Easy backend API integration
    
-   Mobile-friendly grid layout
    

----------

## 📦 Tech Stack

-   **Angular 17+**
    
-   **Angular Material**
    
-   **FormsModule**
    
-   **HttpClientModule**
    
-   **Tailored styling** with CSS Grid
    

----------

## 🛠️ Getting Started

### 1. 📦 Install Angular Dependencies

```bash
npm install

```

Make sure you have Angular CLI installed globally:

```bash
npm install -g @angular/cli

```

----------

### 2. 🔧 Update API URL (Optional)

If your backend is hosted somewhere else or uses a different port, open `app.component.ts` and update the API URL:

```ts
this.http.post('http://localhost:5000/api/events/register', this.formData)

```

----------

### 3. 🚀 Run Angular App

```bash
ng serve

```

Navigate to:

```
http://localhost:4200

```

You should see a responsive event registration form.

----------

## ✨ Features in UI

-   ✅ Name, email, phone, age, address, and message input fields
    
-   📬 Sends data to backend API on submit
    
-   ✅ Uses `MatSnackBar` to show success or error messages
    
-   📱 Responsive grid layout using CSS
    
-   🎨 Styled with Angular Material's `mat-form-field`, `mat-button`, and `mat-input`
    

----------

##  Modifying the UI

-   Update form layout in `app.component.html`
    
-   Adjust logic in `app.component.ts`
    
-   Add more modules to `@Component.imports` as needed
    

----------

## SEO Tips (for production)

-   Use [Angular Universal](https://angular.io/guide/universal) for server-side rendering
    
-   Add `meta` tags and Open Graph tags inside `index.html`
    
-   Use [ngx-seo](https://www.npmjs.com/package/ngx-seo) if needed
    

----------

## 🧪 Testing

Unit tests are set up in `app.component.spec.ts` using Jasmine. Run tests with:

```bash
ng test

```

----------

## 📁 Project Structure

```
frontend/
├── app/
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   └── app.component.spec.ts
├── assets/
├── index.html
└── styles.css

```